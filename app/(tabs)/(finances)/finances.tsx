/**
 * eTaiza – Finances Screen
 * Stack: React Native Expo + Tamagui + expo-linear-gradient + react-native-chart-kit
 */

import { FinancesHeader } from "./components/FinancesHeader";
import { HeroTotalCard } from "./components/HeroTotalCard";
import { ChartCard } from "./components/ChartCard";
import { TypeFilters } from "./components/TypeFilters";
import { FinancesFab } from "./components/FinancesFab";
import { COLORS } from "@/app/utils/styles";
import { LinearGradient } from "expo-linear-gradient";
import { TransactionItem, TransactionItemType } from "./components/TransactionItem";
import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  FlatList,
  Platform,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

const { width: SCREEN_W } = Dimensions.get("window");
// ... other imports
const TRANSACTIONS : TransactionItemType[] = [
  { id: "1", icon: "💚", type: "income",  name: "Dîme du mois de Juin",          cat: "Dîme",     date: "16 juin 2025", amount: "+45 000", xaf: true  },
  { id: "2", icon: "🙏", type: "income",  name: "Offrande Culte Dominical",       cat: "Offrande", date: "15 juin 2025", amount: "+28 500", xaf: true  },
  { id: "3", icon: "🎁", type: "income",  name: "Don spécial – Construction",     cat: "Don",      date: "14 juin 2025", amount: "+18 000", xaf: true  },
  { id: "4", icon: "💸", type: "expense", name: "Achats fournitures culte",       cat: "Dépense",  date: "12 juin 2025", amount: "-7 500",  xaf: true  },
  { id: "5", icon: "🙏", type: "income",  name: "Offrande Jeune de prière",       cat: "Offrande", date: "11 juin 2025", amount: "+12 000", xaf: true  },
  { id: "6", icon: "💚", type: "income",  name: "Dîme semaine 22",               cat: "Dîme",     date: "8 juin 2025",  amount: "+22 000", xaf: true  },
  { id: "7", icon: "💸", type: "expense", name: "Facture électricité",            cat: "Dépense",  date: "5 juin 2025",  amount: "-15 000", xaf: true  },
];

const TYPE_FILTERS = [
  { key: "all",      label: "Tout",     icon: "📊" },
  { key: "dime",     label: "Dîme",    icon: "💚" },
  { key: "offrande", label: "Offrande", icon: "🙏" },
  { key: "don",      label: "Don",      icon: "🎁" },
  { key: "depense",  label: "Dépense",  icon: "💸" },
];

const CHART_DATA = {
  labels: ["Jan", "Fév", "Mar", "Avr", "Mai", "Jun"],
  datasets: [{ data: [42, 58, 51, 73, 68, 91.5] }],
};

export default function FinancesScreen() {
  const [activeType, setActiveType] = useState("all");
  const headerFade = useRef(new Animated.Value(0)).current;
  const heroSlide = useRef(new Animated.Value(30)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(headerFade, { toValue: 1, duration: 600, useNativeDriver: true }),
      Animated.spring(heroSlide, { toValue: 0, delay: 100, useNativeDriver: true, tension: 70, friction: 12 }),
    ]).start();
  }, []);

  const filtered = TRANSACTIONS.filter((t) => {
    if (activeType === "all") return true;
    if (activeType === "depense") return t.type === "expense";
    return t.cat.toLowerCase().includes(activeType);
  });

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.bg} />
      <LinearGradient colors={[COLORS.bg, "#0C1530", COLORS.bg]} style={StyleSheet.absoluteFill} />

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
        {/* Header */}
        <FinancesHeader headerFade={headerFade} />

        {/* Hero Total Card */}
        <HeroTotalCard heroSlide={heroSlide} />

        {/* Bar Chart */}
        <ChartCard screenWidth={SCREEN_W} chartData={CHART_DATA} />

        {/* Type Filters */}
        <TypeFilters typeFilters={TYPE_FILTERS} activeType={activeType} setActiveType={setActiveType} />

        {/* Transactions */}
        <Text style={styles.sectionLabel}>Transactions récentes</Text>
        {filtered.map((item, index) => (
          <TransactionItem key={item.id} item={item} index={index} />
        ))}

        <View style={{ height: 100 }} />
      </ScrollView>

      {/* FAB */}
      <FinancesFab />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.bg },
  scroll: { paddingBottom: 20 },








  sectionLabel: {
    fontSize: 10.5, fontWeight: "700", color: COLORS.textSecondary,
    letterSpacing: 2, textTransform: "uppercase",
    paddingHorizontal: 20, marginBottom: 12,
  },

});
