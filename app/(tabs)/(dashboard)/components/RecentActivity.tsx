import { styles } from "@/app/utils/styles";
import { useEffect, useRef } from "react";
import { Animated } from "react-native";
import { Text, View } from "tamagui";


const ACTIVITIES = [
  { icon: "👤", text: "Nouveau membre : Marie Ondoa", time: "Il y a 2h" },
  { icon: "💰", text: "Rapport dîme: 45 000 XAF", time: "Il y a 5h" },
  { icon: "📋", text: "Rapport culte dominical ajouté", time: "Hier" },
];

export function RecentActivity() {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 600,
      delay: 700,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.View style={[styles.activityCard, { opacity: fadeAnim }]}>
      <Text style={styles.sectionTitle}>Activité Récente</Text>
      {ACTIVITIES.map((item, i) => (
        <View
          key={i}
          style={[
            styles.activityItem,
            i < ACTIVITIES.length - 1 && styles.activityItemBorder,
          ]}
        >
          <View style={styles.activityIconWrapper}>
            <Text style={styles.activityItemIcon}>{item.icon}</Text>
          </View>
          <View style={styles.activityText}>
            <Text style={styles.activityLabel}>{item.text}</Text>
            <Text style={styles.activityTime}>{item.time}</Text>
          </View>
        </View>
      ))}
    </Animated.View>
  );
}