import React from 'react';

const Header = () => {
  return (
    <header style={headerStyle}>
      <h1 style={titleStyle}>Biblioteca de Filmes</h1>
      {<p style={welcomeStyle}>Bem-vindo!</p>}
    </header>
    );    
};

const headerStyle = {
    backgroundColor: '#282c34',
    color: 'white',
    padding: '5px',
    textAlign: 'center',
    position: 'fixed',
    top: '0',
    width: '100%',
    zIndex: 1,
  };

  const titleStyle = {
    margin: '0',
  };

  const welcomeStyle = {
    margin: '5px 0 0',
  };

export default Header;
