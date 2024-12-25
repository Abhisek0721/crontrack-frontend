function FallbackUI() {
    
  return (
    <div className="flex items-center justify-center h-screen bg-gray-50 text-gray-800">
      <div className="max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow-md">
        <div className="flex items-center justify-center mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-16 h-16 text-primary"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
          </svg>
        </div>
        <h1 className="text-xl font-semibold text-gray-900 mb-2 text-center">
          Something went wrong
        </h1>
        <p className="text-gray-600 text-sm mb-4 text-center">
          We’re unable to load the app right now. Please try refreshing the page or come back
          later. Our team has been notified of this issue.
        </p>
        <div className="flex space-x-4">
          <button
            onClick={() => window.location.reload()}
            className="flex-1 px-4 py-2 text-white bg-primary rounded hover:bg-opacity-90 transition"
          >
            Refresh Page
          </button>
          <button
            onClick={() => window.location.href = "/"}
            className="flex-1 px-4 py-2 text-white bg-primary rounded hover:bg-opacity-90 transition"
          >
            Go to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}

export default FallbackUI;
