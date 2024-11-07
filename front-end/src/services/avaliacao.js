import api from './api';

const token = JSON.parse(localStorage.getItem('token'));

export async function registerEvaluation(data) {
  const response = await api.post('/avaliacoes', data,
    {
     headers: {
      Authorization: `${token}`
    }
  });

  if (response.status === 201) {
    return response.data;
  }
  return null;
}

export async function getAllEvaluation() {
  const response = await api.get(`/avaliacoes`,
    {
      headers: {
       Authorization: `${token}`
      }
    }
  );

  if (response.status === 200) {
    return response.data;
  }

  return null;
}

export async function getEvaluationById(id) {
    const response = await api.get(`/avaliacoes/${id}`);
  
    if (response.status === 200) {
      return response.data;
    }
  
    return null;
}

export async function updateEvaluation(id, data) {
    const response = await api.put(`/avaliacoes/${id}`, data);
  
    if (response.status === 200) {
      return response.data;
    }
  
    return null;
}

export async function deleteEvaluation(id) {
    const response = await api.delete(`/avaliacoes/${id}`);
  
    if (!response) {
        throw new Error('Não há avaliação para remover.');
      }
  
    return response;
}
