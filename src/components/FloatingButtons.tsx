import React from "react";

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-4 right-4 flex flex-col gap-2">
      <a
        href="https://www.instagram.com/bubblebrothers_ms/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-pink-500 text-white p-3 rounded-full shadow-lg hover:bg-pink-600 transition"
        aria-label="Visit Instagram"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.5 3.5a4.5 4.5 0 014.5 4.5v8a4.5 4.5 0 01-4.5 4.5h-9a4.5 4.5 0 01-4.5-4.5v-8a4.5 4.5 0 014.5-4.5h9z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 7.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9z"
          />
        </svg>
      </a>
      <a
        href="https://www.facebook.com/profile.php?id=61572892078822"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition"
        aria-label="Visit Facebook"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M18 2h-3a6 6 0 00-6 6v3H6v4h3v8h4v-8h3l1-4h-4V8a2 2 0 012-2h3z"
          />
        </svg>
      </a>
    </div>
  );
};

export default FloatingButtons;