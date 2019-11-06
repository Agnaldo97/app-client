import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

import Main from './pages/Main';
import AudioInformation from './pages/AudioInformation';
import CPF from './pages/CPF';
import Historic from './pages/Historic';
import RecordAudio from './pages/RecordAudio';
import Hospital from './pages/Hospital';
import QRCodePage from './pages/QRCodePage';
import Maps from './pages/Maps';
import ButtonsPage from './pages/ButtonsPage';
import QRCodeScreen from './pages/QRCodeScreen';

const TopNavigation = createMaterialTopTabNavigator(
    {
        secao: { screen: RecordAudio },
        historico: { screen: Historic },
    },
    {
        tabBarPosition: 'top',
        swipeEnabled: true,
        animationEnabled: true,
        tabBarOptions: {
            activeTintColor: '#FFFFFF',
            inactiveTintColor: '#F8F8F8',
            style: {
                backgroundColor: '#281589',
            },
            labelStyle: {
                textAlign: 'center',
            },
            indicatorStyle: {
                borderBottomColor: '#FFFFFF',
                borderBottomWidth: 2,
            },
        },
    }
);

const Routes = createAppContainer(
    createSwitchNavigator(
        {
            Main,
            AudioInformation,
            CPF,
            QRCodeScreen,
            ButtonsPage,
            TopNavigation,
            RecordAudio,
            Hospital,
            Maps,
            QRCodePage
        },
        {
            headerLayoutPreset: 'center',
            headerBackTitleVisible: false,
            defaultNavigationOptions: {
                headerStyle: {
                    backgroundColor: '#281589',
                },
                headerTintColor: '#FFF',
            },
        }
    )
);

export default Routes;
