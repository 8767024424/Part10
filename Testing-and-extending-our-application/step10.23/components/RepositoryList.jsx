import React, { useState, useMemo } from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import useRepositories from '../src/hooks/useRepositories';
import RepositoryItem from './RepositoryItem';
import SortMenu from './SortMenu';


export default function RepositoryList() {
// local UI state to control sorting principle
const [sort, setSort] = useState('LATEST');


// map sort to GraphQL params
const { orderBy, orderDirection } = useMemo(() => {
switch (sort) {
case 'HIGHEST_RATED':
return { orderBy: 'RATING_AVERAGE', orderDirection: 'DESC' };
case 'LOWEST_RATED':
return { orderBy: 'RATING_AVERAGE', orderDirection: 'ASC' };
case 'LATEST':
default:
return { orderBy: 'CREATED_AT', orderDirection: 'DESC' };
}
}, [sort]);


// pass order variables to hook
const { repositories, loading, fetchMore, refetch } = useRepositories({ orderBy, orderDirection, first: 20 });


const renderHeader = () => (
<View>
<SortMenu value={sort} onValueChange={setSort} />
</View>
);


const renderItem = ({ item }) => <RepositoryItem repo={item} />;


if (loading && repositories.length === 0) {
return <ActivityIndicator style={{ marginTop: 40 }} />;
}


return (
<FlatList
data={repositories}
keyExtractor={item => item.id}
renderItem={renderItem}
ListHeaderComponent={renderHeader}
onEndReached={() => fetchMore()}
onEndReachedThreshold={0.5}
refreshing={loading}
onRefresh={() => refetch()}
/>
);
}