const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

class ApiService {
  async makeRequest(endpoint, options = {}) {
    const url = `${API_BASE_URL}${endpoint}`;
    const config = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  // Booking related methods
  async createBooking(bookingData) {
    return this.makeRequest('/bookings', {
      method: 'POST',
      body: JSON.stringify(bookingData),
    });
  }

  async getAllBookings() {
    return this.makeRequest('/bookings');
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
  async getServices() {
    return this.makeRequest('/services');
  }

  async getServiceById(id) {
    return this.makeRequest(`/services/${id}`);
  }
}

// Create and export a single instance
const apiService = new ApiService();
export default apiService;
