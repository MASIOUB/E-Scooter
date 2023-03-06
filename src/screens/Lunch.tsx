import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

const backgroundImg = require('../assets/images/scooter8.jpeg');

const Lunch: React.FC = () => {
  const navigation = useNavigation();

  function handlePress() {
    navigation.navigate('Login');
  }

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['rgba(0,0,0,0.4)', 'rgba(0,0,0,0.8)']}
        style={styles.gradient}
      >
        <ImageBackground source={backgroundImg} resizeMode="cover" style={styles.backgroundImage}>
          <View style={styles.contentContainer}>
            <View style={styles.logoContainer}>
              <Text style={styles.logoText}>E-Scooter</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={handlePress}>
              <Text style={styles.buttonText}>Get Start</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  gradient: {
    flex: 1,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  contentContainer: {
    paddingHorizontal: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 50,
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoText: {
    color: '#fb5b5a',
    fontSize: 48,
    fontWeight: 'bold',
    marginTop: 10,
  },
  button: {
    backgroundColor: '#fb5b5a',
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 50,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Lunch;