import React from 'react';
import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div className="h-screen flex items-center justify-center flex-col gap-3 px-3">
      <img
        src="https://www.redditstatic.com/reddit404b.png"
        alt="Page Not Found"
        className=""
      />
      <p className="font-bold text-lg dark:text-neutral-300">Page Not Found!</p>
      <p className="dark:text-neutral-300">
        The page you requested was not found
      </p>
      <Link to="/" replace className="btn-primary">
        Go To Homepage
      </Link>
    </div>
  );
}

export default NotFoundPage;
