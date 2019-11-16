import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

// import {Auth as AuthScreen} from './pages/Auth';
import Calendar from './pages/Calendar';

const MainNavigator = createStackNavigator({
  Calendar: {screen: Calendar},
});

const Routes = createAppContainer(MainNavigator);

export default Routes;
