import React, {useEffect} from "react";

const cockpit = props => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        const timer = setTimeout(() => {
            alert("cockpit useEffect");
        }, 1000);
    },[]);
    alert("rendering cockpit")
    return <p>Cockpit</p>
}
export default React.memo(cockpit)