interface WelcomeProps {
  onEnter: () => void;
}

export default function Welcome({ onEnter }: WelcomeProps) {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#e0ccaa',
      color: '#2d3748',
      padding: '20px',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <h1 style={{
        fontSize: '3rem',
        fontWeight: 'bold',
        marginBottom: '1rem'
      }}>HIMALAYAN</h1>
      
      <h2 style={{
        fontSize: '2rem',
        marginBottom: '2rem'
      }}>Curry & Tandoor House</h2>
      
      <div style={{
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        padding: '2rem',
        borderRadius: '8px',
        maxWidth: '800px',
        margin: '0 auto 2rem',
        textAlign: 'left',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
      }}>
        <h3 style={{
          fontSize: '1.5rem',
          fontWeight: 'bold',
          marginBottom: '1.5rem',
          textAlign: 'center'
        }}>
          Namaste and welcome to Himalayan Curry & Tandoor House!
        </h3>
        
        <p style={{
          fontSize: '1.125rem',
          marginBottom: '1rem',
          lineHeight: '1.6'
        }}>
          We're so glad you're here! Our kitchen is filled with the rich, comforting flavors of Nepal—just like home—along with some of our favorite Indian dishes.
        </p>
        
        <p style={{
          fontSize: '1.125rem',
          marginBottom: '1.5rem',
          lineHeight: '1.6'
        }}>
          Every bite is made with love, tradition, and a little extra spice. Come in, relax, and enjoy!
        </p>
        
        <p style={{
          color: '#9f1d21',
          fontStyle: 'italic',
          fontSize: '1.125rem',
          lineHeight: '1.6',
          fontWeight: '500'
        }}>
          Discover the bold, fresh flavors of Nepal—a hidden gem of the Himalayas—making its debut here, paired with the familiar comfort of Indian cuisine.
        </p>
      </div>
      
      <button 
        onClick={onEnter}
        style={{
          backgroundColor: '#9f1d21',
          color: 'white',
          fontWeight: 'bold',
          padding: '1rem 2rem',
          borderRadius: '9999px',
          fontSize: '1.125rem',
          border: 'none',
          cursor: 'pointer',
          transition: 'all 0.3s',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.backgroundColor = '#7e171a';
          e.currentTarget.style.transform = 'translateY(-2px)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.backgroundColor = '#9f1d21';
          e.currentTarget.style.transform = 'translateY(0)';
        }}
      >
        Enter Site
      </button>
    </div>
  );
}