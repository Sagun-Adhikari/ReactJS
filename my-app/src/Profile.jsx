//app.jsx line no 572

import { useContext } from "react";
import UserContext from "./UserContext";

function Profile() {

    const user = useContext(UserContext);

    return (
        <h1>Hello {user}</h1>
    );
}

export default Profile;