import { Platform } from "react-native";
import { StyleSheet } from "react-native";

export const COLORS = {
  bg: "#080F24",
  bgCard: "#0E1A38",
  bgCardAlt: "#111F42",
  gold: "#E8A923",
  goldLight: "#F9DF8A",
  goldDim: "#A8710A",
  blue: "#1A3A8F",
  blueLight: "#2E5DD4",
  textPrimary: "#F0EEFF",
  textSecondary: "#7A99C8",
  textMuted: "#3D5A8A",
  accent: "#4A7FE5",
  success: "#34C98A",
  danger: "#E74C3C",
  border: "rgba(232,169,35,0.18)",
  borderBlue: "rgba(74,127,229,0.2)",
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bg,
  },
  scrollContent: {
    paddingBottom: 20,
  },

  // Background decorations
  bgCircle1: {
    position: "absolute",
    width: 320,
    height: 320,
    borderRadius: 160,
    backgroundColor: COLORS.blue,
    opacity: 0.06,
    top: -60,
    right: -80,
  },
  bgCircle2: {
    position: "absolute",
    width: 240,
    height: 240,
    borderRadius: 120,
    backgroundColor: COLORS.goldDim,
    opacity: 0.04,
    top: 300,
    left: -60,
  },

  // ── Header ──
  header: {
    marginBottom: 8,
  },
  headerGradient: {
    paddingTop: Platform.OS === "ios" ? 56 : 40,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  headerTopRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 18,
  },
  headerLogoArea: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  logoMark: {
    width: 40,
    height: 40,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  logoMarkText: {
    fontSize: 20,
    color: "#080F24",
    fontWeight: "800",
  },
  appName: {
    fontSize: 20,
    fontWeight: "800",
    color: COLORS.textPrimary,
    letterSpacing: 0.5,
  },
  appTagline: {
    fontSize: 11,
    color: COLORS.textSecondary,
    letterSpacing: 1.5,
    textTransform: "uppercase",
  },
  notifButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "rgba(255,255,255,0.06)",
    borderWidth: 1,
    borderColor: COLORS.borderBlue,
    alignItems: "center",
    justifyContent: "center",
  },
  notifIcon: { fontSize: 18 },
  notifBadge: {
    position: "absolute",
    top: 8,
    right: 8,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: COLORS.gold,
    borderWidth: 1.5,
    borderColor: COLORS.bg,
  },
  greetingRow: { marginBottom: 16 },
  greetingText: {
    fontSize: 15,
    color: COLORS.textSecondary,
    marginBottom: 3,
  },
  greetingName: {
    color: COLORS.textPrimary,
    fontWeight: "700",
  },
  dateText: {
    fontSize: 12,
    color: COLORS.textMuted,
    textTransform: "capitalize",
  },
  headerDivider: {
    height: 1,
    backgroundColor: COLORS.border,
  },

  // ── Sections ──
  section: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  statsSection: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: "700",
    color: COLORS.textSecondary,
    letterSpacing: 1.5,
    textTransform: "uppercase",
    marginBottom: 14,
  },

  // ── Stat Cards ──
  statsRow: {
    flexDirection: "row",
    gap: 12,
  },
  statCardWrapper: {
    flex: 1,
  },
  statCard: {
    borderRadius: 18,
    padding: 16,
    borderWidth: 1,
    borderColor: COLORS.border,
    overflow: "hidden",
    minHeight: 148,
  },
  statAccentLine: {
    position: "absolute",
    top: 0,
    left: 16,
    right: 16,
    height: 2.5,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2,
    opacity: 0.85,
  },
  statTopRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginTop: 8,
    marginBottom: 12,
  },
  statIconWrapper: {
    width: 38,
    height: 38,
    borderRadius: 11,
    backgroundColor: "rgba(255,255,255,0.06)",
    alignItems: "center",
    justifyContent: "center",
  },
  statIcon: { fontSize: 18 },
  deltaBadge: {
    paddingHorizontal: 7,
    paddingVertical: 3,
    borderRadius: 20,
  },
  deltaText: {
    fontSize: 9.5,
    fontWeight: "700",
    letterSpacing: 0.3,
  },
  statValue: {
    fontSize: 22,
    fontWeight: "800",
    color: COLORS.textPrimary,
    letterSpacing: -0.5,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 11.5,
    color: COLORS.textSecondary,
    letterSpacing: 0.3,
  },
  cornerCircle: {
    position: "absolute",
    bottom: -20,
    right: -20,
    width: 64,
    height: 64,
    borderRadius: 32,
    borderWidth: 1,
    opacity: 0.15,
  },

  // ── Chart ──
  chartCard: {
    backgroundColor: COLORS.bgCard,
    borderRadius: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  chartHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 16,
  },
  chartTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: COLORS.textPrimary,
    marginBottom: 3,
  },
  chartSubtitle: {
    fontSize: 11.5,
    color: COLORS.textSecondary,
  },
  chartLegend: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    backgroundColor: "rgba(232,169,35,0.1)",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "rgba(232,169,35,0.2)",
  },
  legendDot: {
    width: 7,
    height: 7,
    borderRadius: 3.5,
    backgroundColor: COLORS.gold,
  },
  legendText: {
    fontSize: 11,
    color: COLORS.gold,
    fontWeight: "600",
  },
  selectedValueBadge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 10,
    backgroundColor: "rgba(232,169,35,0.08)",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 10,
    alignSelf: "flex-start",
    borderWidth: 1,
    borderColor: "rgba(232,169,35,0.2)",
  },
  selectedValueLabel: {
    fontSize: 12,
    color: COLORS.textSecondary,
    fontWeight: "600",
  },
  selectedValueAmount: {
    fontSize: 13,
    color: COLORS.gold,
    fontWeight: "800",
  },
  chart: {
    marginLeft: -16,
    borderRadius: 12,
  },

  // ── Action Buttons ──
  actionsRow: {
    flexDirection: "row",
    gap: 12,
  },
  actionButtonWrapper: {},
  actionButtonPressable: {
    borderRadius: 16,
    overflow: "hidden",
  },
  actionButtonGradient: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
    paddingHorizontal: 12,
    gap: 8,
    borderRadius: 16,
  },
  actionButtonOutline: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
    paddingHorizontal: 12,
    gap: 8,
    borderRadius: 16,
    backgroundColor: COLORS.bgCard,
    borderWidth: 1.5,
    borderColor: COLORS.borderBlue,
  },
  actionIcon: { fontSize: 20 },
  actionLabel: {
    fontSize: 13.5,
    fontWeight: "700",
    letterSpacing: 0.2,
  },

  // ── Activity ──
  activityCard: {
    backgroundColor: COLORS.bgCard,
    borderRadius: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: COLORS.borderBlue,
  },
  activityItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    gap: 13,
  },
  activityItemBorder: {
    borderBottomWidth: 1,
    borderBottomColor: "rgba(74,127,229,0.1)",
  },
  activityIconWrapper: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: "rgba(74,127,229,0.1)",
    alignItems: "center",
    justifyContent: "center",
  },
  activityItemIcon: { fontSize: 18 },
  activityText: { flex: 1 },
  activityLabel: {
    fontSize: 13.5,
    color: COLORS.textPrimary,
    fontWeight: "500",
    marginBottom: 3,
  },
  activityTime: {
    fontSize: 11.5,
    color: COLORS.textMuted,
  },
});