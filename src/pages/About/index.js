import { StyleSheet, Text, View, Button } from 'react-native';
import { useNavegation } from 'react-navegate/navegation';


export function About() {
  const navigation = useNavegation()
  return (
    <View style={styles.container}>
      <Text>This is About screen</Text>
      <View>
        <Button title='Go to Third' onPress={ () => { navigotion = useNavegation('About')}}></Button>
      </View>
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
