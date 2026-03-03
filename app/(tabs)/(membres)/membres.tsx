/**
 * eTaiza – Membres Screen
 * Stack: React Native Expo + Tamagui + expo-linear-gradient
 */

import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  FlatList,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { MemberCard, Member } from "./components/MemberCard";
import { MembresHeader } from "./components/MembresHeader";
import { SearchBar } from "./components/SearchBar";
import { MemberFilters } from "./components/MemberFilters";
import { MembresFab } from "./components/MembresFab";

import { COLORS } from "../../utils/styles";
import { db } from "@/lib/database/db";
import { sheeps } from "@/lib/database/schema";
import { AddSheepCard } from "@/components/shared/AddSheepCard";

const FILTERS = ["Tous", "Actifs", "Inactifs",'Chorals', 'Securités', 'Interceseurs', 'Accueils', 'Diakona', 'Assistants', 'Staffs', 'Tsotra'];

export default function MembresScreen() {
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("Tous");
  const headerAnim = useRef(new Animated.Value(0)).current;
  const [members, setMembers] = useState<Member[]>([])
  const [showAddSheepCard, setShowAddSheepCard] = useState<boolean | null>(null)

  useEffect(()=>{
    async function fetchMember() {
      try {
        const data = await db.select().from(sheeps).all();
        setMembers(data);
      } catch (error) {
        console.error('Error fetching members:', error);
      }
    }
    fetchMember();
  },[])

  useEffect(() => {
    Animated.timing(headerAnim, { toValue: 1, duration: 600, useNativeDriver: true }).start();
  }, []);

  const filtered = members?.filter((m : Member) => {
    const matchQuery = m.name.toLowerCase().includes(query.toLowerCase()) || m.role?.toLowerCase().includes(query.toLowerCase());
    switch(activeFilter){
      case 'Actifs':
        return m.status=='actif'
      case 'Inactifs':
        return m.status=='inactif'
      case 'Chorals' :
        return m.role=="Choral"
      case 'Securités':
        return m.role== 'Securité'
      case 'Interceseurs':
        return m.role=="Interceseur"
      case 'Accueils':
        return m.role=='Accueil' 
      case 'Diakona':
        return m.role== 'Diakona'
      case 'Assistants':
        return m.role=='Assistant'
      case 'Staffs':
        return m.role=='Staff'
      case 'Tsotra':
        return m.role=='Tsotra'
      case 'Tous':
        return m
    }
    return matchQuery;
  });

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.bg} />
      <LinearGradient colors={[COLORS.bg, "#0C1530", COLORS.bg]} style={StyleSheet.absoluteFill} />

        <AddSheepCard
          visible={showAddSheepCard==true}
          onClose={()=>setShowAddSheepCard(null)}
          onUserAdded={()=>setShowAddSheepCard(null)}
        ></AddSheepCard>      

      <MembresHeader headerAnim={headerAnim} />

      <SearchBar query={query} setQuery={setQuery} />

      <MemberFilters filters={FILTERS} activeFilter={activeFilter} setActiveFilter={setActiveFilter} />

      <FlatList
        data={filtered}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item, index }) => <MemberCard item={item} index={index} />}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <View style={styles.emptyState}>
            <Text style={styles.emptyIcon}>🔍</Text>
            <Text style={styles.emptyText}>Aucun membre trouvé</Text>
          </View>
        }
        ListFooterComponent={
          <Text style={styles.listFooter}>
            {filtered.length} résultat{filtered.length > 1 ? "s" : ""} affiché{filtered.length > 1 ? "s" : ""}
          </Text>
        }
      />

      <MembresFab onPress={()=>{setShowAddSheepCard(value => value = true)}}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.bg },
  listContent: { paddingHorizontal: 10, paddingBottom: 100 },
  emptyState: { alignItems: "center", paddingTop: 60 },
  emptyIcon: { fontSize: 40, marginBottom: 12 },
  emptyText: { fontSize: 14, color: COLORS.textSecondary },
  listFooter: { textAlign: "center", fontSize: 12, color: COLORS.textMuted, paddingVertical: 16 },

});
