import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';


// orderBy: 'CREATED_AT' | 'RATING_AVERAGE'
// orderDirection: 'ASC' | 'DESC'
export default function useRepositories({ orderBy = 'CREATED_AT', orderDirection = 'DESC', first = 20 } = {}) {
const variables = { orderBy, orderDirection, first };
const { data, loading, error, fetchMore, refetch } = useQuery(GET_REPOSITORIES, { variables, fetchPolicy: 'cache-and-network' });


const repositories = data?.repositories?.edges?.map(e => e.node) ?? [];


const handleFetchMore = () => {
const canFetchMore = !loading && data?.repositories?.edges?.length;
if (!canFetchMore) return;


fetchMore({
variables: { after: data.repositories.pageInfo?.endCursor, first }
});
};


return { repositories, loading, error, fetchMore: handleFetchMore, refetch };
}