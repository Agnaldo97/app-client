import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Main from './pages/Main';
import AudioInformation from './pages/AudioInformation';
import CPF from './pages/CPF';
import RecordAudio from './pages/RecordAudio';
import Hospital from './pages/Hospital';

const Routes = createAppContainer(
    createSwitchNavigator(
        {
            Main,
            AudioInformation,
            CPF,
            RecordAudio,
            Hospital,
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
