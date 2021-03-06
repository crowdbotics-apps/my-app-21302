import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings134494Navigator from '../features/Settings134494/navigator';
import Settings134477Navigator from '../features/Settings134477/navigator';
import Maps134455Navigator from '../features/Maps134455/navigator';
import Add-Item134454Navigator from '../features/Add-Item134454/navigator';
import Maps134450Navigator from '../features/Maps134450/navigator';
import UserProfile134446Navigator from '../features/UserProfile134446/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings134494: { screen: Settings134494Navigator },
Settings134477: { screen: Settings134477Navigator },
Maps134455: { screen: Maps134455Navigator },
Add-Item134454: { screen: Add-Item134454Navigator },
Maps134450: { screen: Maps134450Navigator },
UserProfile134446: { screen: UserProfile134446Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
