import produce from 'immer';

export default function hospital(state = [], action) {
    switch (action.type) {
        case '@hospital/ADD_HOSPITAL':
            return produce(state, draft => {
                const { hospital } = action;

                if (state.length > 0) {
                    draft.splice(1, 0);
                    draft.push(hospital);
                    return;
                }
                draft.push(hospital);
            });

        default:
            return state;
    }
}
