import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { useColorScheme } from 'react-native';

import HomeScreen from './screens/HomeScreen';
import ListScreen from './screens/ListScreen';
import { ThemeContext } from './ThemeContext';
import { lightTheme, darkTheme } from './theme';

const Tab = createBottomTabNavigator();

export default function App() {
  const systemScheme = useColorScheme();
  const [themeMode, setThemeMode] = React.useState(null); // null means follow system
  
  // Determine which theme to use
  const currentScheme = themeMode !== null ? themeMode : systemScheme;
  const theme = currentScheme === 'dark' ? darkTheme : lightTheme;

  const toggleTheme = () => {
    setThemeMode(prev => {
      if (prev === null) {
        // If following system, toggle to opposite of current system
        return systemScheme === 'dark' ? 'light' : 'dark';
      }
      // Toggle between light and dark
      return prev === 'dark' ? 'light' : 'dark';
    });
  };

  const contextValue = {
    theme,
    toggleTheme,
    setThemeMode,
  };

  if (!theme) {
    return null; // Wait for theme to load
  }

  return (
    <ThemeContext.Provider value={contextValue}>
      <NavigationContainer
        theme={{
          dark: currentScheme === 'dark',
          colors: {
            primary: theme.colors.primary,
            background: theme.colors.background,
            card: theme.colors.card,
            text: theme.colors.text,
            border: theme.colors.border,
            notification: theme.colors.primary,
          },
          fonts: {
            regular: {
              fontFamily: 'System',
              fontWeight: '400',
            },
            medium: {
              fontFamily: 'System',
              fontWeight: '500',
            },
            bold: {
              fontFamily: 'System',
              fontWeight: '700',
            },
            heavy: {
              fontFamily: 'System',
              fontWeight: '800',
            },
          },
        }}
      >
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerTitleAlign: 'center',
          tabBarIcon: ({ focused, color, size }) => {
            const icons = {
              Home: focused ? 'home' : 'home-outline',
              List: focused ? 'list' : 'list-outline',
            };
            return <Ionicons name={icons[route.name]} size={size} color={color} />;
          },
          tabBarActiveTintColor: theme.colors.primary,
          tabBarInactiveTintColor: theme.colors.textLight,
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="List" component={ListScreen} />
      </Tab.Navigator>
    </NavigationContainer>
    </ThemeContext.Provider>
  );
}