import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Alert, Image } from 'react-native';


export default function App() {

  const [quote, setQuote] = useState({})
  const [hasError, setErrors] = useState(false);

  useEffect(() => {
  async function fetchQuote (){
    const res = await fetch("https://api.whatdoestrumpthink.com/api/v1/quotes/random");
    res
      .json()
      .then(res => setQuote(res.message))
      .catch(err => setErrors(err));
  }
    fetchQuote();
  });
 
  const quoteAlert = () => {
    Alert.alert(JSON.stringify(quote))
  }
  

  return (
    <View style={styles.container}>
      <Image source={require('./assets/trump.jpg')} style={styles.image} />
      <Text style={styles.header}>So Donald, tell me how you {'\n'} really feel...</Text>
      <TouchableHighlight style={styles.button} onPress={quoteAlert}>
        <Text style={styles.buttonText}> Press here for an inspirational Trump quote </Text>
      </TouchableHighlight>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    marginBottom: 50,
    fontSize: 20,
    fontWeight: "bold"
  },
  button: {
    backgroundColor: '#E29F2D',
    padding: 10, 
    alignItems: "center",
    borderRadius: 15,
    marginBottom: 80
  },
  image: {
    marginBottom: 10,
    height: "50%",
    width: "60%"
  }

});