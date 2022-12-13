import GlobalFilter from "../common/GlobalFilterCpt";

const MapViewCpt = (props: any) => {
    return (
        <div>
            <aside
                style={{
                    display: "flex",
                    flexDirection: "row-reverse",
                    gap: "12px",
                    justifyContent: "center"
                }}
            >
                <GlobalFilter socket={props.socket} onRegionChange={props.handleOnRegionClick} onPopoverToggleChange={props.handleOnPopoverToggleChange} />
            </aside>
        </div>
    );
};

export default MapViewCpt;
