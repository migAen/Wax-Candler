const TechCard = () => {
  return (
    <div 
      className="d-flex justify-content-center align-items-center" 
      style={{ minHeight: '100vh' }}
    >
      <div className="card" style={{ width: '30rem', padding: '20px' }}>
        <div className="card-body">
          <h5 className="card-title">Technologies Used</h5>
          <p className="card-text">This app is built using the following technologies:</p>
          <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
            <li className="d-flex align-items-center mb-3">
              <img 
                src="../../pngegg (1).png" 
                alt="React" 
                style={{ width: '40px', marginRight: '15px' }} 
              />
              React
            </li>
            <li className="d-flex align-items-center mb-3">
              <img 
                src="../../pngaaa.com-4915800.png" 
                alt="Vite" 
                style={{ width: '40px', marginRight: '15px' }} 
              />
              Vite
            </li>
            <li className="d-flex align-items-center mb-3">
              <img 
                src="../../pngegg (2).png" 
                alt="Bootstrap" 
                style={{ width: '40px', marginRight: '15px' }} 
              />
              Bootstrap
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TechCard;