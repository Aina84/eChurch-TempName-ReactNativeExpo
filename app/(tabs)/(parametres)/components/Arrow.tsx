/**
 * eTaiza – Arrow Component
 * Stack: React Native Expo + Tamagui
 */

import React from "react";
import { StyleSheet, Text } from "react-native";
import { COLORS } from "../../../utils/styles";

export function Arrow() {
  return <Text style={styles.arrow}>›</Text>;
}

const styles = StyleSheet.create({
  arrow: { fontSize: 20, color: COLORS.textMuted },
});
