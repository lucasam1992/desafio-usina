import React, { useState } from 'react';
import { FaEdit, FaTrashAlt, FaStar } from 'react-icons/fa';
import { deleteFilms, updateFilms } from '../../services/filme';
import { useHistory } from 'react-router-dom';

const CardFilms = ({ filme }) => {
  const history = useHistory();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    titulo: filme.titulo,
    descricao: filme.descricao,
    genero: filme.genero,
    ano_lancamento: filme.ano_lancamento,
    duracao: filme.duracao
  });

  const toggleEdit = () => setIsEditing(!isEditing);

  const handleSave = async () => {
    await updateFilms(filme.id, formData);
    setIsEditing(false);
    alert('Filme Editado');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onDelete = async (id) => {    
    await deleteFilms(id);
    alert('Filme removido');
  }

  const onRecommend = async (id) => {
    history.push(`/recommendations/${id}`);
  }

  return (
    <div style={{ ...styles.card, height: isEditing ? 'auto' : '300px' }}>
      <div style={styles.header}>
        <h3>{filme.titulo}</h3>
        <div style={styles.icons}>
          <FaEdit style={styles.icon} onClick={toggleEdit} title="Editar Filme" />
          <FaTrashAlt style={styles.icon} onClick={() => onDelete(filme.id)} title="Remover Filme" />
        </div>
      </div>

      {isEditing ? (
        <div style={styles.editForm}>
          <input
            type="text"
            name="titulo"
            value={formData.titulo}
            onChange={handleChange}
            placeholder="Título do Filme"
            style={styles.input}
          />
          <input
            type="text"
            name="genero"
            value={formData.genero}
            onChange={handleChange}
            placeholder="Gênero"
            style={styles.input}
          />
          <input
            type="number"
            name="ano_lancamento"
            value={formData.ano_lancamento}
            onChange={handleChange}
            placeholder="Ano de Lançamento"
            style={styles.input}
          />
          <input
            type="number"
            name="duracao"
            value={formData.duracao}
            onChange={handleChange}
            placeholder="Duração (min)"
            style={styles.input}
          />
          <textarea
            name="descricao"
            value={formData.descricao}
            onChange={handleChange}
            placeholder="Descrição"
            style={styles.textarea}
          />
          <button onClick={handleSave} style={styles.saveButton}>Salvar</button>
        </div>
      ) : (
        <>
          <p>{filme.descricao}</p>
          <p><strong>Gênero:</strong> {filme.genero}</p>
          <p><strong>Ano:</strong> {filme.ano_lancamento}</p>
          <p><strong>Duração:</strong> {filme.duracao} min</p>
          <button style={styles.recommendButton} onClick={() => onRecommend(filme.id)}>
            <FaStar style={{ marginRight: '5px' }} />
            Criar Recomendações
          </button>
        </>
      )}
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
    marginTop: '30px',
    position: 'relative',
    transition: 'height 0.3s ease',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icons: {
    display: 'flex',
    gap: '10px',
  },
  icon: {
    cursor: 'pointer',
    fontSize: '18px',
  },
  editForm: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '10px',
  },
  input: {
    width: '100%',
    padding: '8px',
    marginBottom: '10px',
    borderRadius: '4px',
    border: '1px solid #ddd',
  },
  textarea: {
    width: '100%',
    padding: '8px',
    marginBottom: '10px',
    borderRadius: '4px',
    border: '1px solid #ddd',
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
  saveButton: {
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

export default CardFilms;
