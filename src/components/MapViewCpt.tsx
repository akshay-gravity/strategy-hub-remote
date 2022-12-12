import GlobalFilter from "../common/GlobalFilterCpt";

const MapViewCpt = (props: any) => {
    return (
        <div>
            <aside
                style={{
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px"
                }}
            >
                <GlobalFilter onRegionChange={props.handleOnRegionClick} onPopoverToggleChange={props.handleOnPopoverToggleChange} />
            </aside>
        </div>
    );
};

export default MapViewCpt;
