import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

export function Title({ children }) {
  return <Text style={styles.container}>{children}</Text>;
}
