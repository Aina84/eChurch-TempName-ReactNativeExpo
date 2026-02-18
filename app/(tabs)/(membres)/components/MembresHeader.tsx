/**
 * eTaiza – Membres Header Component
 * Stack: React Native Expo + Tamagui
 */

import React from "react";
import { Animated, StyleSheet, Text, View } from "react-native";
import { COLORS } from "../../../utils/styles";

interface MembresHeaderProps {
  headerAnim: Animated.Value;
}

export function MembresHeader({ headerAnim }: MembresHeaderProps) {
  return (
    <Animated.View style={[styles.header, { opacity: headerAnim }]}>
      <View style={styles.headerRow}>
        <View>
          <Text style={styles.headerTitle}>Membres</Text>
          <Text style={styles.headerSub}>Registre de l'assemblée</Text>
        </View>
        <View style={styles.countBadge}>
          <Text style={styles.countText}>247 brebis</Text>
        </View>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 56, paddingHorizontal: 20, paddingBottom: 16,
    backgroundColor: "transparent",
  },
  headerRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start" },
  headerTitle: { fontFamily: "PlayfairDisplay_700Bold", fontSize: 28, fontWeight: "800", color: COLORS.textPrimary },
  headerSub: { fontSize: 12, color: COLORS.textSecondary, marginTop: 2 },
  countBadge: {
    backgroundColor: "rgba(232,169,35,0.12)", borderWidth: 1,
    borderColor: "rgba(232,169,35,0.25)", borderRadius: 20, paddingHorizontal: 12, paddingVertical: 5,
  },
  countText: { fontSize: 11, color: COLORS.gold, fontWeight: "700" },
});
