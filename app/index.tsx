import { Provider } from 'react-redux';
import HomePage from './HomePage';
import { store } from '@/store/store';

const App = () => {
  return (
    <Provider store={store}>
      <HomePage />
    </Provider>
  );
};

export default App;
