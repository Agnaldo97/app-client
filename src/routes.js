import { createAppContainer, createSwitchNavigator } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import AudioInformation from './pages/AudioInformation';
import CPF from './pages/CPF';
import RecordAudio from './pages/RecordAudio';
import Hospital from './pages/Hospital';

const Routes = createAppContainer(
    createSwitchNavigator(
        {
            Hospital,
            Main,
            AudioInformation,
            CPF,
            RecordAudio,
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
