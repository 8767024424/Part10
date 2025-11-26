import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { useParams } from 'react-router-native';
import { gql, useQuery } from '@apollo/client';
import RepositoryItem from './RepositoryItem';

const GET_REPOSITORY = gql`
  query Repository($id: ID!) {
    repository(id: $id) {
      id
      fullName
      url
    }
  }
`;

const SingleRepositoryView = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_REPOSITORY, { variables: { id } });

  if (loading) return <ActivityIndicator />;
  if (error) return <View><Text>Error loading repository</Text></View>;

  return <RepositoryItem repository={data.repository} showGitHubButton={true} />;
};

export default SingleRepositoryView;
