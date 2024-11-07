import React, { useState } from 'react';
import Header from '../../components/Header';
import { useHistory, useParams } from 'react-router-dom';
import { registerEvaluation } from '../../services/avaliacao';
import { FaStar } from 'react-icons/fa';

const AddRecommendations = () => {
  const history = useHistory();
  const usuarioId = localStorage.getItem('userId');
  const { id } = useParams();
  const [formData, setFormData] = useState({
    usuarioId: usuarioId,
    filmeId: id,
    comentario: '',
  });

  const [rating, setRating] = useState(formData.nota || 0);
  const [hoverRating, setHoverRating] = useState(0); 


  const handleChange = (e) => {
    console.log(formData);
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRatingClick = (newRating) => {
    setFormData({...formData, nota: newRating})
    setRating(newRating);
  };

  const renderStars = () => {
    return Array.from({ length: 5 }, (_, index) => {
      const starIndex = index + 1;
      return (
        <FaStar
          key={index}
          style={starIndex <= (hoverRating || rating) ? styles.filledStar : styles.emptyStar}
          onMouseEnter={() => setHoverRating(starIndex)} 
          onMouseLeave={() => setHoverRating(0)}
          onClick={() => handleRatingClick(starIndex)} 
        />
      );
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await registerEvaluation({...formData });
    alert('Recomendação adicionada');
    history.push('/recommendations');
  };

  return (
    <div style={styles.container}>
      <Header />
      <h1>Adicionar Recomendação</h1>
      <form style={styles.form} onSubmit={handleSubmit}>
        <div style={styles.formGroup}>
          <label style={styles.label}>Comentario:</label>
          <textarea
            style={styles.textarea}
            name="comentario"
            value={formData.comentario}
            onChange={handleChange}
            required
          />
        </div>
        <div style={styles.rating}>
        <strong>Avaliação:</strong> {renderStars(formData.nota)}
      </div>
        <button
          type="submit"
          style={styles.button}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor)}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = styles.button.backgroundColor)}
        >
          Adicionar Recomendação
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    maxWidth: '600px',
    margin: '0 auto',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '15px',
  },
  label: {
    marginBottom: '5px',
    fontWeight: 'bold',
  },
  input: {
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  textarea: {
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  button: {
    padding: '10px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  buttonHover: {
    backgroundColor: '#0056b3',
  },
  rating: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '10px',
  },
  filledStar: {
    color: '#FFD700',
    cursor: 'pointer',
    marginRight: '2px',
  },
  emptyStar: {
    color: '#ccc',
    cursor: 'pointer',
    marginRight: '2px',
  },
  recommendButton: {
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    padding: '8px 12px',
    cursor: 'pointer',
    fontWeight: 'bold',
    marginTop: '15px',
  },
};

export default AddRecommendations;
