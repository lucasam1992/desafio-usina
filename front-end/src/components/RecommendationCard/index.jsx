import React, { useEffect } from 'react';

const RecommendationCard = ({ recommendation }) => {
    const { comentario, nota } = recommendation;

    return (
      <div style={styles.card}>
        <p>{comentario}</p>
        <div style={styles.rating}>
          {Array.from({ length: 5 }).map((_, index) => (
            <span key={index} style={{ color: index < nota ? '#ffc107' : '#e4e5e9' }}>★</span>
          ))}
        </div>
      </div>
    );
  };
  
  const styles = {
    card: {
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '20px',
      width: '200px',
      textAlign: 'center',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    },
    rating: {
      fontSize: '1.5em',
      marginTop: '10px',
    },
};

export default RecommendationCard;
