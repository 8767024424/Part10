import { useQuery } from '@apollo/client';
import { GET_REPOSITORY } from '../graphql/queries';

const useRepository = (id, first) => {
  const { data, loading, fetchMore } = useQuery(GET_REPOSITORY, {
    variables: { id, first },
    fetchPolicy: 'cache-and-network',
  });

  const handleFetchMore = () => {
    if (!loading && data?.repository.reviews.pageInfo.hasNextPage) {
      fetchMore({
        variables: {
          after: data.repository.reviews.pageInfo.endCursor,
          first,
        },
      });
    }
  };

  return {
    repository: data?.repository,
    loading,
    fetchMore: handleFetchMore,
  };
};

export default useRepository;
