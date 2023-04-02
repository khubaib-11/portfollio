import IcoMoon from "react-icomoon";
import iconSet from "../../../assets/icons/selection.json";

const Icon = (props) => <IcoMoon iconSet={iconSet} style={props.style} className={props.className} {...props} />;

export default Icon;