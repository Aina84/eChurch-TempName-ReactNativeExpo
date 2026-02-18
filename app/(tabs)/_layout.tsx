import { Tabs } from 'expo-router';
import { useTheme } from 'tamagui';
import { Home, User, Settings, Bell, Menu, Users2, PiggyBank, ListTodo } from '@tamagui/lucide-icons';

export default function TabLayout() {
  const theme = useTheme();

  return (
    <Tabs
      screenOptions={{
        // Style des onglets
        tabBarActiveTintColor: theme.blue10?.val,
        tabBarInactiveTintColor: theme.gray10?.val,
        tabBarStyle: {
          backgroundColor: theme.background?.val,
          borderTopColor: theme.borderColor?.val,
          height: 60,
          paddingBottom: 5,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
        },
        // Cache le header des écrans individuels (optionnel)
        headerShown: false,
      }}
    >
      {/* Premier onglet - Accueil */}
      <Tabs.Screen
        name="(dashboard)/dashboard"
        options={{
          title: 'Accueil',
          tabBarIcon: ({ color, size }) => (
            <Home size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="(membres)/membres"
        options={{
          title: 'Membres',
          tabBarIcon: ({ color, size }) => (
            <Users2 size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="(finances)/finances"
        options={{
          title: 'Finances',
          tabBarIcon: ({ color, size }) => (
            <PiggyBank size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="(rapports)/rapports" 
        options={{
          title: 'Rapports',
          tabBarIcon: ({ color, size }) => (
            <ListTodo size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="(parametres)/parametres"
        options={{
          title: 'Paramètres',
          tabBarIcon: ({ color, size }) => (
            <Settings size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}