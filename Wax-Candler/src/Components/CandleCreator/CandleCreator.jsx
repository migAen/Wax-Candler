import './CandleCreator.css';

function Home() {
  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow-lg border-0 rounded-4">
            <div className="card-body p-5">
              <h2 className="card-title text-center mb-4">Here it Goes the creator</h2>
              <p className="card-text">
                
              </p>
              

              
              <p className="text-center mt-4">
                Ready to start creating your own candles?
                <br></br>
                <br></br>
                <a href="/CandleCreator" className="btn btn-secondary">Get Started</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
