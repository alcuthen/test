import { StyleSheet, Text, View, Button } from 'react-native';
import { useNavegation } from '@react-navegation/navigate'

export function Third() {

  const navegation = useNavegation();

  return (
    <View style={styles.container}>
      <Text>This is Third Page</Text>
      <View>
        <Button title='Go to About' onPress={() => navegation.navegation('About')}></Button>
        <Button title='Go to Home' onPress={() => navegation.goBack()}> </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
