import { TamaguiProvider } from '@tamagui/core'
import '@tamagui/native/setup-zeego'
import { Stack } from 'expo-router'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { PortalProvider } from 'tamagui'
import { config } from '../tamagui.config'


export default function RootLayout() {
  return (
    <PortalProvider shouldAddRootHost>
      <SafeAreaProvider>
        <TamaguiProvider config={config} defaultTheme="dark">
          <Stack screenOptions={{ headerShown: false }} />
        </TamaguiProvider>
      </SafeAreaProvider>
    </PortalProvider>
  )
}