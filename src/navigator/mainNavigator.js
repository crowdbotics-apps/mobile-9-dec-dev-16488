import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen215612Navigator from '../features/BlankScreen215612/navigator';
import BlankScreen115611Navigator from '../features/BlankScreen115611/navigator';
import BlankScreen015604Navigator from '../features/BlankScreen015604/navigator';
import BlankScreen015602Navigator from '../features/BlankScreen015602/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen215612: { screen: BlankScreen215612Navigator },
BlankScreen115611: { screen: BlankScreen115611Navigator },
BlankScreen015604: { screen: BlankScreen015604Navigator },
BlankScreen015602: { screen: BlankScreen015602Navigator },

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
