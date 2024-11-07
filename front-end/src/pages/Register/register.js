import React, { useState } from 'react';
import InputField from '../../components/InputField';
import { signUp } from '../../services/usuario';
import { useHistory } from 'react-router-dom';


const Register = () => {
  const history = useHistory();
  const [formData, setFormData] = useState({
    npme: '',
    email: '',
    senha: '',
  });

  const handleChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const handleRegister = async () => {
    const response = await signUp({...formData});
    
    if (response.status === 201) {
        alert('Usuario cadastrado');
        history.push('/login');
    }
  };

  const changeScreen = () => {
    history.push('/login');
  }

  return (
    <div style={styles.container}>
      <h2>Cadastro</h2>
      <InputField
        label="Nome"
        type="text"
        value={formData.nome}
        onChange={handleChange('nome')}
      />
      <InputField
        label="Email"
        type="email"
        value={formData.email}
        onChange={handleChange('email')}
      />
      <InputField
        label="Senha"
        type="password"
        value={formData.senha}
        onChange={handleChange('senha')}
      />
      <button onClick={handleRegister} style={styles.button}>Cadastrar</button>
      <p style={styles.button} onClick={changeScreen}>Login</p>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
  },
};

export default Register;
