import React from 'react';
import { useHistory } from 'react-router-dom';

const AddMovieButton = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push('/add-movie');
  };

  const handleClickRecommend = () => {
    history.push('/recommendations');
  }

  return (
    <>
    <button 
      style={buttonStyle} 
      onClick={handleClick} 
      onMouseOver={(e) => e.currentTarget.style.backgroundColor = hoverStyle.backgroundColor}
      onMouseOut={(e) => e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor}
    >
      Adicionar Filme
    </button>
    <button 
      style={buttonStyle} 
      onClick={handleClickRecommend} 
      onMouseOver={(e) => e.currentTarget.style.backgroundColor = hoverStyle.backgroundColor}
      onMouseOut={(e) => e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor}
    >
      Ver Avaliações
    </button>
    </>
  );
};

const buttonStyle = {
  backgroundColor: '#007BFF',
  color: 'white',
  border: 'none',
  padding: '10px 20px',
  borderRadius: '5px',
  cursor: 'pointer',
  fontSize: '16px',
  transition: 'background-color 0.3s',
  width: '100%',
  margin: '10px 10px 10px 10px'
};

const hoverStyle = {
  backgroundColor: '#0056b3',
};

export default AddMovieButton;
