/**
 * eTaiza – Rapports Screen
 * Stack: React Native Expo + Tamagui + expo-linear-gradient
 */

import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  Platform,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { COLORS } from "../../utils/styles";
import { ReportCard, ReportType } from "./components/ReportCard";
import { RapportsHeader } from "./components/RapportsHeader";
import { StatsRow } from "./components/StatsRow";
import { ReportFilters } from "./components/ReportFilters";
import { EmptyState } from "./components/EmptyState";
import { RapportsFab } from "./components/RapportsFab";

const REPORTS: {
    id: string; type: ReportType; typeLbl: string;
    title: string; desc: string; date: string;
    amount: string; author: string;
  }[] = [
  {
    id: "1", type: "culte" as ReportType, typeLbl: "Culte",
    title: "Culte Dominical – 15 Juin",
    desc: "Présence de 182 fidèles. Prédication sur Jean 15:5. Louange exceptionnelle par le groupe Hosanna.",
    date: "15 juin 2025", amount: "91 500 XAF", author: "P. Thomas",
  },
  {
    id: "2", type: "dime" as ReportType, typeLbl: "Dîme",
    title: "Collecte Dîme – Semaine 24",
    desc: "Collecte de la dîme hebdomadaire auprès des membres de l'assemblée.",
    date: "14 juin 2025", amount: "45 000 XAF", author: "Diac. Marie",
  },
  {
    id: "3", type: "offrande" as ReportType, typeLbl: "Offrande",
    title: "Offrande Jeune de Prière",
    desc: "Offrande recueillie lors du jeune mensuel de 3 jours.",
    date: "11 juin 2025", amount: "28 500 XAF", author: "P. Thomas",
  },
  {
    id: "4", type: "culte" as ReportType, typeLbl: "Culte",
    title: "Réunion de Cellule – Espoir",
    desc: "Réunion hebdomadaire de la cellule Espoir. 24 présents. Étude de la Parole sur la foi.",
    date: "10 juin 2025", amount: "—", author: "S. Tabi",
  },
  {
    id: "5", type: "autre" as ReportType, typeLbl: "Autre",
    title: "Réunion Bureau Exécutif",
    desc: "Ordre du jour : planification Conférence Annuelle 2025 et budget prévisionnel.",
    date: "8 juin 2025", amount: "—", author: "P. Thomas",
  },
  {
    id: "6", type: "dime" as ReportType, typeLbl: "Dîme",
    title: "Dîme Mensuelle – Mai 2025",
    desc: "Collecte mensuelle de la dîme. Progression de 8% par rapport au mois précédent.",
    date: "31 mai 2025", amount: "68 000 XAF", author: "Diac. Samuel",
  },
];

const STATS = [
  { icon: "📋", val: "38", lbl: "Total" },
  { icon: "⛪", val: "18", lbl: "Cultes" },
  { icon: "💰", val: "12", lbl: "Finances" },
  { icon: "📅", val: "8",  lbl: "Autres" },
];

const FILTERS = ["Tous", "Culte", "Dîme", "Offrande", "Autre"];



export default function RapportsScreen() {
  const [activeFilter, setActiveFilter] = useState("Tous");
  const headerFade = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(headerFade, { toValue: 1, duration: 600, useNativeDriver: true }).start();
  }, []);

  const filtered = REPORTS.filter((r) => {
    if (activeFilter === "Tous") return true;
    return r.typeLbl === activeFilter;
  });

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.bg} />
      <LinearGradient colors={[COLORS.bg, "#0C1530", COLORS.bg]} style={StyleSheet.absoluteFill} />

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
        {/* Header */}
        <RapportsHeader fadeAnim={headerFade} />

        {/* Stats Row */}
        <StatsRow stats={STATS} headerFade={headerFade} />

        {/* Filters */}
        <ReportFilters filters={FILTERS} activeFilter={activeFilter} setActiveFilter={setActiveFilter} />

        {/* Reports */}
        {filtered.length === 0 ? (
          <EmptyState />
        ) : (
          filtered.map((r, i) => <ReportCard key={r.id} report={r} index={i} />)
        )}

        <View style={{ height: 100 }} />
      </ScrollView>

      {/* FAB */}
      <RapportsFab />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.bg },
  scroll: { paddingBottom: 20 },











});
