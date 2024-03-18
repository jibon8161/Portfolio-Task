import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="text-center">
        <h1 className="display-1 text-danger">404</h1>
        <p className="lead">Oops! Page not found.</p>
        <Link to="/" className="btn btn-primary">
          Go back to home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
