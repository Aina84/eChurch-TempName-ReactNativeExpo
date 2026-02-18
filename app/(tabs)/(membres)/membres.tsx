/**
 * eTaiza – Membres Screen
 * Stack: React Native Expo + Tamagui + expo-linear-gradient
 */

import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  FlatList,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { MemberCard, Member } from "./components/MemberCard";
import { MembresHeader } from "./components/MembresHeader";
import { SearchBar } from "./components/SearchBar";
import { MemberFilters } from "./components/MemberFilters";
import { MembresFab } from "./components/MembresFab";

import { COLORS } from "../../utils/styles";

const FILTERS = ["Tous", "Actifs", "Leaders", "Nouveaux"];

const ALL_MEMBERS: Member[] = [
  { id: "1",  name: "Marie-Claire Ondoa",  role: "Cellule Espoir",  emoji: "👩‍🦱", color: "rgba(74,127,229,.2)",  active: true,  leader: false },
  { id: "2",  name: "Jean Paul Mbarga",     role: "Groupe Louange",  emoji: "👨‍🦲", color: "rgba(232,169,35,.2)", active: true,  leader: true  },
  { id: "3",  name: "Sophie Nkomo",          role: "Cellule Foi",     emoji: "👩",   color: "rgba(52,201,138,.2)", active: true,  leader: true  },
  { id: "4",  name: "Pierre Atangana",       role: "Jeunesse",        emoji: "👨",   color: "rgba(168,74,229,.2)",active: true,  leader: false },
  { id: "5",  name: "Yvette Biya",           role: "Cellule Espoir",  emoji: "👩‍🦳", color: "rgba(231,76,60,.18)", active: false, leader: false },
  { id: "6",  name: "Samuel Tabi",           role: "Diacres",         emoji: "👨‍🦱", color: "rgba(74,127,229,.2)",  active: true,  leader: true  },
  { id: "7",  name: "Colette Essomba",       role: "Chorale",         emoji: "👩‍🎤", color: "rgba(232,169,35,.2)", active: true,  leader: false },
  { id: "8",  name: "Marcel Fouda",          role: "Groupe Prière",   emoji: "🧔",   color: "rgba(52,201,138,.2)", active: true,  leader: false },
  { id: "9",  name: "Alice Mvondo",          role: "Cellule Foi",     emoji: "👩‍🦰", color: "rgba(168,74,229,.2)",active: false, leader: false },
  { id: "10", name: "David Nguele",          role: "Jeunesse",        emoji: "👦",   color: "rgba(74,127,229,.2)",  active: true,  leader: false },
];





export default function MembresScreen() {
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("Tous");
  const headerAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(headerAnim, { toValue: 1, duration: 600, useNativeDriver: true }).start();
  }, []);

  const filtered = ALL_MEMBERS.filter((m) => {
    const matchQuery = m.name.toLowerCase().includes(query.toLowerCase()) ||
      m.role.toLowerCase().includes(query.toLowerCase());
    if (activeFilter === "Actifs") return matchQuery && m.active;
    if (activeFilter === "Leaders") return matchQuery && m.leader;
    if (activeFilter === "Nouveaux") return matchQuery && parseInt(m.id) <= 3;
    return matchQuery;
  });

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.bg} />
      <LinearGradient colors={[COLORS.bg, "#0C1530", COLORS.bg]} style={StyleSheet.absoluteFill} />

      {/* Header */}
      <MembresHeader headerAnim={headerAnim} />

      {/* Search */}
      <SearchBar query={query} setQuery={setQuery} />

      {/* Filters */}
      <MemberFilters filters={FILTERS} activeFilter={activeFilter} setActiveFilter={setActiveFilter} />

      {/* Members List */}
      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => <MemberCard item={item} index={index} />}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <View style={styles.emptyState}>
            <Text style={styles.emptyIcon}>🔍</Text>
            <Text style={styles.emptyText}>Aucun membre trouvé</Text>
          </View>
        }
        ListFooterComponent={
          <Text style={styles.listFooter}>
            {filtered.length} résultat{filtered.length > 1 ? "s" : ""} affiché{filtered.length > 1 ? "s" : ""}
          </Text>
        }
      />

      {/* FAB */}
      <MembresFab />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.bg },



  listContent: { paddingHorizontal: 20, paddingBottom: 100 },

  emptyState: { alignItems: "center", paddingTop: 60 },
  emptyIcon: { fontSize: 40, marginBottom: 12 },
  emptyText: { fontSize: 14, color: COLORS.textSecondary },
  listFooter: { textAlign: "center", fontSize: 12, color: COLORS.textMuted, paddingVertical: 16 },

});
