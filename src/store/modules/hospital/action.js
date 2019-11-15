export function addToHistoricRequest(hospital) {
    return {
        type: '@hospital/ADD_HOSPITAL',
        hospital,
    };
}
