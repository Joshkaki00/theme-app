import * as React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const DATA = [
  { name: 'Malamute', rating: 5 },
  { name: 'Shiba', rating: 4 },
  { name: 'Corgi', rating: 5 },
  { name: 'Greyhound', rating: 3 },
  { name: 'Pug', rating: 2 },
  { name: 'Husky', rating: 4 },
];

export default function ListScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Breed Ratings</Text>

      <FlatList
        data={DATA}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.rating}>{'★'.repeat(item.rating)}</Text>
          </View>
        )}
        ItemSeparatorComponent={() => <View style={styles.sep} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#ffffff' },
  h1: { fontSize: 26, fontWeight: '800', color: '#111111', marginBottom: 12 },

  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 12,
    borderRadius: 10,
    backgroundColor: '#f4f4f4',
    borderWidth: 1,
    borderColor: '#dddddd',
  },
  name: { fontSize: 18, fontWeight: '600', color: '#111111' },
  rating: { fontSize: 18, color: '#f4511e' },

  sep: { height: 10 },
});