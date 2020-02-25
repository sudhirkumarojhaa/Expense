import React from 'react';
import {View, Image} from 'react-native';
import styles from '../style/style';

export const Nothing = ({name, title, size, source}) => (
  <View style={[styles.center, styles.nothing]}>
    <Image source={source} style={styles.image} />
  </View>
);
