import React, { useEffect, useRef } from 'react';
import { View, Text, Dimensions, StyleSheet, Animated, Easing, SafeAreaView, ScrollView } from 'react-native';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { LineChart } from 'react-native-chart-kit';

export default function TabTwoScreen() {
  const { width, height } = Dimensions.get('window');
  
  const scaleAnim = useRef(new Animated.Value(1)).current; 

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(scaleAnim, {
          toValue: 1.5, 
          duration: 1000,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,  
        }),
        Animated.timing(scaleAnim, {
          toValue: 1, 
          duration: 1000,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true, 
        }),
      ]),
    ).start();
  }, [scaleAnim]);

  const data = {
    labels: ["1", "2", "3", "4", "5", "6", "7"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43, 26]
      }
    ]
  };

  const chartConfig = {
    backgroundGradientFrom: "#F0F8FF", 
    backgroundGradientFromOpacity: 1, 
    backgroundGradientTo: "#F0F8FF", 
    backgroundGradientToOpacity: 1, 
    color: (opacity = 1) => `rgba(${255 * (1 - opacity)}, ${0}, ${255 * opacity}, ${opacity})`, 
    strokeWidth: 2, 
    barPercentage: 0.5,
    useShadowColorFromDataset: false 
  };

  return (
    <View style={[styles.main, { width: width * 1, height: height * 1 }]}>
      {/* Navigation */}
      <View style={styles.nav}>
        <View style={styles.logo}>
          <TabBarIcon name="person" color={'white'} />
        </View>
        <Text style={styles.txt}>GreenGuardians</Text>
      </View>
      <ScrollView>
        {/* Main Content */}
        <View style={styles.mainbox}>
          {/* 1st Box - PYROLYSIS */}
          <View style={styles.box1}>
            <Text style={styles.boxText}>PYROLYSIS</Text>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.boxSub}>
                <View style={styles.line}>
                  {/* 1st step */}
                  <View style={{flexDirection: 'row'}}>
                    <Animated.View style={[styles.dot, { transform: [{ scale: scaleAnim }], marginLeft: -5 }]}>
                      <TabBarIcon name="checkmark" color={'white'} size={20} />
                    </Animated.View>
                    <Text style={styles.lineTxt}>Received</Text>
                  </View>
                  <View style={styles.separator}></View>
                  
                  {/* 2nd step */}
                  <View style={{flexDirection: 'row'}}>
                    <Animated.View style={[styles.dot, { transform: [{ scale: scaleAnim }], marginLeft: 5 }]}>
                      <TabBarIcon name="checkmark" color={'white'} size={20} />
                    </Animated.View>
                    <Text style={styles.lineTxt}>Processing</Text>
                  </View>
                  <View style={styles.separator}></View>

                  {/* 3rd step */}
                  <View style={{flexDirection: 'row'}}>
                    <Animated.View style={[styles.dot, { transform: [{ scale: scaleAnim }], marginLeft: -5 }]}>
                      <TabBarIcon name="checkmark" color={'white'} size={20} />
                    </Animated.View>
                    <Text style={styles.lineTxt}>Filtration</Text>
                  </View>
                  <View style={styles.separator}></View>

                  {/* 4th step */}
                  <View style={{flexDirection: 'row'}}>
                    <Animated.View style={[styles.dot, { transform: [{ scale: scaleAnim }], marginLeft: 5 }]}>
                      <TabBarIcon name="checkmark" color={'white'} size={20} />
                    </Animated.View>
                    <Text style={styles.lineTxt}>Generated</Text>
                  </View>
                  <View style={styles.separator}></View>

                  {/* 5th step */}
                  <View style={{flexDirection: 'row'}}>
                    <Animated.View style={[styles.dot, { transform: [{ scale: scaleAnim }],marginLeft:5 }]}>
                      <TabBarIcon name="checkmark" color={'white'} size={20} />
                    </Animated.View>
                    <Text style={styles.lineTxt}>Dispatched</Text>
                  </View>

                </View>
              </View>
              <SafeAreaView style={styles.bar}>
                <LineChart 
                  data={data}
                  width={200}
                  height={200}
                  chartConfig={chartConfig}
                />
              </SafeAreaView>
            </View>
          </View>

          {/* 2nd Box - BSLF */}
          <View style={styles.box2}>
            <Text style={styles.boxText}>BSLF</Text>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.boxSub}>
                <View style={styles.line}>
                  <View style={{flexDirection: 'row'}}>
                    <Animated.View style={[styles.dot, { transform: [{ scale: scaleAnim }] }]}>
                      <TabBarIcon name="checkmark" color={'white'} size={20} />
                    </Animated.View>
                    <Text style={styles.lineTxt}>Received</Text>
                  </View>
                  <View style={styles.separator}></View>

                  {/* 2nd step */}
                  <View style={{flexDirection: 'row'}}>
                    <Animated.View style={[styles.dot, { transform: [{ scale: scaleAnim }],marginLeft:10 }]}>
                      <TabBarIcon name="checkmark" color={'white'} size={20} />
                    </Animated.View>
                    <Text style={styles.lineTxt}>Composting</Text>
                  </View>
                  <View style={styles.separator}></View>

                  {/* 3rd step */}
                  <View style={{flexDirection: 'row'}}>
                    <Animated.View style={[styles.dot, { transform: [{ scale: scaleAnim }],marginLeft:-9 }]}>
                      <TabBarIcon name="checkmark" color={'white'} size={20} />
                    </Animated.View>
                    <Text style={styles.lineTxt}>Manure</Text>
                  </View>
                </View>
              </View>
              <SafeAreaView style={styles.bar}>
                <LineChart 
                  data={data}
                  width={190}
                  height={200}
                  chartConfig={chartConfig}
                />
              </SafeAreaView>
            </View>
          </View>

          {/* Last row - PYRO and BSFL */}
          <View style={[styles.box2, { flexDirection: 'row' }]}>
            <View style={styles.lastBox1}>
              <Text style={{fontSize: 25, color: 'lightgreen', fontWeight: 'bold', textAlign: 'center'}}>Pyro</Text>
              <Text style={{marginLeft: 50, fontSize: 20, fontWeight: 'bold', marginTop: 20}}>12 liters</Text>
            </View>
            <View style={[styles.lastBox1, {borderRightWidth: 0}]}>
              <Text style={{fontSize: 25, color: 'lightgreen', fontWeight: 'bold', textAlign: 'center'}}>BSFL</Text>
              <Text style={{marginLeft: 50, fontSize: 20, fontWeight: 'bold', marginTop: 20}}>12kg</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  main: {
    backgroundColor: '#f0f0f0',
    flex: 1,
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
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  separator: {
    width: 3,
    height: 30,
    backgroundColor: 'lightgreen',
    marginLeft: -100,
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 50,
    borderColor: 'white',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: -50
  },
  txt: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  mainbox: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 20,
  },
  box1: {
    width: '90%',
    backgroundColor: 'aliceblue',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
    marginTop: 20,
  },
  box2: {
    width: '90%',
    backgroundColor: 'aliceblue',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
    marginBottom: 20,
  },
  boxText: {
    fontSize: 30,
    color: 'lightgreen',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  boxSub: {
    justifyContent: 'flex-start',
  },
  line: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  dot: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: 'lightgreen',
    alignContent: 'center',
     
  },
  lineTxt: {
    fontSize: 18,
    color: 'black',
    marginLeft: 20,
  },
  bar: {
    width: 200,
    height: 200,
  },
  lastBox1: {
    width: '50%',
    height: 100,
    borderRightWidth: 1,
    borderRightColor: 'lightgray',
  }
});