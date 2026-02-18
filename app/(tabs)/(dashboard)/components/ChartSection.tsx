import { COLORS, styles } from "@/app/utils/styles";
import { useEffect, useRef, useState } from "react";
import { Animated, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { Text, View } from "tamagui";


const { width: SCREEN_W } = Dimensions.get("window");

// ─── Mock Data ────────────────────────────────────────────────────────────────

const MONTHLY_DATA = {
  labels: ["Jan", "Fév", "Mar", "Avr", "Mai", "Jun"],
  datasets: [
    {
      data: [42000, 58000, 51000, 73000, 68000, 91500],
      color: (opacity = 1) => `rgba(232,169,35,${opacity})`,
      strokeWidth: 2.5,
    },
  ],
};

export function ChartSection() {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(40)).current;
  const [selectedPoint, setSelectedPoint] = useState<number | null>(null);

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 700,
        delay: 500,
        useNativeDriver: true,
      }),
      Animated.spring(slideAnim, {
        toValue: 0,
        delay: 500,
        useNativeDriver: true,
        tension: 60,
        friction: 12,
      }),
    ]).start();
  }, []);

  return (
    <Animated.View
      style={[
        styles.chartCard,
        {
          opacity: fadeAnim,
          transform: [{ translateY: slideAnim }],
        },
      ]}
    >
      {/* Card header */}
      <View style={styles.chartHeader}>
        <View>
          <Text style={styles.chartTitle}>Évolution Mensuelle</Text>
          <Text style={styles.chartSubtitle}>Offrandes · 6 derniers mois</Text>
        </View>
        <View style={styles.chartLegend}>
          <View style={styles.legendDot} />
          <Text style={styles.legendText}>2025</Text>
        </View>
      </View>

      {/* Current selected value indicator */}
      {selectedPoint !== null && (
        <View style={styles.selectedValueBadge}>
          <Text style={styles.selectedValueLabel}>
            {MONTHLY_DATA.labels[selectedPoint]}
          </Text>
          <Text style={styles.selectedValueAmount}>
            {MONTHLY_DATA.datasets[0].data[selectedPoint].toLocaleString()} XAF
          </Text>
        </View>
      )}

      {/* Line Chart */}
      <LineChart
        data={MONTHLY_DATA}
        width={SCREEN_W - 48}
        height={200}
        chartConfig={{
          backgroundGradientFrom: "#0E1A38",
          backgroundGradientTo: "#0E1A38",
          backgroundGradientFromOpacity: 0,
          backgroundGradientToOpacity: 0,
          color: (opacity = 1) => `rgba(232,169,35,${opacity})`,
          labelColor: () => COLORS.textSecondary,
          strokeWidth: 2.5,
          propsForDots: {
            r: "5",
            strokeWidth: "2",
            stroke: COLORS.gold,
            fill: COLORS.bg,
          },
          propsForBackgroundLines: {
            stroke: "rgba(74,127,229,0.1)",
            strokeDasharray: "4,4",
          },
          decimalPlaces: 0,
          style: { borderRadius: 12 },
        }}
        bezier
        withInnerLines={true}
        withOuterLines={false}
        withShadow={true}
        style={styles.chart}
        onDataPointClick={({ index }) => setSelectedPoint(index)}
        formatYLabel={(val) => {
          const n = parseInt(val, 10);
          if (n >= 1000) return `${(n / 1000).toFixed(0)}k`;
          return val;
        }}
      />
    </Animated.View>
  );
}