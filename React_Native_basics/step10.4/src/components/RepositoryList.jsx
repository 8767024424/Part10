import React from 'react';
import { FlatList } from 'react-native';
import RepositoryItem from './RepositoryItem';

const repositories = [
  {
    id: '1',
    fullName: 'jaredpalmer/formik',
    description: 'Build forms in React, without the tears',
    language: 'TypeScript',
    forksCount: 1589,
    stargazersCount: 21553,
    ratingAverage: 88,
    reviewCount: 4,
  },
  {
    id: '2',
    fullName: 'rails/rails',
    description: 'Ruby on Rails',
    language: 'Ruby',
    forksCount: 42377,
    stargazersCount: 54210,
    ratingAverage: 92,
    reviewCount: 5,
  },
];

const RepositoryList = () => {
  return (
    <FlatList
      data={repositories}
      ItemSeparatorComponent={() => <></>}
      renderItem={({ item }) => <RepositoryItem {...item} />}
      keyExtractor={(item) => item.id}
    />
  );
};

export default RepositoryList;
