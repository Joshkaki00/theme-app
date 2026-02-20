import * as React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { ThemeContext } from '../ThemeContext';

const createStyles = (theme) => StyleSheet.create({
  container: {
    flex: 1,
    padding: theme.spacing.xl,
    backgroundColor: theme.colors.background,
  },
  h1: { 
    fontSize: 30, 
    fontWeight: '800', 
    color: theme.colors.text, 
    marginBottom: theme.spacing.sm 
  },
  h2: { 
    fontSize: 20, 
    fontWeight: '700', 
    color: theme.colors.text, 
    marginBottom: theme.spacing.xs 
  },
  p: { 
    fontSize: 16, 
    color: theme.colors.textMedium, 
    lineHeight: 22, 
    marginBottom: theme.spacing.sm 
  },
  small: { 
    marginTop: theme.spacing.xl, 
    color: theme.colors.textLight 
  },

  card: {
    padding: theme.spacing.xl,
    borderRadius: theme.radius.md,
    backgroundColor: theme.colors.card,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  row: { 
    flexDirection: 'row', 
    gap: theme.spacing.sm 
  },

  primaryButton: {
    backgroundColor: theme.colors.primary,
    paddingVertical: theme.spacing.md,
    paddingHorizontal: theme.spacing.lg,
    borderRadius: theme.radius.sm,
  },
  primaryButtonText: { 
    color: theme.colors.buttonText, 
    fontWeight: '700' 
  },

  secondaryButton: {
    backgroundColor: theme.colors.secondary,
    paddingVertical: theme.spacing.md,
    paddingHorizontal: theme.spacing.lg,
    borderRadius: theme.radius.sm,
  },
  secondaryButtonText: { 
    color: theme.colors.buttonText, 
    fontWeight: '700' 
  },
});

export default function HomeScreen() {
  const { theme, toggleTheme } = React.useContext(ThemeContext);
  const styles = createStyles(theme);

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
          <Pressable 
            style={({ pressed }) => [
              styles.primaryButton,
              pressed && { opacity: 0.7 }
            ]}
            onPress={toggleTheme}
          >
            <Text style={styles.primaryButtonText}>Toggle Theme</Text>
          </Pressable>

          <Pressable 
            style={({ pressed }) => [
              styles.secondaryButton,
              pressed && { opacity: 0.7 }
            ]}
            onPress={toggleTheme}
          >
            <Text style={styles.secondaryButtonText}>Switch Mode</Text>
          </Pressable>
        </View>
      </View>

      <Text style={styles.small}>
        Goal: When your theme toggles, this entire screen should change correctly.
      </Text>
    </View>
  );
}