import React from "react";
import { Link, useNavigate } from "react-router-dom";

export interface IHomePageProps {}

const HomePage: React.FunctionComponent<IHomePageProps> = (props) => {
  const navigate = useNavigate();

  return (
    <div>
      <p>This is the home page.</p>
      <p>
        <Link to="/about">Go to the About Page!</Link>
      </p>
      <p>
        <Link to="/test">Go to the Test Page!</Link>
      </p>
      <button onClick={() => navigate("/layout/55")}>
        Go to layout, with a number
      </button>
    </div>
  );
};

export default HomePage;
