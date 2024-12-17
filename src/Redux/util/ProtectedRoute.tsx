import { useAppSelecter } from "../Hooks/store";
import { useNavigate, Outlet } from "react-router-dom";
import { useEffect } from "react";

export const ProtectedRoute = () => {
  const navigate = useNavigate();
  const userData = useAppSelecter((state) => state.auth.user);
  const token = useAppSelecter((state) => state.auth.access_token);
  const isVerified = userData?.verified;
  const isWorkSpace = useAppSelecter((state) => state.auth.user_workspace)

 


  useEffect(() => {
    // guard for missing token or verification status
    if(!token || !isVerified){
      navigate("/login")
      return
    }

    //redirect to create workspace if not created
    if(!isWorkSpace){
      navigate("/create-workspace-name");
    } 

  }, [token, isVerified, isWorkSpace, navigate])
  

  // Return an Outlet for the nested routes if all checks pass
  if (isVerified && token && isWorkSpace) {
    return <Outlet />;
  }
  
  return null;
};
