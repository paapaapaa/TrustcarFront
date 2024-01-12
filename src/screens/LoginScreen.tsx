import React from 'react';
import {ScrollView, Text, StyleSheet} from 'react-native';
import {useTranslation} from 'react-i18next';

import {APP_NAME} from '../common/constanst';
import {colors} from '../common/styles';

const LoginScreen: React.FC = () => {
  const {t} = useTranslation();
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.text}>{APP_NAME}</Text>
      <Text style={styles.text}>{t('login')}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  text: {
    color: colors.orange,
    fontSize: 18,
  },
});

export default LoginScreen;
