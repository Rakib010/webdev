import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <div>
      <h2>Oops !!!!</h2>
      <p>{error.statusText || error.message}</p>
      {error.status === 404 && (
        <div>
          <h2>Page Not Found</h2>
          <h2>Go Back where you from</h2>
          <Link to="/">
            <button className="btn">Go Home</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ErrorPage;
