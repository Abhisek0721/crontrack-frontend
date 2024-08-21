import { useAppSelecter } from "../Redux/Hooks/store"
import { useNavigate,Outlet } from "react-router-dom"
import { useEffect } from "react";

export const ProtectedRoute = () => {
    const navigate = useNavigate();
    const userData = useAppSelecter((state) => state.auth.user)
    const token = userData?.access_token;
    const isVerified = userData?.user?.verified;
    const isWorkSpace = userData?.user_workspace

   const handleOutlet = () => {
    return <Outlet />
    }

    useEffect(() => {
      if(isVerified) {
        if(token) {
            isWorkSpace ? (handleOutlet()) : (navigate("/createworkspaceflow"));
            return
        }
        return navigate('/login');
    }
   return navigate("/signup");
    }, [])
    
    return(
        <>
        </>
    )


}