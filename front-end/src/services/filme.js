import api from './api';

const token = JSON.parse(localStorage.getItem('token'));

export async function registerFilm(data) {
  const response = await api.post('/films', data, {
    headers: {
      Authorization: `${token}`
    }
  });

  if (response.status === 201) {
    return response.data;
  }
  return null;
}

export async function getAllFilms() {
  const response = await api.get(`/films`,
    {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  if (response.status === 200) {
    return response.data;
  }

  return null;
}

export async function getFilmsById(id) {
    const response = await api.get(`/films/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
  
    if (response.status === 200) {
      return response.data;
    }
  
    return null;
}

export async function updateFilms(id, data) {
    const response = await api.put(`/films/${id}`, data,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
  
    if (response.status === 200) {
      return response.data;
    }
  
    return null;
}

export async function deleteFilms(id) {
    const response = await api.delete(`/films/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
  
    if (!response) {
        throw new Error('Não há filme para remover.');
      }
  
    return response;
}
