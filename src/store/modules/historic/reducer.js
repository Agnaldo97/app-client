import produce from 'immer';

export default function historic(state = [], action) {
    switch (action.type) {
        case '@historic/ADD_HISTORIC':
            return produce(state, draft => {
                const { historic } = action;

                if (state.length > 0) {
                    draft.splice(1, 0);
                    draft.push(historic);
                    return;
                }
                draft.push(historic);
            });

        default:
            return state;
    }
}
