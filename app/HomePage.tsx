import { decrement, increment, reset } from '@/store/slices/sampleSlice';
import { RootState } from '@/store/store';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

const HomePage = () => {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.sample.count);
  const decrementAction = () => {
    dispatch(decrement());
  };
  const incrementAction = () => {
    dispatch(increment());
  };
  const resetAction = () => {
    dispatch(reset());
  };
  return (
    <View style={styles.container}>
      <Text style={[styles.textCenter, { marginVertical: 10, marginHorizontal: 50 }]}>
        Hello, This is a boilerplate with Zustand as State Management and Expo Router
      </Text>

      <Text style={styles.textCenter}>Test the zustand count state: {count}</Text>

      <View style={styles.buttonView}>
        <TouchableOpacity
          onPress={() => {
            decrementAction();
          }}
          style={[styles.buttonStyle, { backgroundColor: 'red' }]}
        >
          <Text style={{ color: 'white' }}>Decrement</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            incrementAction();
          }}
          style={[styles.buttonStyle, { backgroundColor: 'blue' }]}
        >
          <Text style={{ color: 'white' }}>Increment</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            resetAction();
          }}
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
