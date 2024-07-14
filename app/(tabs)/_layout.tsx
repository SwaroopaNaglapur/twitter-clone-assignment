import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerLeft: () => (<Image source={require('@/assets/images/avatar.png')} style={{marginLeft: 15, width:30, height: 30, borderRadius: 20}}/>),
      }}>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons name={'home'} size={28} color={color}/>
          ),
          headerTitle: "home",
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: 'Search',
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons name={'search'} size={28} color={color}/>
          ),
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          title: 'Notifications',
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons name={'notifications'} size={28} color={color}/>
          ),
          tabBarBadge: 9
        }}
      />
      <Tabs.Screen
        name="messages" 
        options={{
          title: 'Messages',
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons name={'email'} size={28} color={color}/>
          ),
          tabBarBadge: 3
        }}
      />
    </Tabs>
  );
}
