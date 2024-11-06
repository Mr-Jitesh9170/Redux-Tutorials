import { Provider } from 'react-redux';
import store from './Redux/reduxStore/store';
import { IncreamentCounter } from './counter/countre';


function App() {
  return (
    // we will wrap inside to provider to make store accessable by every pages in main app =>
    <Provider store={store}> 
      <IncreamentCounter />
    </Provider>
  );
}

export default App;
