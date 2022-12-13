import GlobalFilter from "../common/GlobalFilterCpt";
import "../styles/Vac.scss";

const Vac = (props: any) => {
  return (
    <>
     <aside
                style={{
                    display: "flex",
                    flexDirection: "row-reverse",
                    gap: "12px",
                    justifyContent: "center"
                }}
            >
                <GlobalFilter onRegionChange={props.handleOnRegionClick} onPopoverToggleChange={props.handleOnPopoverToggleChange} socket={props.socket} />
            </aside>
    <div className="position-svg">
      <img src="/images/vac.png" alt="service" style={{ width: "50%",height:"50%" }} />
    </div>
    </>
  );
};

export default Vac;
