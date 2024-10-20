import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const LanguageItem = ({ name, experience, logo }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: logo }} style={styles.logo} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.experience}><b>Опыт:</b> {experience}</Text>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  card: {
    display: "flex",
    alignItems: 'center',
    padding: 10,
    borderRadius: 20,
    backgroundColor: "white",
    width: "300px",
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  textContainer: {
    display: "flex",
    alignItems: "center"
  },
  name: {
    fontSize: 18,
    color: '#666',
    fontWeight: 'bold',
  },
  experience: {
    fontSize: 14,
    color: '#666',
  },
});

export default LanguageItem;
