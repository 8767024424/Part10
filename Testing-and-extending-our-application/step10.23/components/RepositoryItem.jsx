import React from 'react';
import { View, Text, Image } from 'react-native';


export default function RepositoryItem({ repo }) {
return (
<View style={{ padding: 12, borderBottomWidth: 1, borderColor: '#eee', backgroundColor: '#fff' }}>
<View style={{ flexDirection: 'row', alignItems: 'center' }}>
{repo.ownerAvatarUrl ? (
<Image source={{ uri: repo.ownerAvatarUrl }} style={{ width: 48, height: 48, borderRadius: 4, marginRight: 12 }} />
) : null}
<View style={{ flex: 1 }}>
<Text style={{ fontWeight: '700' }}>{repo.fullName}</Text>
{repo.description ? <Text>{repo.description}</Text> : null}
{repo.language ? <Text style={{ marginTop: 6 }}>{repo.language}</Text> : null}
</View>
</View>


<View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 8 }}>
<View style={{ alignItems: 'center' }}>
<Text>{repo.stargazersCount}</Text>
<Text>Stars</Text>
</View>
<View style={{ alignItems: 'center' }}>
<Text>{repo.forksCount}</Text>
<Text>Forks</Text>
</View>
<View style={{ alignItems: 'center' }}>
<Text>{repo.reviewCount}</Text>
<Text>Reviews</Text>
</View>
<View style={{ alignItems: 'center' }}>
<Text>{repo.ratingAverage}</Text>
<Text>Rating</Text>
</View>
</View>
</View>
);
}