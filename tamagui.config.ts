import { createTamagui } from '@tamagui/core'
import { config as tamaguiConfig } from '@tamagui/config/v3'

export const config = createTamagui(tamaguiConfig)

console.log(config ? 'oui' : 'non')

export default config

export type Conf = typeof config

declare module '@tamagui/core' {
  interface TamaguiCustomConfig extends Conf {}
}