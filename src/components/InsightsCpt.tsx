import GlobalFilter from "../common/GlobalFilterCpt";

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
            
    </>
  );
};

export default Vac;