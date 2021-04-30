import * as React from 'react';
import { SafeAreaView, StyleSheet, Text, View, StatusBar } from 'react-native';

function Home({navigation}){
    return(
      <SafeAreaView style={styles.container}>
        <StatusBar
          animated={true}
          backgroundColor="#61dafb"
        />
          <View style = {{flex: 1, alignItems: 'center',justifyContent: 'center'}}>
            <Text>Tela Principal</Text>
          </View>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
   
  });

export default Home