/**
 * eTaiza – Logout Button Component
 * Stack: React Native Expo + Tamagui
 */

import React from "react";
import { Alert, Pressable, StyleSheet, Text } from "react-native";
import { COLORS } from "../../../utils/styles";

interface LogoutButtonProps {
  handleLogout: () => void;
}

export function LogoutButton({ handleLogout }: LogoutButtonProps) {
  return (
    <Pressable style={styles.logoutBtn} onPress={handleLogout}>
      <Text style={styles.logoutIcon}>🚪</Text>
      <Text style={styles.logoutLabel}>Se déconnecter</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  logoutBtn: {
    marginHorizontal: 20, marginBottom: 16,
    backgroundColor: "rgba(231,76,60,0.1)",
    borderWidth: 1.5, borderColor: "rgba(231,76,60,0.25)",
    borderRadius: 14, paddingVertical: 14,
    flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 9,
  },
  logoutIcon: { fontSize: 19 },
  logoutLabel: { fontSize: 14, fontWeight: "700", color: COLORS.danger },
});
