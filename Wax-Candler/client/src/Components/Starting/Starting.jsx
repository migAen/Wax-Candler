import { Link } from "react-router-dom";

const Start = () => {
  return (
    <div 
      className="d-flex justify-content-center align-items-center" 
      style={{ minHeight: '100vh', flexDirection: 'column' }}
    >
      <div className="card" style={{ width: '50rem', height: '30rem', padding: '0' }}>
        <img 
          src="../../cardlogo.png" 
          alt="Logo" 
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover', 
            objectPosition: 'center' 
          }} 
        />
      </div>

      <Link 
        to="/" 
        className="btn" 
        style={{
          marginTop: '20px', 
          padding: '10px 20px', 
          fontSize: '16px',
          textAlign: 'center',
          textDecoration: 'none',
          borderRadius: '5px',
          backgroundColor: 'transparent',  
          border: '2px solid #fff',        
          color: '#fff',                   
          fontWeight: 'bold',              
        }}
      >
        Go to Home
      </Link>
    </div>
  );
}

export default Start;