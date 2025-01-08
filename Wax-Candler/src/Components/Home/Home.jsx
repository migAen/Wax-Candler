import './Home.css';

function Home() {
  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow-lg border-0 rounded-4">
            <div className="card-body p-5">
              <h2 className="card-title text-center mb-4">Why Create Your Own Candle?</h2>
              <p className="card-text">
                Candle making is a creative and relaxing process that allows you to create unique candles
                tailored to your personal style. Whether you are looking for a specific scent, color, or shape,
                candle creation provides endless possibilities to personalize your home decor or create meaningful
                gifts for loved ones. By making your own candles, you gain control over the quality of ingredients,
                ensuring a clean and natural burn every time.
              </p>
              <ul>
                <li><strong>Customization:</strong> Choose your preferred scent, color, and shape.</li>
                <li><strong>Personalization:</strong> Make candles that reflect your personality or make the perfect gift.</li>
                <li><strong>Relaxation:</strong> Candle making is a calming and meditative activity.</li>
                <li><strong>Eco-friendly:</strong> Create sustainable, non-toxic candles with natural ingredients.</li>
              </ul>

              <h3 className="card-title mt-4">Why Choose Natural Waxes?</h3>
              <p className="card-text">
                Natural waxes like soy, beeswax, and palm are better for both your health and the environment compared to paraffin wax. They burn cleaner, are biodegradable, and have a longer burn time. Paraffin, on the other hand, is a byproduct of petroleum refining and may release harmful chemicals when burned.
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
