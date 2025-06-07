import React from 'react';

interface TestProps {
  onEnter: () => void;
}

export default function Test({ onEnter }: TestProps) {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#e0ccaa',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px'
    }}>
      <h1 style={{ color: '#2d3748', fontSize: '3rem', marginBottom: '2rem' }}>Can you see this?</h1>
      <button 
        onClick={onEnter}
        style={{
          backgroundColor: '#9f1d21',
          color: 'white',
          padding: '1rem 2rem',
          border: 'none',
          borderRadius: '9999px',
          fontSize: '1.125rem',
          cursor: 'pointer'
        }}
      >
        Enter Site
      </button>
    </div>
  );
}
