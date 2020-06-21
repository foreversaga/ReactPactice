import React, {useEffect, useRef} from "react";
import AuthContext from "../context/auth-context"

const cockpit = props => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const toggleBtnRef = useRef(null);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        // setTimeout(() => {
        //     console.log("cockpit useEffect");
        // }, 1000);
        toggleBtnRef.current.click();
    }, []);
    console.log("rendering cockpit");
    return <><p>Cockpit</p>
        <button onClick={props.onClick} ref={toggleBtnRef}>show people</button>
        <AuthContext.Consumer>
            {(context) => <button onClick={context.login}>Login</button>}
        </AuthContext.Consumer>
    </>
}
export default React.memo(cockpit)