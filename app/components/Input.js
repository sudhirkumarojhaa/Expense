import React from 'react';
import {TextInput} from 'react-native';
import styles from '../style/style';
import {colorCode} from '../style/colors';

export const Input = ({
  value,
  placeholder,
  onChangeText,
  keyboardType,
  max,
}) => (
  <TextInput
    style={[styles.pv, styles.input]}
    placeholder={placeholder}
    placeholderTextColor={colorCode.text}
    value={value}
    onChangeText={onChangeText}
    underlineColorAndroid="transparent"
    keyboardType={keyboardType}
    autoCorrect
    maxLength={max}
  />
);
