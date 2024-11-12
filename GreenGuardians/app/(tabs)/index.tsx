import React, { useRef } from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Video } from 'expo-av';

export default function Home() {
  const { width, height } = Dimensions.get('window');
  const videoPlastic = useRef(null);
  const videoNatural = useRef(null);
  
  return (
    <View style={[styles.main, { width: width, height: height }]}>
      <View style={styles.nav}>
        <View style={styles.logo}><TabBarIcon name={'person'} color={'white'} /></View>
        <Text style={styles.txt}>GreenGuardians</Text>
      </View>
      <View style={styles.mainbox}>
        <View style={styles.box1}>
          <View style={styles.subBox}>
            <Text style={styles.boxText}>Plastic waste</Text>
            <Text style={styles.boxText}>600kg</Text>
          </View>
          
          {/* Local Video for plastic waste */}
          <Video
            ref={videoPlastic}
            style={styles.video}
            // source={require('../../assets/videos/Eco.mp4')} 
            useNativeControls
            resizeMode="contain"
            isLooping
          />
        </View>
        
        <View style={styles.box2}>
          <View style={styles.subBox}>
            <Text style={styles.boxText}>Natural waste</Text>
            <Text style={styles.boxText}>200kg</Text>
          </View>

          {/* Local Video for natural waste */}
          <Video
            ref={videoNatural}
            style={styles.video}
            // source={require('../../assets/videos/natural.mp4')}  
            useNativeControls
            resizeMode="contain"
            isLooping
          />
        </View>

        <View style={styles.money}>
          <Text style={[styles.moneyText,{marginBottom:5}]}>Total Money: 7000</Text>
          <Text style={[styles.moneyText,{fontSize:12}]}>Your Share: 5</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  nav: {
    width: '100%',
    height: 80,
    backgroundColor: 'lightgreen',
    borderRadius: 10,
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 20,
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 50,
    borderColor: 'white',
    borderWidth: 2,
    marginLeft: -50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  video: {
    width: 90,
    height: 90,
    borderRadius: 50,
    marginTop: 20,
  },
  mainbox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    gap: 40,
  },
  box1: {
    width: 300,
    height: 200,
    backgroundColor: 'lightblue',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 20,
  },
  box2: {
    width: 300,
    height: 200,
    backgroundColor: 'lightgreen',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 20,
  },
  subBox: {
    flexDirection: 'column',
  },
  boxText: {
    fontSize: 19,
    color: 'white',
    fontWeight: 'bold',
  },
  money: {
    width: 200,
    height: 70,
    backgroundColor: '#50B498',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: -30,
  },
  moneyText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});
