import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from '../style/style';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {colorCode} from '../style/colors';

export const AddButton = ({title, onPress, name}) => (
  <TouchableOpacity
    style={[styles.btn, styles.row, styles.center]}
    onPress={onPress}>
    <Text style={[styles.btnText]}>{title}</Text>
    <Icon name={name} size={16} color={colorCode.white} />
  </TouchableOpacity>
);

export const ListButton = ({title, onPress, name, color}) => (
  <TouchableOpacity onPress={onPress} style={[styles.between, styles.ph]}>
    <Icon name={name} size={24} color={color} />
    <Text style={[styles.date, styles.white]}>{title}</Text>
  </TouchableOpacity>
);

export const FloatButton = ({onPress, name}) => (
  <TouchableOpacity onPress={onPress} style={styles.ph}>
    <Icon name={name} size={14} color={colorCode.white} />
  </TouchableOpacity>
);
