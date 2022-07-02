import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import { UnicornView } from 'react-native-unicorn';

export default function App() {
  return (
    <View style={styles.container}>
      <UnicornView color="#92a852" style={styles.box} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    marginTop: 100,
    width: 200,
    height: 200,
    marginVertical: 20,
  },
});
