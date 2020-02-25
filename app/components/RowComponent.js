import React from 'react';
import {View, Text} from 'react-native';
import styles from '../style/style';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const RowTitle = ({name, title, color, iconColor}) => (
  <View style={[styles.row, styles.start]}>
    <Icon name={name} size={20} color={iconColor} />
    <Text style={[styles.text, color]}> {title}</Text>
  </View>
);
