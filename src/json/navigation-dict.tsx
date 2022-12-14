import { NavigationRoutes } from "../common/NavigationArrowCpt";


export const NavigationArrows: NavigationRoutes = {
    data: {
        "/map": {
            arrowKey: {
                "Up": {
                    "Disabled": true,
                    "NavigateFrom": "",
                    "NavigateTo": ""
                },
                "Down": {
                    "Disabled": false,
                    "NavigateFrom": "",
                    "NavigateTo": "/insights"
                },
                "Right": {
                    "Disabled": false,
                    "NavigateFrom": "",
                    "NavigateTo": "/vac-view"
                },
                "Left": {
                    "Disabled": true,
                    "NavigateFrom": "",
                    "NavigateTo": ""
                }
            }
        },
        "/vac-view": {
            arrowKey: {
                "Up": {
                    "Disabled": true,
                    "NavigateFrom": "",
                    "NavigateTo": ""
                },
                "Down": {
                    "Disabled": false,
                    "NavigateFrom": "",
                    "NavigateTo": "/insights"
                },
                "Right": {
                    "Disabled": true,
                    "NavigateFrom": "",
                    "NavigateTo": ""
                },
                "Left": {
                    "Disabled": false,
                    "NavigateFrom": "",
                    "NavigateTo": "/map"
                }
            }
        },
        "/insights": {
            arrowKey: {
                "Up": {
                    "Disabled": false,
                    "NavigateFrom": "",
                    "NavigateTo": "/map"
                },
                "Down": {
                    "Disabled": true,
                    "NavigateFrom": "",
                    "NavigateTo": ""
                },
                "Right": {
                    "Disabled": true,
                    "NavigateFrom": "",
                    "NavigateTo": ""
                },
                "Left": {
                    "Disabled": true,
                    "NavigateFrom": "",
                    "NavigateTo": ""
                }
            }
        }
    }
};

