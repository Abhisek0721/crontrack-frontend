import React from 'react';

type FacebookPostPreviewProps = {
  text: string;
  images?: string[];
};

const FacebookPostPreview: React.FC<FacebookPostPreviewProps> = ({ text, images }) => {
  return (
    <div className="max-w-md mx-auto bg-white border rounded-lg shadow-md p-4">
      {/* User Info */}
      <div className="flex items-center mb-3">
        <img
          src="https://via.placeholder.com/40"
          alt="User Avatar"
          className="w-10 h-10 rounded-full"
        />
        <div className="ml-3">
          <p className="font-semibold text-sm text-gray-800">John Doe</p>
          <p className="text-xs text-gray-500">Just now</p>
        </div>
      </div>

      {/* Post Content */}
      <div className="text-sm text-gray-800 mb-3">
        {text}
      </div>

      {/* Images Section */}
      {images && images.length > 0 && (
        <div
          className={`grid gap-1 ${
            images.length === 1
              ? 'grid-cols-1'
              : images.length === 2
              ? 'grid-cols-2'
              : 'grid-cols-2'
          }`}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Post Image ${index + 1}`}
              className="object-cover w-full h-40 rounded-lg"
            />
          ))}
        </div>
      )}

      {/* Like and Comment Section */}
      <div className="border-t mt-3 pt-2">
        <div className="flex justify-around text-gray-500 text-sm">
          <div className="flex items-center space-x-2 cursor-pointer hover:text-blue-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="w-5 h-5"
            >
              <path d="M6.956 14c-.2 0-.391-.062-.548-.178l-5-3.5A.678.678 0 011 10.087V5.913c0-.264.137-.51.37-.653l5-3.5c.265-.185.617-.185.882 0l5 3.5c.233.143.37.39.37.653v4.174a.678.678 0 01-.408.622l-5 3.5a.814.814 0 01-.548.178z" />
            </svg>
            <span>Like</span>
          </div>
          <div className="flex items-center space-x-2 cursor-pointer hover:text-blue-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="w-5 h-5"
            >
              <path d="M3 14s-1 0-1-1V3a1 1 0 011-1h6a1 1 0 011 1v3l3-3v10l-3-3V11a1 1 0 00-1-1H3z" />
            </svg>
            <span>Comment</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacebookPostPreview;
