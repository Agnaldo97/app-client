import { combineReducers } from 'redux';

import historic from './historic/reducer';
import hospital from './hospital/reducer';

export default combineReducers({
    historic,
    hospital,
});
