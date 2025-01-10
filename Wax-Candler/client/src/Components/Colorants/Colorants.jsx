import './Colorants.css';

function Colorants() {
  return (
    <div className="colorants-container my-5">
      <div className="colorants-card shadow-lg border-0 rounded-4">
        <div className="colorants-card-body">
          <h2 className="colorants-card-title text-center mb-4">Types of Colorants for Candle Making</h2>
          <p className="colorants-card-text">
            Colorants add beauty and character to your candles. Here are the most commonly used colorants:
          </p>
          
          <div className="colorants-scrollable-container">
            <div className="colorants-type">
              <h3 className="colorants-type-title">1. Dye Chips (Wax Dyes)</h3>
              <img src="https://candle-shack.co.uk/cdn/shop/files/DYE00076-lightblue-Macro.jpg?v=1716896759&width=1500" alt="Dye Chips" className="colorants-type-img"/>
              <p className="colorants-type-text">
                Dye chips are easy to use and come in various colors. They provide vibrant hues but should be used in moderation.
              </p>
            </div>

            <div className="colorants-type">
              <h3 className="colorants-type-title">2. Liquid Dyes</h3>
              <img src="https://s.alicdn.com/@sc04/kf/H1b55b6810c4842cf88e1e402bdd8a0d0R.jpg_720x720q50.jpg" alt="Liquid Dyes" className="colorants-type-img"/>
              <p className="colorants-type-text">
                Liquid dyes are easy to mix into melted wax and provide a consistent, even color throughout the candle.
              </p>
            </div>

            <div className="colorants-type">
              <h3 className="colorants-type-title">3. Pigment Powders</h3>
              <img src="https://www.daviscolors.com/wp-content/uploads/2016/05/concrete-powder-pigments-davis-colors.jpg" alt="Pigment Powders" className="colorants-type-img"/>
              <p className="colorants-type-text">
                Pigment powders offer strong, rich colors and can be used to create unique effects like glitter or metallic finishes.
              </p>
            </div>

            <div className="colorants-type">
              <h3 className="colorants-type-title">4. Color Blocks</h3>
              <img src="https://d2r3z0h7oyiawr.cloudfront.net/2021/12/13/21/02/26/669b6023-2fbf-40fb-9153-6c93c95b19b1/dye-block-header-s.jpg" alt="Color Blocks" className="colorants-type-img"/>
              <p className="colorants-type-text">
                Color blocks are easy to use and provide vibrant colors, but they may not work well for subtle hues.
              </p>
            </div>

            <div className="colorants-type">
              <h3 className="colorants-type-title">5. Natural Colorants</h3>
              <img src="https://cdn11.bigcommerce.com/s-74757430ww/images/stencil/320w/products/1734/6305/Golden-Honey-Nature-Friendly-Liquid-Dye__99382.1.jpg" alt="Natural Colorants" className="colorants-type-img"/>
              <p className="colorants-type-text">
                Natural colorants, derived from herbs, spices, and clays, are eco-friendly but may not provide as vibrant colors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Colorants;
