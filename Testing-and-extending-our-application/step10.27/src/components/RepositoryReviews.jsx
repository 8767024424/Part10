import { FlatList } from 'react-native';
import ReviewItem from './ReviewItem';
import useRepository from '../hooks/useRepository';

const RepositoryReviews = ({ id }) => {
  const { repository, fetchMore } = useRepository(id, 4);

  const reviews = repository
    ? repository.reviews.edges.map(edge => edge.node)
    : [];

  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      onEndReached={fetchMore}
      onEndReachedThreshold={0.5}
    />
  );
};

export default RepositoryReviews;
