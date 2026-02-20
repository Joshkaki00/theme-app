import * as React from 'react';
import { View, Text, StyleSheet, Pressable, Alert } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Theme Playground</Text>
      <Text style={styles.p}>
        This screen is intentionally hardcoded. Your job is to remove the hardcoded values
        and replace them with theme tokens.
      </Text>

      <View style={styles.card}>
        <Text style={styles.h2}>Card Title</Text>
        <Text style={styles.p}>
          A “card” is a common UI pattern. In a real app you will reuse this style many times.
        </Text>

        <View style={styles.row}>
          <Pressable style={styles.primaryButton} onPress={() => Alert.alert('Primary')}>
            <Text style={styles.primaryButtonText}>Primary</Text>
          </Pressable>

          <Pressable style={styles.secondaryButton} onPress={() => Alert.alert('Secondary')}>
            <Text style={styles.secondaryButtonText}>Secondary</Text>
          </Pressable>
        </View>
      </View>

      <Text style={styles.small}>
        Goal: When your theme toggles, this entire screen should change correctly.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#ffffff',
  },
  h1: { fontSize: 30, fontWeight: '800', color: '#111111', marginBottom: 10 },
  h2: { fontSize: 20, fontWeight: '700', color: '#111111', marginBottom: 6 },
  p: { fontSize: 16, color: '#333333', lineHeight: 22, marginBottom: 10 },
  small: { marginTop: 16, color: '#555555' },

  card: {
    padding: 16,
    borderRadius: 12,
    backgroundColor: '#f4f4f4',
    borderWidth: 1,
    borderColor: '#dddddd',
  },
  row: { flexDirection: 'row', gap: 10 },

  primaryButton: {
    backgroundColor: '#f4511e',
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: 10,
  },
  primaryButtonText: { color: 'white', fontWeight: '700' },

  secondaryButton: {
    backgroundColor: '#222222',
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: 10,
  },
  secondaryButtonText: { color: 'white', fontWeight: '700' },
});