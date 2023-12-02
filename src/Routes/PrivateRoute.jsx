import { useContext } from "react";
import { AuthContext } from "../AuthProvider/authProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {

    const { user,loading } = useContext(AuthContext);

    if(loading){
        return '';
    }

    if(user){
        return children;
    }
    return (
        <Navigate to="/SignIn"></Navigate>
    );
};

export default PrivateRoute;