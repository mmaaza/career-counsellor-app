const Home = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg my-10">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">Welcome to Career Counsellor</h1>
      <p className="mb-6 text-gray-600">Your personal career guidance platform</p>
      
      <div className="bg-gray-50 p-6 rounded-lg mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Dashboard</h2>
        <p className="text-gray-600">This is your personal dashboard where you'll access all your career counselling services.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-blue-800 mb-2">Career Assessment</h3>
          <p className="text-blue-600">Discover your strengths and interests</p>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-green-800 mb-2">Job Recommendations</h3>
          <p className="text-green-600">Find careers that match your profile</p>
        </div>
      </div>
    </div>
  );
};

export default Home;