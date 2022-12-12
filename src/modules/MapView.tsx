import MapViewCpt from "../components/MapViewCpt";
import arrowcircleup from "../../public/images/arrowcircleup.svg";
import Logo from "../../public/images/VFS-logo.svg";
import { NavigationArrows } from "../json/navigation-dict"
import { useEffect, useState } from "react";
import RemoteNavigator from "../utils/RemoteNavigator";
import { useNavigate } from "react-router-dom";

export interface NavigationRoutes {
    data: Record<string, NavigationArrow>
}

export interface NavigationArrow {
    arrowKey: Record<string, NavigationArrowProps>
}

export interface NavigationArrowProps {
    Disabled: boolean;
    NavigateFrom: string;
    NavigateTo: string;
}

const MapView = (props: any) => {

    let navigate = useNavigate();
    let navigationArrow: NavigationArrow = NavigationArrows.data[window.location.pathname as keyof NavigationArrow];
    useEffect(() => {
        // navigationArrow = 
    }, [])

    const [isArrowDisabled, setArrowDisabled] = useState(false)
    const handleOnRegionClick = (region: any) => {
        props.socket.emit("locate-region", region);
    }
    const handleOnPopoverToggleChange = (status: boolean) => {
        props.socket.emit("toggle-change", status);
    }

    const navigateArrows = (arrowType: string) => {

        const url = RemoteNavigator(navigationArrow.arrowKey[arrowType].NavigateTo);
        navigate(url);
    }

    return (
        <>
            <div className="home-header text-center">
                <img alt="Logo" className="logo" src={Logo} />
                <h1 className="vfs-title mb-0">VFS INSIGHT</h1>
            </div>
            <MapViewCpt handleOnRegionClick={handleOnRegionClick} handleOnPopoverToggleChange={handleOnPopoverToggleChange}></MapViewCpt>
            <div className="arrows">
                <div className="arrowcircleup">
                    <img aria-disabled={navigationArrow.arrowKey['Up'].Disabled} alt="Logo" src={arrowcircleup} onClick={() => navigateArrows("Up")} />
                </div>
                <div className="arrowcircleleft">
                    <img aria-disabled={navigationArrow.arrowKey['Left'].Disabled} alt="Logo" src={arrowcircleup} onClick={() => navigateArrows("Left")} />
                </div>
                <div className="arrowcircleright">
                    <img alt="Logo" aria-disabled={navigationArrow.arrowKey['Right'].Disabled} src={arrowcircleup} onClick={() => navigateArrows("Right")} />
                </div>
                <div className="arrowcircledown">
                    <img alt="Logo" aria-disabled={navigationArrow.arrowKey['Down'].Disabled} src={arrowcircleup} onClick={() => navigateArrows("Down")} />
                </div>
            </div>
        </>
    );
};

export default MapView;
