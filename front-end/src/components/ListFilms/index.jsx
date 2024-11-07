import React, { useEffect, useState } from 'react';
import CardFilme from '../CardFilms/index';
import { getAllFilms } from '../../services/filme';

const ListFilms = () => {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    const fetchFilmes = async () => {
        try {
          const data = await getAllFilms();
          if (data) setFilmes(data);
        } catch (error) {
          console.error('Erro ao buscar filmes:', error);
        }
    };
    fetchFilmes();
  }, []);

  return (
    <div style={styles.container}>
      {filmes.map((filme) => (
        <CardFilme key={filme.id} filme={filme} />
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: '20px',
    gap: '20px',
    marginTop: '160px'
  }
};

export default ListFilms;
