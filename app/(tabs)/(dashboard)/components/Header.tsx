import { COLORS, styles } from "@/app/utils/styles";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useRef } from "react";
import { Animated, Pressable } from "react-native";
import { Text, View } from "tamagui";


export function Header() {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 700,
      useNativeDriver: true,
    }).start();
  }, []);

  const now = new Date();
  const greeting =
    now.getHours() < 12
      ? "Bonjour"
      : now.getHours() < 18
      ? "Bon après-midi"
      : "Bonsoir";

  return (
    <Animated.View style={[styles.header, { opacity: fadeAnim }]}>
      <LinearGradient
        colors={["#0A1428", "#080F24"]}
        style={styles.headerGradient}
      >
        {/* Top row */}
        <View style={styles.headerTopRow}>
          <View style={styles.headerLogoArea}>
            <LinearGradient
              colors={[COLORS.gold, COLORS.goldDim]}
              style={styles.logoMark}
            >
              <Text style={styles.logoMarkText}>✝</Text>
            </LinearGradient>
            <View>
              <Text style={styles.appName}>eChurch</Text>
              <Text style={styles.appTagline}>Gestion d'Église</Text>
            </View>
          </View>
          <Pressable style={styles.notifButton}>
            <Text style={styles.notifIcon}>🔔</Text>
            <View style={styles.notifBadge} />
          </Pressable>
        </View>

        {/* Greeting */}
        <View style={styles.greetingRow}>
          <Text style={styles.greetingText}>
            {greeting},{" "}
            <Text style={styles.greetingName}>Pasteur Thomas 👋</Text>
          </Text>
          <Text style={styles.dateText}>
            {now.toLocaleDateString("fr-FR", {
              weekday: "long",
              day: "numeric",
              month: "long",
            })}
          </Text>
        </View>

        {/* Gold divider */}
        <View style={styles.headerDivider} />
      </LinearGradient>
    </Animated.View>
  );
}