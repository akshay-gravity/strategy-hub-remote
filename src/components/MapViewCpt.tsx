import GlobalFilter from "../common/GlobalFilterCpt";
import "../styles/Vac.scss";

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
            <div className="position-svg">
      <img src="/images/map-view.svg" alt="service" style={{ width: "100%",height:"100%" }} />
    </div>
        </div>
    );
};

export default MapViewCpt;
