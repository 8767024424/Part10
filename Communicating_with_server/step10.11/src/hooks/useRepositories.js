// src/hooks/useRepositories.js
import { useQuery } from '@apollo/client'; // ✅ make sure this line exists
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = () => {
  const { data, loading, error } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
  });

  return {
    repositories: data?.repositories.edges.map(edge => edge.node) || [],
    loading,
    error,
  };
};

export default useRepositories;
