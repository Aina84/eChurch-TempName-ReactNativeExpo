/**
 * eTaiza – Membres Floating Action Button (FAB) Component
 * Stack: React Native Expo + Tamagui + expo-linear-gradient
 */

import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS } from "../../../utils/styles";

export function MembresFab() {
  return (
    <View style={styles.fabWrap}>
      <Pressable style={styles.fab}>
        <LinearGradient
          colors={[COLORS.goldLight, COLORS.goldDim]}
          style={styles.fabGrad}
        >
          <Text style={styles.fabIcon}>➕</Text>
          <Text style={styles.fabLabel}>Ajouter Brebis</Text>
        </LinearGradient>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  fabWrap: { position: "absolute", bottom: 100, left: 20, right: 20 },
  fab: { borderRadius: 16, overflow: "hidden" },
  fabGrad: { flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 8, paddingVertical: 16 },
  fabIcon: { fontSize: 18 },
  fabLabel: { fontSize: 14, fontWeight: "700", color: "#080F24" },
});
