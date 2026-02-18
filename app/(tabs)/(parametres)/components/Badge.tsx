/**
 * eTaiza – Badge Component
 * Stack: React Native Expo + Tamagui
 */

import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface BadgeProps {
  label: string;
  color: string;
  bg: string;
  border: string;
}

export function Badge({ label, color, bg, border }: BadgeProps) {
  return (
    <View style={[styles.badgeWrap, { backgroundColor: bg, borderColor: border }]}>
      <Text style={[styles.badgeText, { color }]}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badgeWrap: { paddingHorizontal: 9, paddingVertical: 3, borderRadius: 20, borderWidth: 1 },
  badgeText: { fontSize: 10.5, fontWeight: "700" },
});
