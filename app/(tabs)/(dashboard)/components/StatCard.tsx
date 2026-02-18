import { useEffect, useRef } from "react";
import { Animated } from "react-native";
import { COLORS, styles } from "@/app/utils/styles";
import { LinearGradient } from "expo-linear-gradient";
import { Text, View } from "tamagui";

export const STATS = [
  {
    id: "members",
    label: "Total Membres",
    value: "247",
    delta: "+12 ce mois",
    deltaPositive: true,
    icon: "👥",
    gradient: ["#0E1A38", "#122045"] as [string, string],
    accentColor: COLORS.blueLight,
  },
  {
    id: "offerings",
    label: "Offrandes Cumulées",
    value: "383 500 XAF",
    delta: "+91 500 XAF",
    deltaPositive: true,
    icon: "🙏",
    gradient: ["#1A1400", "#2A1E00"] as [string, string],
    accentColor: COLORS.gold,
  },
];

interface StatCardProps {
  stat: (typeof STATS)[0];
  delay: number;
}

export function StatCard({ stat, delay }: StatCardProps) {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(30)).current;
  const scaleAnim = useRef(new Animated.Value(0.95)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 600,
        delay,
        useNativeDriver: true,
      }),
      Animated.spring(slideAnim, {
        toValue: 0,
        delay,
        useNativeDriver: true,
        tension: 80,
        friction: 10,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        delay,
        useNativeDriver: true,
        tension: 80,
        friction: 10,
      }),
    ]).start();
  }, []);

  return (
    <Animated.View
      style={[
        styles.statCardWrapper,
        {
          opacity: fadeAnim,
          transform: [{ translateY: slideAnim }, { scale: scaleAnim }],
        },
      ]}
    >
      <LinearGradient
        colors={stat.gradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.statCard}
      >
        {/* Border accent line */}
        <View
          style={[styles.statAccentLine, { backgroundColor: stat.accentColor }]}
        />

        {/* Top row */}
        <View style={styles.statTopRow}>
          <View style={styles.statIconWrapper}>
            <Text style={styles.statIcon}>{stat.icon}</Text>
          </View>
          <View
            style={[
              styles.deltaBadge,
              {
                backgroundColor: stat.deltaPositive
                  ? "rgba(52,201,138,0.12)"
                  : "rgba(231,76,60,0.12)",
              },
            ]}
          >
            <Text
              style={[
                styles.deltaText,
                { color: stat.deltaPositive ? COLORS.success : "#E74C3C" },
              ]}
            >
              ↑ {stat.delta}
            </Text>
          </View>
        </View>

        {/* Value */}
        <Text style={styles.statValue}>{stat.value}</Text>
        <Text style={styles.statLabel}>{stat.label}</Text>

        {/* Decorative corner circle */}
        <View
          style={[styles.cornerCircle, { borderColor: stat.accentColor }]}
        />
      </LinearGradient>
    </Animated.View>
  );
}