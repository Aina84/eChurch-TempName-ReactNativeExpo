import React, { useEffect, useRef } from "react";
import { Animated, Pressable, StyleSheet, Text, View } from "react-native";
import { COLORS } from "../../../utils/styles"; // Assuming COLORS is defined here

export type TransactionItemType = {
  id: string;
  icon: string;
  type: "income" | "expense";
  name: string;
  cat: string;
  date: string;
  amount: string;
  xaf: boolean;
};

export function TransactionItem({ item, index }: { item: TransactionItemType; index: number }) {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(16)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, { toValue: 1, duration: 400, delay: index * 55, useNativeDriver: true }),
      Animated.spring(slideAnim, { toValue: 0, delay: index * 55, useNativeDriver: true, tension: 80, friction: 10 }),
    ]).start();
  }, []);

  return (
    <Animated.View style={{ opacity: fadeAnim, transform: [{ translateY: slideAnim }] }}>
      <Pressable style={styles.transactionItem}>
        <View style={[styles.transIcon, { backgroundColor: item.type === "income" ? "rgba(52,201,138,.1)" : "rgba(231,76,60,.1)" }]}>
          <Text style={styles.transIconText}>{item.icon}</Text>
        </View>
        <View style={styles.transInfo}>
          <Text style={styles.transName}>{item.name}</Text>
          <Text style={styles.transMeta}>{item.cat} · {item.date}</Text>
        </View>
        <Text style={[styles.transAmount, { color: item.type === "income" ? COLORS.success : COLORS.danger }]}>
          {item.amount}{item.xaf ? " XAF" : ""}
        </Text>
      </Pressable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  transactionItem: {
    flexDirection: "row", alignItems: "center", gap: 12,
    backgroundColor: COLORS.bgCard, borderRadius: 15,
    borderWidth: 1, borderColor: COLORS.borderBlue,
    paddingHorizontal: 15, paddingVertical: 13,
    marginHorizontal: 20, marginBottom: 9,
  },
  transIcon: { width: 42, height: 42, borderRadius: 12, alignItems: "center", justifyContent: "center" },
  transIconText: { fontSize: 17 },
  transInfo: { flex: 1 },
  transName: { fontSize: 13.5, fontWeight: "600", color: COLORS.textPrimary, marginBottom: 2 },
  transMeta: { fontSize: 11, color: COLORS.textMuted },
  transAmount: { fontSize: 14.5, fontWeight: "800" },
});
