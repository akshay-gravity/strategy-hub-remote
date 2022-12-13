import MapViewCpt from "../components/MapViewCpt";
import Logo from "../../public/images/VFS-logo.svg";
import { useEffect, useState } from "react";

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
    useEffect(() => {
        // navigationArrow = 
    }, [])

    const handleOnRegionClick = (region: any) => {
        props.socket.emit("locate-region", region);
    }
    const handleOnPopoverToggleChange = (status: boolean) => {
        props.socket.emit("toggle-change", status);
    }

    return (
        <>
            <div className="home-header text-center">
                <img alt="Logo" className="logo" src={Logo} />
                <h1 className="vfs-title mb-0">VFS INSIGHT</h1>
            </div>
            <MapViewCpt socket = {props.socket} handleOnRegionClick={handleOnRegionClick} handleOnPopoverToggleChange={handleOnPopoverToggleChange}></MapViewCpt>
    
        </>
    );
};

export default MapView;
