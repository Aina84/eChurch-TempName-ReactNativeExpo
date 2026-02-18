/**
 * eTaiza – Rapports Header Component
 * Stack: React Native Expo + Tamagui
 */

import React from "react";
import { Animated, Platform, Pressable, StyleSheet, Text, View } from "react-native";
import { COLORS } from "../../../utils/styles";

interface RapportsHeaderProps {
  fadeAnim: Animated.Value;
}

export function RapportsHeader({ fadeAnim }: RapportsHeaderProps) {
  return (
    <Animated.View style={[styles.header, { opacity: fadeAnim }]}>
      <View style={styles.headerRow}>
        <View>
          <Text style={styles.headerTitle}>Rapports</Text>
          <Text style={styles.headerSub}>Comptes rendus d'activité</Text>
        </View>
        <Pressable style={styles.addBtn}>
          <Text style={styles.addBtnIcon}>➕</Text>
        </Pressable>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  header: { paddingTop: Platform.OS === "ios" ? 56 : 40, paddingHorizontal: 20, paddingBottom: 16 },
  headerRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start" },
  headerTitle: { fontSize: 28, fontWeight: "800", color: COLORS.textPrimary },
  headerSub: { fontSize: 12, color: COLORS.textSecondary, marginTop: 2 },
  addBtn: {
    width: 40, height: 40, borderRadius: 20,
    backgroundColor: "rgba(255,255,255,0.06)", borderWidth: 1,
    borderColor: COLORS.borderBlue, alignItems: "center", justifyContent: "center",
  },
  addBtnIcon: { fontSize: 18 },
});
