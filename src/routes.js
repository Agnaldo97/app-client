import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Main from './pages/Main';
import AudioInformation from './pages/AudioInformation';
import CPF from './pages/CPF';
import RecordAudio from './pages/RecordAudio';
import Hospital from './pages/Hospital';
import Maps from './pages/Maps';

const Routes = createAppContainer(
    createSwitchNavigator(
        {
            Main,
            AudioInformation,
            CPF,
            RecordAudio,
            Hospital,
            Maps,
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
