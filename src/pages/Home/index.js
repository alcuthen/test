
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export function Home() {

  const navigation = useNavigation();

  return (

    <View style={styles.container}>
      <Text>This is Home screen</Text>

      <Button title='Go to' onPress={() => navigation.navigate("About")} />
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
