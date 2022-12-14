

export const fetchRegionThemes = () => {
    return fetch('https://insighthub-dev-backend.azurewebsites.net/view/getViewDetails?elementType=controls&entity=[%22Region%22,%22Themes%22]', {
        method: 'GET'
    }).then(res => res.json())
        .catch(ex => {
            console.log('Error Desc', ex);
            return ({ ex });
        });
}

export const fetchMissions = () => {
    return fetch('https://insighthub-dev-backend.azurewebsites.net/view/getMapViewDetails?elementType=controls&entity=[%22Missions%22]', {
        method: 'GET'
    }).then(res => res.json())
        .catch(ex => {
            console.log('Error Desc', ex);
            return ({ ex });
        });
}