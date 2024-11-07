import React, { useState } from 'react';
import { registerFilm } from '../../services/filme';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header/index';

const AddMoviePage = () => {
  const history = useHistory();
  const [formData, setFormData] = useState({
    titulo: '',
    descricao: '',
    genero: '',
    ano_lancamento: '',
    duracao: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await registerFilm({...formData });
    alert('Filme adicionado');
    history.push('/films');
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
  };

  return (
    <div style={styles.container}>
      <Header />
      <h1>Adicionar Filme</h1>
      <form style={styles.form} onSubmit={handleSubmit}>
        <div style={styles.formGroup}>
          <label style={styles.label}>Título:</label>
          <input
            style={styles.input}
            type="text"
            name="titulo"
            value={formData.titulo}
            onChange={handleChange}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Descrição:</label>
          <textarea
            style={styles.textarea}
            name="descricao"
            value={formData.descricao}
            onChange={handleChange}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Gênero:</label>
          <input
            style={styles.input}
            type="text"
            name="genero"
            value={formData.genero}
            onChange={handleChange}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Ano de Lançamento:</label>
          <input
            style={styles.input}
            type="number"
            name="ano_lancamento"
            value={formData.ano_lancamento}
            onChange={handleChange}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Duração (min):</label>
          <input
            style={styles.input}
            type="number"
            name="duracao"
            value={formData.duracao}
            onChange={handleChange}
            required
          />
        </div>
        <button
          type="submit"
          style={styles.button}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor)}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = styles.button.backgroundColor)}
        >
          Adicionar Filme
        </button>
      </form>
    </div>
  );
};

export default AddMoviePage;
