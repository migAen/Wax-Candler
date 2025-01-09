import './Equipment.css';

function Equipment() {
  return (
    <div className="equipment-container my-5">
      <div className="equipment-card shadow-lg border-0 rounded-4">
        <div className="equipment-card-body">
          <h2 className="equipment-card-title text-center mb-4">Essential Equipment for Candle Making</h2>
          <p className="equipment-card-text">
            To make candles, you’ll need a few key pieces of equipment to ensure the process is smooth and safe. Here are the most essential tools:
          </p>
          
          <div className="equipment-scrollable-container">
            <div className="equipment-type">
              <h3 className="equipment-type-title">1. Melting Pot (Double Boiler or Wax Melter)</h3>
              <img src="https://generalwaxcandlemaking.com/cdn/shop/files/small-melting-pot.jpg?v=1719475639" alt="Melting Pot" className="equipment-type-img"/>
              <p className="equipment-type-text">
                A melting pot or double boiler is essential for melting wax evenly. It prevents direct heat contact with the wax, which can cause burning.
              </p>
            </div>

            <div className="equipment-type">
              <h3 className="equipment-type-title">2. Candle Molds or Containers</h3>
              <img src="https://www.randallscandles.co.uk/cdn/shop/products/Clear_3_1@2x.jpg?v=1602241706" alt="Candle Molds" className="equipment-type-img"/>
              <p className="equipment-type-text">
                Molds or containers are required to shape your candles. Popular options include glass jars, metal tins, and ceramic containers.
              </p>
            </div>

            <div className="equipment-type">
              <h3 className="equipment-type-title">3. Candle Wicks</h3>
              <img src="https://candlemaking.com.au/cdn/shop/articles/Wicks_Styles_sq_7918631a-8ba6-431d-a70e-347f1415c5e8_1400x.progressive.jpg?v=1523806036" alt="Candle Wicks" className="equipment-type-img"/>
              <p className="equipment-type-text">
                Wicks are the burning element of the candle. Choose the right size and material for your container and wax type to ensure a good burn.
              </p>
            </div>

            <div className="equipment-type">
              <h3 className="equipment-type-title">4. Wick Holders</h3>
              <img src="https://m.media-amazon.com/images/I/413N0hl1dIL._AC_UF350,350_QL80_.jpg" alt="Wick Holders" className="equipment-type-img"/>
              <p className="equipment-type-text">
                Wick holders ensure that the wick stays centered in the container while the wax hardens, ensuring even burning.
              </p>
            </div>

            <div className="equipment-type">
              <h3 className="equipment-type-title">5. Thermometer</h3>
              <img src="https://www.healthklin.com/image/cache/catalog/PRODUCTIMAGES/digital-food-thermometer1-550x550.jpg" alt="Thermometer" className="equipment-type-img"/>
              <p className="equipment-type-text">
                A thermometer is crucial for monitoring the wax temperature. Different waxes have different ideal melting and pouring temperatures.
              </p>
            </div>           

            <div className="equipment-type">
              <h3 className="equipment-type-title">6. Stirring Utensils</h3>
              <img src="https://5.imimg.com/data5/ECOM/Default/2023/12/370118709/MR/BI/QB/40788096/59018993-1-image-c698dcfb-e1ae-42af-841a-f43009916351-500x500.jpg" alt="Stirring Utensils" className="equipment-type-img"/>
              <p className="equipment-type-text">
                Stirring utensils are needed to mix the melted wax with fragrance oils and dyes. Ensure to stir gently to avoid air bubbles.
              </p>
            </div>

            <div className="equipment-type">
              <h3 className="equipment-type-title">7. Heat Source (Stove or Electric Wax Melter)</h3>
              <img src="https://na.rdcpix.com/1331956131/6624d03cd1b28ffd1257c50e49f78275w-c0rd-w832_h468_r4_q80.jpg" alt="Heat Source" className="equipment-type-img"/>
              <p className="equipment-type-text">
                A heat source is required to melt the wax. You can use a stovetop with a double boiler setup or an electric wax melter for more control.
              </p>
            </div>

            <div className="equipment-type">
              <h3 className="equipment-type-title">8. Candle Wick Stickers or Glue Dots</h3>
              <img src="https://s.alicdn.com/@sc04/kf/H1d02e3dfce564554915b20733778250fD.jpg_720x720q50.jpg" alt="Candle Wick Stickers" className="equipment-type-img"/>
              <p className="equipment-type-text">
                Wick stickers or glue dots are used to secure the wick to the bottom of the container, ensuring it stays in place as the wax hardens.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Equipment;
