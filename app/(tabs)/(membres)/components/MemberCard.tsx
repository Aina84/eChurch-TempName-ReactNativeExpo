/**
 * eTaiza – Member Card Component
 * Stack: React Native Expo + Tamagui
 */

import React, { useEffect, useRef } from "react";
import { Animated, Pressable, StyleSheet, Text, View } from "react-native";
import { COLORS } from "../../../utils/styles";

export interface Member {
  id: string; name: string; role: string;
  emoji: string; color: string; active: boolean; leader: boolean;
}

interface MemberCardProps {
  item: Member;
  index: number;
}

export function MemberCard({ item, index }: MemberCardProps) {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(20)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, { toValue: 1, duration: 400, delay: index * 60, useNativeDriver: true }),
      Animated.spring(slideAnim, { toValue: 0, delay: index * 60, useNativeDriver: true, tension: 80, friction: 10 }),
    ]).start();
  }, []);

  const pressAnim = useRef(new Animated.Value(1)).current;
  const onIn = () => Animated.spring(pressAnim, { toValue: 0.97, useNativeDriver: true }).start();
  const onOut = () => Animated.spring(pressAnim, { toValue: 1, useNativeDriver: true }).start();

  return (
    <Animated.View style={{ opacity: fadeAnim, transform: [{ translateY: slideAnim }, { scale: pressAnim }] }}>
      <Pressable onPressIn={onIn} onPressOut={onOut} style={styles.memberCard}>
        <View style={[styles.memberAvatar, { backgroundColor: item.color }]}>
          <Text style={styles.memberEmoji}>{item.emoji}</Text>
        </View>
        <View style={styles.memberInfo}>
          <Text style={styles.memberName}>{item.name}</Text>
          <Text style={styles.memberRole}>{item.role}</Text>
          <View style={styles.memberBadges}>
            <View style={[styles.badge, item.active ? styles.badgeActive : styles.badgeInactive]}>
              <Text style={[styles.badgeText, { color: item.active ? COLORS.success : COLORS.danger }]}>
                {item.active ? "Actif" : "Inactif"}
              </Text>
            </View>
            {item.leader && (
              <View style={styles.badgeLeader}>
                <Text style={[styles.badgeText, { color: COLORS.gold }]}>Leader</Text>
              </View>
            )}
          </View>
        </View>
        <Text style={styles.memberArrow}>›</Text>
      </Pressable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  memberCard: {
    flexDirection: "row", alignItems: "center", gap: 13,
    backgroundColor: COLORS.bgCard, borderRadius: 16,
    borderWidth: 1, borderColor: COLORS.borderBlue,
    padding: 14, marginBottom: 10,
  },
  memberAvatar: { width: 48, height: 48, borderRadius: 14, alignItems: "center", justifyContent: "center" },
  memberEmoji: { fontSize: 22 },
  memberInfo: { flex: 1 },
  memberName: { fontSize: 14, fontWeight: "700", color: COLORS.textPrimary, marginBottom: 3 },
  memberRole: { fontSize: 11.5, color: COLORS.textSecondary, marginBottom: 6 },
  memberBadges: { flexDirection: "row", gap: 6 },
  badge: { paddingHorizontal: 8, paddingVertical: 2, borderRadius: 10, borderWidth: 1 },
  badgeActive: { backgroundColor: "rgba(52,201,138,.12)", borderColor: "rgba(52,201,138,.2)" },
  badgeInactive: { backgroundColor: "rgba(231,76,60,.1)", borderColor: "rgba(231,76,60,.2)" },
  badgeLeader: {
    backgroundColor: "rgba(232,169,35,.12)", borderWidth: 1,
    borderColor: "rgba(232,169,35,.2)", paddingHorizontal: 8, paddingVertical: 2, borderRadius: 10,
  },
  badgeText: { fontSize: 9.5, fontWeight: "700" },
  memberArrow: { fontSize: 20, color: COLORS.textMuted },
});
