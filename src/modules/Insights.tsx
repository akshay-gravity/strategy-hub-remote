
import Logo from "../../public/images/VFS-logo.svg";
import { useEffect } from "react";
import InsightsCpt from "../components/InsightsCpt";

const Insights = (props: any) => {
    useEffect(() => {
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
            <InsightsCpt socket = {props.socket} handleOnRegionClick={handleOnRegionClick} handleOnPopoverToggleChange={handleOnPopoverToggleChange}></InsightsCpt>
    
        </>
    );
};

export default Insights;