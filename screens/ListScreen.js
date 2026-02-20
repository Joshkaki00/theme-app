import * as React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { ThemeContext } from '../ThemeContext';

const DATA = [
  { name: 'Malamute', rating: 5 },
  { name: 'Shiba', rating: 4 },
  { name: 'Corgi', rating: 5 },
  { name: 'Greyhound', rating: 3 },
  { name: 'Pug', rating: 2 },
  { name: 'Husky', rating: 4 },
];

const createStyles = (theme) => StyleSheet.create({
  container: { 
    flex: 1, 
    padding: theme.spacing.xl, 
    backgroundColor: theme.colors.background 
  },
  h1: { 
    fontSize: 26, 
    fontWeight: '800', 
    color: theme.colors.text, 
    marginBottom: theme.spacing.md 
  },

  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: theme.spacing.lg,
    paddingHorizontal: theme.spacing.md,
    borderRadius: theme.radius.sm,
    backgroundColor: theme.colors.card,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  name: { 
    fontSize: 18, 
    fontWeight: '600', 
    color: theme.colors.text 
  },
  rating: { 
    fontSize: 18, 
    color: theme.colors.primary 
  },

  sep: { height: theme.spacing.sm },
});

export default function ListScreen() {
  const theme = React.useContext(ThemeContext);
  const styles = createStyles(theme);

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