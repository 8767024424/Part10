import React from 'react';
import { View, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';


// options: 'LATEST', 'HIGHEST_RATED', 'LOWEST_RATED'
export default function SortMenu({ value, onValueChange }) {
return (
<View style={{ padding: 8, backgroundColor: '#fff' }}>
<Text style={{ marginBottom: 6 }}>Select an item...</Text>
<Picker selectedValue={value} onValueChange={val => onValueChange(val)}>
<Picker.Item label="Latest repositories" value="LATEST" />
<Picker.Item label="Highest rated repositories" value="HIGHEST_RATED" />
<Picker.Item label="Lowest rated repositories" value="LOWEST_RATED" />
</Picker>
</View>
);
}