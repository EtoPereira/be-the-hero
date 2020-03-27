import React from "react";
import { View, Image, Text } from "react-native";

import {Feather} from '@expo/vector-icons'
import logoImg from "../../assets/logo.png";

import styles from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";
export default function Incidents() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <Text style={styles.headerText}>
        Total de <Text style={styles.headerTextBold}>0 casos.</Text>
      </Text>
      </View>

      <Text style={styles.title}>Bem-vindo!</Text>
      <Text style={styles.description}>
        Escolha um dos casos abaixo e salve o dia
      </Text>

      <View style={styles.incidentList}>
          <View style={styles.incident}>
            <Text style={styles.incidentProperty}>ONG:</Text>
            <Text style={styles.incidentProperty}>ONG:</Text>
           
            <Text style={styles.incidentProperty}>ONG:</Text>
            <Text style={styles.incidentProperty}>ONG:</Text>
            
            <Text style={styles.incidentProperty}>ONG:</Text>
            <Text style={styles.incidentProperty}>ONG:</Text>
          
          <TouchableOpacity style={styles.detailButton} onPress={()=>{}}></TouchableOpacity>
          <Text style={styles.detailButtonText}>Ver mais detalhes</Text>
          <Feather name="arrow-right" size={16} color="#E02041"/>
          </View>
      </View>
    </View>
  );
}
