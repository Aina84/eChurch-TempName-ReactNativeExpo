import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  Platform,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { View } from "tamagui";

import { styles } from "@/app/utils/styles";
import { COLORS } from "@/app/utils/styles";
import { STATS } from "./components/StatCard";

import { StatCard } from "./components/StatCard";
import { ActionButton } from "./components/ActionButton";
import { ChartSection } from "./components/ChartSection";
import { Header } from "./components/Header";
import { RecentActivity } from "./components/RecentActivity";

import { AddSheepCard } from "./components/AddSheepCard";

import { useWindowDimensions } from "tamagui";

export default function DashboardScreen() {
  const [refreshing] = useState(false);
  const [addClicked, setAddClicked] = useState<boolean | null>(null);
  const {height,width} = useWindowDimensions()
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.bg} />

      {/* Full-screen background */}
      <LinearGradient
        colors={[COLORS.bg, "#0C1530", COLORS.bg]}
        locations={[0, 0.5, 1]}
        style={StyleSheet.absoluteFill}
      />
      {addClicked && 
      <View flex={1} alignItems="center" justifyContent="center" height={height} backgroundColor={'$colorTransparent'}>
        <AddSheepCard></AddSheepCard>
      </View>
      }

      {/* Background decorative circles */}
      <View style={styles.bgCircle1} />
      <View style={styles.bgCircle2} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Header */}
        <Header />

        {/* Stat Cards */}
        <View style={styles.statsSection}>
          <Text style={styles.sectionTitle}>Vue d'ensemble</Text>
          <View style={styles.statsRow}>
            {STATS.map((stat, i) => (
              <StatCard key={stat.id} stat={stat} delay={100 + i * 120} />
            ))}
          </View>
        </View>

        {/* Chart */}
        <View style={styles.section}>
          <ChartSection />
        </View>

        {/* Action Buttons */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Actions rapides</Text>
          <View style={styles.actionsRow}>
            <ActionButton
              label="Ajouter Brebis"
              icon="🐑"
              primary={true}
              delay={400}
              onPress={() => setAddClicked(true)}
            />
            <ActionButton
              label="Ajouter Rapport"
              icon="📋"
              primary={false}
              delay={520}
              onPress={() => console.log("Ajouter Rapport")}
            />
          </View>
        </View>

        {/* Recent Activity */}
        <View style={styles.section}>
          <RecentActivity />
        </View>

        {/* Bottom spacing */}
        <View style={{ height: 40 }} />
      </ScrollView>
    </View>
  );
}

