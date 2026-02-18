/**
 * eTaiza – Paramètres Screen
 * Stack: React Native Expo + Tamagui + expo-linear-gradient
 */

import React, { useEffect, useRef, useState } from "react";
import {
  Alert,
  Animated,
  Platform,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Switch,
  Text,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { COLORS } from "../../utils/styles";
import { SettingItem, SettingItemProps } from "./components/SettingItem";
import { SettingsGroup } from "./components/SettingsGroup";
import { Arrow } from "./components/Arrow";
import { ToggleSwitch } from "./components/ToggleSwitch";
import { Badge } from "./components/Badge";
import { ParametresHeader } from "./components/ParametresHeader";
import { ProfileHero } from "./components/ProfileHero";
import { LogoutButton } from "./components/LogoutButton";




// ── Main Screen ───────────────────────────────────────────────────────────────

export default function ParametresScreen() {
  const [notifPush, setNotifPush] = useState(true);
  const [notifCulte, setNotifCulte] = useState(true);
  const [notifWeekly, setNotifWeekly] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const profileSlide = useRef(new Animated.Value(30)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, { toValue: 1, duration: 600, useNativeDriver: true }),
      Animated.spring(profileSlide, { toValue: 0, delay: 100, useNativeDriver: true, tension: 70, friction: 12 }),
    ]).start();
  }, []);

  const handleLogout = () => {
    Alert.alert(
      "Se déconnecter",
      "Voulez-vous vraiment vous déconnecter de eTaiza ?",
      [
        { text: "Annuler", style: "cancel" },
        { text: "Déconnecter", style: "destructive", onPress: () => console.log("Logout") },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.bg} />
      <LinearGradient colors={[COLORS.bg, "#0C1530", COLORS.bg]} style={StyleSheet.absoluteFill} />

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
        {/* Header */}
        <ParametresHeader fadeAnim={fadeAnim} />

        {/* Profile Hero */}
        <ProfileHero fadeAnim={fadeAnim} profileSlide={profileSlide} />

        {/* ── Église ── */}
        <SettingsGroup title="Église">
          <SettingItem
            icon="⛪" iconBg="rgba(232,169,35,.12)" label="Informations de l'église"
            right={<Arrow />}
            onPress={() => console.log("Church info")}
          />
          <SettingItem
            icon="👥" iconBg="rgba(74,127,229,.12)" label="Groupes & Cellules"
            right={
              <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
                <Badge label="6 groupes" color={COLORS.accent} bg="rgba(74,127,229,.15)" border="rgba(74,127,229,.25)" />
                <Arrow />
              </View>
            }
            onPress={() => console.log("Groups")}
          />
          <SettingItem
            icon="📅" iconBg="rgba(52,201,138,.12)" label="Calendrier liturgique"
            right={<Arrow />}
            onPress={() => console.log("Calendar")}
            isLast
          />
        </SettingsGroup>

        {/* ── Utilisateurs ── */}
        <SettingsGroup title="Utilisateurs & Accès">
          <SettingItem
            icon="🔐" iconBg="rgba(168,74,229,.12)" label="Rôles & Permissions"
            right={<Arrow />}
            onPress={() => console.log("Roles")}
          />
          <SettingItem
            icon="👤" iconBg="rgba(231,76,60,.12)" label="Mon compte"
            right={<Arrow />}
            onPress={() => console.log("Account")}
          />
          <SettingItem
            icon="🔑" iconBg="rgba(232,169,35,.12)" label="Changer le mot de passe"
            right={<Arrow />}
            onPress={() => console.log("Password")}
            isLast
          />
        </SettingsGroup>

        {/* ── Notifications ── */}
        <SettingsGroup title="Notifications">
          <SettingItem
            icon="🔔" iconBg="rgba(74,127,229,.12)" label="Notifications push"
            right={<ToggleSwitch value={notifPush} onChange={setNotifPush} />}
          />
          <SettingItem
            icon="💬" iconBg="rgba(52,201,138,.12)" label="Rappels cultes"
            right={<ToggleSwitch value={notifCulte} onChange={setNotifCulte} />}
          />
          <SettingItem
            icon="📊" iconBg="rgba(232,169,35,.12)" label="Rapport hebdomadaire"
            right={<ToggleSwitch value={notifWeekly} onChange={setNotifWeekly} />}
            isLast
          />
        </SettingsGroup>

        {/* ── Affichage ── */}
        <SettingsGroup title="Affichage">
          <SettingItem
            icon="🌙" iconBg="rgba(74,127,229,.12)" label="Mode sombre"
            right={<ToggleSwitch value={darkMode} onChange={setDarkMode} />}
          />
          <SettingItem
            icon="🌍" iconBg="rgba(74,127,229,.12)" label="Langue"
            right={
              <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
                <Text style={styles.settingValue}>Français</Text>
                <Arrow />
              </View>
            }
            onPress={() => console.log("Language")}
            isLast
          />
        </SettingsGroup>

        {/* ── Application ── */}
        <SettingsGroup title="Application">
          <SettingItem
            icon="💾" iconBg="rgba(255,255,255,.06)" label="Sauvegarder les données"
            right={<Arrow />}
            onPress={() => console.log("Backup")}
          />
          <SettingItem
            icon="🔄" iconBg="rgba(52,201,138,.12)" label="Synchronisation"
            right={
              <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
                <Badge label="À jour" color={COLORS.success} bg="rgba(52,201,138,.12)" border="rgba(52,201,138,.2)" />
                <Arrow />
              </View>
            }
            onPress={() => console.log("Sync")}
          />
          <SettingItem
            icon="ℹ️" iconBg="rgba(74,127,229,.12)" label="À propos d'eTaiza"
            right={
              <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
                <Text style={styles.versionText}>v1.0.0</Text>
                <Arrow />
              </View>
            }
            onPress={() => console.log("About")}
            isLast
          />
        </SettingsGroup>

        {/* Logout */}
        <LogoutButton handleLogout={handleLogout} />

        <Text style={styles.footer}>eTaiza v1.0.0 · Fait avec ✝ pour l'Église</Text>

        <View style={{ height: 100 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.bg },
  scroll: { paddingBottom: 20 },







  settingValue: { fontSize: 13, color: COLORS.textSecondary },
  versionText: { fontSize: 12, color: COLORS.textMuted },





  footer: { textAlign: "center", fontSize: 11, color: COLORS.textMuted, paddingBottom: 8 },
});
