import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/"); // This will take you back to the previous page in the history.
  };

  return (
    <div className="text-center text-2xl text-red-700 mt-20">
      Sorry, the content you're looking for was not found.
      <div>
        <button
          onClick={goBack}
          className="mt-2 text-blue-500 hover:underline cursor-pointer"
        >
          Go to Home &#127968;
        </button>
      </div>
    </div>
  );
};

export default NotFound;
