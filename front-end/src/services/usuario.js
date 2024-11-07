import api from './api';

export async function signUp(data) {
    const response = await api.post('/usuarios', {
      nome: data.nome,
      email: data.email,
      senha: data.senha,
      role: 'cliente',
    });
 
    localStorage.setItem('userId', JSON.stringify(response.data.id));

    const loginResponse = await api.post('/login', {
      email: data.email,
      senha: data.senha,
    });

    const { token } = loginResponse.data;

    let message = `Usuário ${data.email} criado com sucesso.`;
  
    if (response.data.code === 409 || response.status === 500) {
      message = `Erro ${response.data.code}: ${response.statusText}`;
    }
  
    return {
      message,
      status: response.status,
      usuarioId: response.data.id,
      token,
    };
}