import React, { useEffect, useState } from 'react';
import RecommendationCard from '../RecommendationCard';
import { getAllEvaluation } from '../../services/avaliacao';

const RecommendationList = () => {
  const [recommend, setRecommend] = useState([]);

  useEffect(() => {
    const fetchRecomendacoes = async () => {
        try {
          const data = await getAllEvaluation();
          if (data) setRecommend(data);
        } catch (error) {
          console.error('Erro ao buscar recomendações:', error);
        }
    };
    fetchRecomendacoes();
  }, []);
  
  return (
    <div style={styles.container}>
      <h2>Lista de Recomendações</h2>
      <div style={styles.list}>
        {recommend.map((recommendation) => (
          <RecommendationCard key={recommendation.id} recommendation={recommendation} />
        ))}
      </div>
    </div>
  );
};

const styles = {
    container: {
      padding: '20px',
      maxWidth: '800px',
      margin: 'auto',
    },
    list: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '20px',
      justifyContent: 'center',
    }
};



export default RecommendationList;
