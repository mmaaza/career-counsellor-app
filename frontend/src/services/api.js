const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

class ApiService {
  // Get JWT token from localStorage
  getToken() {
    return localStorage.getItem('adminToken');
  }

  // Set JWT token in localStorage
  setToken(token) {
    localStorage.setItem('adminToken', token);
  }

  // Remove JWT token from localStorage
  removeToken() {
    localStorage.removeItem('adminToken');
  }

  async makeRequest(endpoint, options = {}) {
    const url = `${API_BASE_URL}${endpoint}`;
    const token = this.getToken();
    
    const config = {
      headers: {
        'Content-Type': 'application/json',
        ...(token && { Authorization: `Bearer ${token}` }),
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);
      
      if (!response.ok) {
        // If unauthorized, remove invalid token
        if (response.status === 401) {
          this.removeToken();
        }
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  // Authentication methods
  async login(credentials) {
    return this.makeRequest('/auth/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    });
  }

  async register(userData) {
    return this.makeRequest('/auth/register', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
  }

  // Check if user is authenticated
  isAuthenticated() {
    const token = this.getToken();
    if (!token) return false;
    
    try {
      // Basic JWT token validation (decode payload to check expiration)
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.exp * 1000 > Date.now();
    } catch (error) {
      this.removeToken();
      return false;
    }
  }

  // Logout method
  logout() {
    this.removeToken();
  }

  // Booking related methods
  async createBooking(bookingData) {
    return this.makeRequest('/bookings', {
      method: 'POST',
      body: JSON.stringify(bookingData),
    });
  }

  async getAllBookings(queryString = '') {
    return this.makeRequest(`/bookings${queryString}`);
  }

  async getDashboardStats() {
    // This will aggregate data from existing endpoints
    try {
      const today = new Date().toISOString().split('T')[0];
      const weekStart = new Date();
      weekStart.setDate(weekStart.getDate() - 7);
      
      // Get all bookings and calculate stats client-side
      const bookingsResponse = await this.getAllBookings('?limit=1000');
      
      if (!bookingsResponse.success) {
        throw new Error('Failed to fetch bookings for stats');
      }
      
      const bookings = bookingsResponse.data || [];
      const todayBookings = bookings.filter(booking => {
        const bookingDate = new Date(booking.appointmentDate).toISOString().split('T')[0];
        return bookingDate === today;
      });
      
      const weekBookings = bookings.filter(booking => {
        const bookingDate = new Date(booking.appointmentDate);
        return bookingDate >= weekStart;
      });
      
      const pendingBookings = bookings.filter(booking => booking.status === 'pending');
      const confirmedBookings = bookings.filter(booking => booking.status === 'confirmed');
      
      // Calculate revenue from completed bookings
      const revenue = bookings
        .filter(booking => booking.status === 'completed')
        .reduce((sum, booking) => sum + (booking.servicePrice || 0), 0);
      
      return {
        success: true,
        data: {
          todaySessions: todayBookings.length,
          weekSessions: weekBookings.length,
          pendingBookings: pendingBookings.length,
          totalClients: bookings.length, // Approximate - each booking represents a client interaction
          revenue: revenue,
          activeClients: confirmedBookings.length,
          recentBookings: bookings.slice(0, 10), // Latest 10 bookings
          todaysSchedule: todayBookings
        }
      };
    } catch (error) {
      console.error('Error fetching dashboard stats:', error);
      return {
        success: false,
        message: error.message || 'Failed to fetch dashboard statistics'
      };
    }
  }

  async getBookingById(id) {
    return this.makeRequest(`/bookings/${id}`);
  }

  async updateBooking(id, updateData) {
    return this.makeRequest(`/bookings/${id}`, {
      method: 'PUT',
      body: JSON.stringify(updateData),
    });
  }

  async updateBookingStatus(id, status) {
    return this.makeRequest(`/bookings/${id}/status`, {
      method: 'PATCH',
      body: JSON.stringify({ status }),
    });
  }

  async deleteBooking(id) {
    return this.makeRequest(`/bookings/${id}`, {
      method: 'DELETE',
    });
  }

  async checkAvailability(date, time) {
    if (time) {
      // If time is provided, use query parameters (for specific time check)
      return this.makeRequest(`/bookings/availability?date=${date}&time=${time}`);
    } else {
      // If only date is provided, use the check-availability endpoint
      return this.makeRequest(`/bookings/check-availability/${date}`);
    }
  }

  // Contact and newsletter methods
  async submitContactForm(contactData) {
    return this.makeRequest('/contact', {
      method: 'POST',
      body: JSON.stringify(contactData),
    });
  }

  async subscribeNewsletter(email) {
    return this.makeRequest('/newsletter/subscribe', {
      method: 'POST',
      body: JSON.stringify({ email }),
    });
  }

  // Services methods
  async getServices(queryParams = '') {
    return this.makeRequest(`/services${queryParams}`);
  }

  async getServiceById(id) {
    return this.makeRequest(`/services/${id}`);
  }

  async createService(serviceData) {
    return this.makeRequest('/services', {
      method: 'POST',
      body: JSON.stringify(serviceData),
    });
  }

  async updateService(id, serviceData) {
    return this.makeRequest(`/services/${id}`, {
      method: 'PUT',
      body: JSON.stringify(serviceData),
    });
  }

  async deleteService(id) {
    return this.makeRequest(`/services/${id}`, {
      method: 'DELETE',
    });
  }

  async seedServices() {
    return this.makeRequest('/services/seed', {
      method: 'POST',
    });
  }
}

// Create and export a single instance
const apiService = new ApiService();
export default apiService;
