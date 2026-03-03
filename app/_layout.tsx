import { Stack } from 'expo-router'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { PortalProvider, TamaguiProvider } from 'tamagui'
import { config } from '../tamagui.config'

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <TamaguiProvider config={config} defaultTheme="dark">
        <PortalProvider>
          <Stack screenOptions={{headerShown:false}}>
            <Stack.Screen name='index' options={{ headerShown: false }} />
          </Stack>
        </PortalProvider>
      </TamaguiProvider>
    </SafeAreaProvider>
  )
}