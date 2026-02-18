/**
 * eTaiza – Toggle Switch Component
 * Stack: React Native Expo + Tamagui
 */

import React from "react";
import { Switch } from "react-native";
import { COLORS } from "../../../utils/styles";

interface ToggleSwitchProps {
  value: boolean;
  onChange: (v: boolean) => void;
}

export function ToggleSwitch({ value, onChange }: ToggleSwitchProps) {
  return (
    <Switch
      value={value}
      onValueChange={onChange}
      trackColor={{ false: "rgba(255,255,255,0.1)", true: COLORS.gold }}
      thumbColor={value ? "#fff" : "rgba(255,255,255,0.6)"}
      ios_backgroundColor="rgba(255,255,255,0.1)"
    />
  );
}
