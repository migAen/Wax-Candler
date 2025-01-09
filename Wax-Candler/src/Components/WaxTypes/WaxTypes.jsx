import './WaxTypes.css';

function Waxes() {
  return (
    <div className="waxes-container my-5">
      <div className="waxes-card shadow-lg border-0 rounded-4">
        <div className="waxes-card-body p-5">
          <h2 className="waxes-card-title text-center mb-4">Types of Waxes Used in Candle Making</h2>
          <p className="waxes-card-text">
            Candle making waxes come in various types, each with unique properties. Here are the most common types of waxes used:
          </p>
          
          <div className="scrollable-container">
            <div className="waxes-type">
              <h3 className="waxes-type-title">1. Paraffin Wax</h3>
              <img src="https://upload.wikimedia.org/wikipedia/commons/d/d7/Paraffin.jpg" alt="Paraffin Wax" className="waxes-type-img"/>
              <p className="waxes-type-text">
                Paraffin wax is one of the most widely used waxes. It is inexpensive, readily available, and gives a smooth finish.
              </p>
            </div>

            <div className="waxes-type">
              <h3 className="waxes-type-title">2. Soy Wax</h3>
              <img src="https://d2r3z0h7oyiawr.cloudfront.net/2021/05/11/20/13/07/9426b361-fd50-439d-bcf1-f0ebbc914bc1/Soy-wax-flakes-in-bowl.jpg" alt="Soy Wax" className="waxes-type-img"/>
              <p className="waxes-type-text">
                Soy wax is a natural and eco-friendly alternative to paraffin. It burns cleanly and slowly, producing less soot.
              </p>
            </div>

            <div className="waxes-type">
              <h3 className="waxes-type-title">3. Beeswax</h3>
              <img src="https://www.rutadelacera.es/wp-content/uploads/2022/05/Cera-miel_0000_DSC_0220.jpg" alt="Beeswax" className="waxes-type-img"/>
              <p className="waxes-type-text">
                Beeswax is a natural wax made by bees. It burns longer and cleaner, and has a subtle honey scent.
              </p>
            </div>

            <div className="waxes-type">
              <h3 className="waxes-type-title">4. Palm Wax</h3>
              <img src="https://down-id.img.susercontent.com/file/c7c819e0901eaf87b342964694e4c971" alt="Palm Wax" className="waxes-type-img"/>
              <p className="waxes-type-text">
                Palm wax has a unique crystalline texture and burns slowly, but its production has environmental concerns.
              </p>
            </div>

            <div className="waxes-type">
              <h3 className="waxes-type-title">5. Coconut Wax</h3>
              <img src="https://www.candlecreations.co.nz/wp-content/uploads/2024/08/Coconut-Wax-1080x675.png" alt="Coconut Wax" className="waxes-type-img"/>
              <p className="waxes-type-text">
                Coconut wax is a natural and renewable wax. It burns cleanly, holds scent well, and is ideal for luxurious candles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Waxes;
