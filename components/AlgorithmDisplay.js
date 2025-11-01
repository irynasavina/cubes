import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// Инверсия алгоритма
const invertAlg = (alg) => {
  return alg
    .trim()
    .split(/\s+/)
    .map(move => move.replace(/2'+$/, '2')) // нормализация 2' -> 2
    .reverse()
    .map(move => {
      if (move.endsWith("'")) return move.slice(0, -1);
      if (move.endsWith("2")) return move;
      return move + "'";
    })
    .join(' ');
};

const AlgorithmDisplay = ({ algorithm }) => {
  const [isInverted, setIsInverted] = useState(false);

  const displayAlg = isInverted ? invertAlg(algorithm) : algorithm;

  const toggleInversion = () => setIsInverted(prev => !prev);

  const backgroundColor = isInverted ? '#f3df6bff' : '#EEE';

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <View style={styles.algorithmContainer}>
        {displayAlg.split(' ').map((move, index) => {
          let color = 'green';
          if (move.endsWith("'")) color = 'red';
          else if (move.endsWith("2")) color = 'blue';

          return (
            <View key={index} style={styles.moveBox}>
              <Text style={[styles.moveText, { color }]}>{move}</Text>
            </View>
          );
        })}
      </View>
      <TouchableOpacity
        onPress={toggleInversion}
        style={[styles.button, { backgroundColor }]}
      >
        <Text style={styles.buttonText}>🔄</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AlgorithmDisplay;

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    padding: 4,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    flexDirection: 'row',
  },
  algorithmContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 6,
  },
  moveBox: {
    paddingHorizontal: 2,
    paddingVertical: 2,
    margin: 4,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
  },
  moveText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  button: {
    alignSelf: 'flex-start',
    padding: 6,
    borderRadius: 6,
  },
  buttonText: {
    fontSize: 18,
  },
});
