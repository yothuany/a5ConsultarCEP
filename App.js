import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ConsultaCEP from './components/ConsultarCEP';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ConsultaCEP></ConsultaCEP>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
