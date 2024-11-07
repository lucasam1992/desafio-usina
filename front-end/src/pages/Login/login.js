import React, { useState } from 'react';
import InputField from '../../components/InputField';
import { signIn } from '../../services/auth';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    senha: '',
  });

  const history = useHistory();

  const handleChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const handleLogin = async () => {
    await signIn({...formData});
    history.push('/films');
  };

  const changeScreen = () => {
    history.push('/register');
  }

  return (
    <div style={styles.container}>
      <h2>Login</h2>
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
      <button onClick={handleLogin} style={styles.button}>Entrar</button>
      <p style={styles.button} onClick={changeScreen}>Register</p>
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

export default Login;
