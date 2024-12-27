import React from "react";
import { FaFacebook } from "react-icons/fa";

interface FacebookPreviewProps {
  profileName: string;
  content: string;
  image?: string;
}

const Facebook: React.FC<FacebookPreviewProps> = ({ profileName, content, image }) => {
  return (
    <div className="border rounded-lg shadow-lg p-4 bg-white">
      <div className="flex items-center space-x-4">
        <FaFacebook className="text-blue-600 text-2xl" />
        <span className="font-semibold">{profileName}</span>
      </div>
      <p className="mt-2 text-gray-700">{content}</p>
      {image && <img src={image} alt="Post visual" className="mt-4 w-full rounded" />}
    </div>
  );
};

export default Facebook;
