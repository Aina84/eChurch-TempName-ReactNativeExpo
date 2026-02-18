/**
 * eTaiza – Report Filters Component
 * Stack: React Native Expo + Tamagui
 */

import React from "react";
import { Pressable, ScrollView, StyleSheet, Text } from "react-native";
import { COLORS } from "../../../utils/styles";

interface ReportFiltersProps {
  filters: string[];
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
}

export function ReportFilters({ filters, activeFilter, setActiveFilter }: ReportFiltersProps) {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.filterRow}>
      {filters.map((f) => (
        <Pressable
          key={f}
          style={[styles.filterChip, activeFilter === f && styles.filterChipActive]}
          onPress={() => setActiveFilter(f)}
        >
          <Text style={[styles.filterText, activeFilter === f && styles.filterTextActive]}>{f}</Text>
        </Pressable>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  filterRow: { paddingHorizontal: 20, gap: 8, marginBottom: 16 },
  filterChip: {
    paddingHorizontal: 16, paddingVertical: 8, borderRadius: 20,
    borderWidth: 1, borderColor: COLORS.borderBlue,
  },
  filterChipActive: { backgroundColor: COLORS.gold, borderColor: COLORS.gold },
  filterText: { fontSize: 12, fontWeight: "600", color: COLORS.textSecondary },
  filterTextActive: { color: "#080F24" },
});
