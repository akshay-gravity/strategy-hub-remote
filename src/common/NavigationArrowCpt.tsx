import { useNavigate } from 'react-router-dom';
import { NavigationArrows } from "../json/navigation-dict"
import { NavigationArrow } from '../modules/MapView';
import RemoteNavigator from '../utils/RemoteNavigator';
import arrowcircleup from "../../public/images/arrowcircleup.svg";
import "../styles/Arrows.scss";

const NavigationArrowCpt = (props: any) => {  
    let navigate = useNavigate();
    let navigationArrow: NavigationArrow = NavigationArrows.data[window.location.pathname as keyof NavigationArrow];

const navigateArrows = (arrowType: string) => {
    navigate(navigationArrow.arrowKey[arrowType].NavigateTo);
}

return (
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
)
}

export default NavigationArrowCpt;