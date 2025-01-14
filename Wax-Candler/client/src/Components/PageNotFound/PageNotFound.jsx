const PageNotFound = () => {
  return (
    <div className="d-flex justify-content-center min-vh-60">
      <div className="card mt-5" style={{ width: "28rem" }}>
        <div className="card-body text-center">
          <h5 className="card-title fs-1">Page Not Found</h5>
          <p className="card-text fs-4">
            The page you&apos;re looking for doesn&apos;t exist.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
