export function addToHistoricRequest(historic) {
    return {
        type: '@historic/ADD_HISTORIC',
        historic,
    };
}
