// eslint-disable-next-line camelcase
import api from './api';
const { default: jwt_decode } = require('jwt-decode');

export async function signIn(data) {
  const response = await api.post('/login', {
    email: data.email,
    senha: data.senha,
  });

  localStorage.setItem('token', JSON.stringify(response.data.token));

  if (response.data.status !== 404) {
    const { token } = response.data;

    const { role } = jwt_decode(token).data.userEmailSenha;

    return { email: data.email, role, token };
  }

  return new Error(response.data.message);
}
