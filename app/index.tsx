import { Link, router } from 'expo-router';
import { View, Text, Pressable, StyleSheet, TouchableOpacity } from 'react-native';
import { useSampleStore } from '@/store/sampleStore';

const HomePage = () => {
  const count = useSampleStore((state) => state.count);
  const increment = useSampleStore((state) => state.increment);
  const decrement = useSampleStore((state) => state.decrement);

  const reset = useSampleStore((state) => state.reset);
  return (
    <View style={styles.container}>
      <Text style={[styles.textCenter, { marginVertical: 10, marginHorizontal: 50 }]}>
        Hello, This is a boilerplate with Zustand as State Management and Expo Router
      </Text>

      <Text style={styles.textCenter}>Test the zustand count state: {count}</Text>

      <View style={styles.buttonView}>
        <TouchableOpacity
          onPress={decrement}
          style={[styles.buttonStyle, { backgroundColor: 'red' }]}
        >
          <Text style={{ color: 'white' }}>Decrement</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={increment}
          style={[styles.buttonStyle, { backgroundColor: 'blue' }]}
        >
          <Text style={{ color: 'white' }}>Increment</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={reset}
          style={[styles.buttonStyle, { backgroundColor: 'yellow' }]}
        >
          <Text>Reset</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textCenter: {
    textAlign: 'center',
  },
  buttonView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  buttonStyle: {
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
});
