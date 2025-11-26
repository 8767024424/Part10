import React from 'react';
import { FlatList, Pressable } from 'react-native';
import RepositoryItem from './RepositoryItem';
import { useNavigate } from 'react-router-native';

// TODO: Replace with GraphQL query later
const repositories = [
  { id: 'jaredpalmer.formik', fullName: 'jaredpalmer/formik', url: 'https://github.com/jaredpalmer/formik' },
  { id: 'facebook/react', fullName: 'facebook/react', url: 'https://github.com/facebook/react' },
];

const RepositoryList = () => {
  const navigate = useNavigate();

  return (
    <FlatList
      data={repositories}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Pressable onPress={() => navigate(`/repository/${item.id}`)}>
          <RepositoryItem repository={item} showGitHubButton={false} />
        </Pressable>
      )}
    />
  );
};

export default RepositoryList;
