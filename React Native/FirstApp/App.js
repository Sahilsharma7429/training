import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,TextInput, Button,Alert, Text, View } from 'react-native';
const Separator = () => (
  <View style={styles.separator} />
);

export default function App() {

  return (

    <View style={styles.container}>
      <Text style={styles.text}>First App in working
      </Text>
       <TextInput
        style={styles.input}
        placeholder="useless placeholder"
        keyboardType="default"
      />
      <Button
        title="Press me"
        onPress={() => Alert.alert(input)}
      />
      <Separator/>
         <Button
        title="Press me"
        color="black"
        onPress={() => Alert.alert('Button with adjusted color pressed')}
      />

      <StatusBar style="auto" />
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'red',
  },
   separator: {
    marginVertical: 8,
    borderBottomColor: '#735343',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
