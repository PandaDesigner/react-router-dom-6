import { useRouteError, Link } from 'react-router-dom';

export const NotFound = () => {
  const error = useRouteError();
  //console.log(error);

  return (
    <div className="w-100 vh-100 d-flex justify-content-center flex-column gap-0  align-items-center bg-body-tertiary ">
      <h1 className="text-primary fs-1 fw-bold lh-0">404</h1>
      <p className="fs-3 fw-light lh-1">Page not found</p>
      <p className="fw-lighter fs-4 lh-1">
        {error.statusText || error.message}
      </p>
      <Link to="/" className="btn btn-primary">
        Volver
      </Link>
    </div>
  );
};
