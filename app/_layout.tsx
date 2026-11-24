import { Stack, Redirect, useSegments } from 'expo-router';
import { AuthProvider, useAuth } from '../context/AuthContext';
import { useEffect, useState } from 'react';
import SplashScreen from '../components/SplashScreen';
import { ActivityIndicator, View } from 'react-native';

let splashDisplayed = false;

function InitialLayout() {
  const { user, loading } = useAuth();
  const segments = useSegments();

  const [showSplash, setShowSplash] = useState(!splashDisplayed);

  useEffect(() => {
    if (!showSplash) {
      return;
    }

    const timer = setTimeout(() => {
      splashDisplayed = true;
      setShowSplash(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [showSplash]);

  if (showSplash) {
    return <SplashScreen />;
  }

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  const inAuthGroup = segments[0] === '(tabs)';

  if (!user && inAuthGroup) {
    return <Redirect href="/" />;
  }

  if (user && !inAuthGroup) {
    return <Redirect href="/(tabs)/accounts" />;
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="sign-in" />
      <Stack.Screen name="sign-up" />
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <InitialLayout />
    </AuthProvider>
  );
}