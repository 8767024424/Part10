import React from 'react';
import { render, screen } from '@testing-library/react-native';
import RepositoryListContainer from '../../components/RepositoryListContainer';

describe('RepositoryList', () => {
  describe('RepositoryListContainer', () => {
    it('renders repository information correctly', () => {
      const repositories = {
        totalCount: 8,
        pageInfo: {
          hasNextPage: true,
          endCursor:
            'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
        },
        edges: [
          {
            node: {
              id: 'jaredpalmer.formik',
              fullName: 'jaredpalmer/formik',
              description: 'Build forms in React, without the tears',
              language: 'TypeScript',
              forksCount: 1619,
              stargazersCount: 21856,
              ratingAverage: 88,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars2.githubusercontent.com/u/4060187?v=4',
            },
            cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
          },
          {
            node: {
              id: 'async-library.react-async',
              fullName: 'async-library/react-async',
              description: 'Flexible promise-based React data loader',
              language: 'JavaScript',
              forksCount: 69,
              stargazersCount: 1760,
              ratingAverage: 72,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars1.githubusercontent.com/u/54310907?v=4',
            },
            cursor:
              'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          },
        ],
      };

      render(<RepositoryListContainer repositories={repositories} />);

      const repositoryItems = screen.getAllByTestId('repositoryItem');
      expect(repositoryItems).toHaveLength(2);

      const [firstRepo, secondRepo] = repositoryItems;

      expect(firstRepo).toHaveTextContent('jaredpalmer/formik');
      expect(firstRepo).toHaveTextContent('Build forms in React, without the tears');
      expect(firstRepo).toHaveTextContent('TypeScript');
      expect(firstRepo).toHaveTextContent('Forks: 1619');
      expect(firstRepo).toHaveTextContent('Stars: 21856');
      expect(firstRepo).toHaveTextContent('Rating: 88');
      expect(firstRepo).toHaveTextContent('Reviews: 3');

      expect(secondRepo).toHaveTextContent('async-library/react-async');
      expect(secondRepo).toHaveTextContent('Flexible promise-based React data loader');
      expect(secondRepo).toHaveTextContent('JavaScript');
      expect(secondRepo).toHaveTextContent('Forks: 69');
      expect(secondRepo).toHaveTextContent('Stars: 1760');
      expect(secondRepo).toHaveTextContent('Rating: 72');
      expect(secondRepo).toHaveTextContent('Reviews: 3');
    });
  });
});
