import socialAccounts from "../DummyData/socialAccountData";
import Plus from "../assets/plus.svg";
import Minus from "../assets/minus.svg";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate, useOutletContext } from "react-router-dom";
import toast from "react-hot-toast";
import { useSearchParams } from "react-router-dom";
import { ProgressMessage } from "@/components/progressMessage";
import { useAppSelecter } from "../Redux/Hooks/store";
import { constant } from "../constants";

interface handleWorkSpaceContex {
  handledata: (arg: number) => void;
}

const AddSocialMediaAccounts: React.FC = () => {
  //base url
  const base_url = constant.CONTENT_SERVICE_API_URL;
  console.log("bses url", base_url);
  const navigate = useNavigate();
  const workspaces = useAppSelecter((state) => state?.auth?.user_workspace);
  const [checkStates, setCheckStates] = useState<boolean[]>(
    socialAccounts.map(() => false)
  );

  // taking workspace name from route
  const [searchParams] = useSearchParams();
  const isworkspace = searchParams.get("workspace");
  const workspace = workspaces?.find((workspace) => {
    return workspace?.workspace?.workspace_name === isworkspace;
  });

  const { handledata } = useOutletContext<handleWorkSpaceContex>();

  useEffect(() => {
    handledata(1);
  }, [handledata]);

  //function to connect facebook account
  const handleFacebookConnect = async (isConnect: boolean) => {
    try {
      //connect facebook account
      if (isConnect) {
        console.log("req to connect facebook account");
        const url = `${base_url}/api/v1/social-auth/facebook?workspaceId=${workspace?.workspace?.id}`
        window.location.href = url;
        return;
      }
      //disconnect facebook account
      console.log("req to disconnect facebook");
    } catch (error) {
      console.log(error);
      toast.error(`${error}`, { duration: 3000 });
    }
  };

  //function to connect instagram account
  const handleInstagramConnect = async (isConnect: boolean) => {
    try {
      if(isConnect) {
        //code to connect
        console.log("req to connect instagram account");
        return
      }
      //code to disconnect 
      console.log("req to disconnect instagram account");
    } catch (error) {
      toast.error(`${error}`, {duration: 3000})
    }
  };

  //function to connect twitter account
  const handleTwitterConnect = async (isConnect: boolean) => {
    try {
      if(isConnect){
        //connect account
        console.log("req to connect twitter account");
        return
      }
      //disconnect account
      console.log("req to disconnect twitter account");

    } catch (error) {
      toast.error(`${error}`, {duration: 3000});
    }
  };

  //function to connect linkedin account
  const handleLinkedinConnect = async (isConnect: boolean) => {
    try {
      if(isConnect){
        //code to connect
        console.log("req to connect linkedin account");
        return
      }
      //code to disconnect
      console.log("req to disconnect linkedin account");
    } catch (error) {
      toast.error(`${error}`, {duration: 3000})
    }
  };

  const handleaddAccount = async (index: number) => {
    setCheckStates((prevState) => {
      const newStates = [...prevState];
      newStates[index] = !newStates[index];
      return newStates;
    });

    // call function to connect account
    index === 0 && handleFacebookConnect(!checkStates[index]);
    index === 1 && handleInstagramConnect(!checkStates[index]);
    index === 2 && handleTwitterConnect(!checkStates[index]);
    index === 3 && handleLinkedinConnect(!checkStates[index]);

  };

  const handlePrevious = () => {
    navigate(`/create-workspace-name?update-workspace=${isworkspace}`);
  };

  const handleContinue = () => {
    toast.success("account added");
    navigate("/");
  };

  return (
    <>

      <div className="w-full">
        <ProgressMessage
          message="This page is under construction. Please check back soon"
          className="absolute top-0 left-0"
        />
        <ul className="w-full flex flex-wrap items-center justify-center mb-4  gap-10">
          {socialAccounts.map((account, index) => (
            <li
              key={account.id}
              className="flex flex-col items-center justify-center mx-2 relative bg-gray-500 rounded-full"
            >
              <img
                src={account.icon}
                alt=""
                className="w-[50px] rounded-full"
              />
             <img
                src={checkStates[index] ? Minus : Plus}
                className={`absolute bottom-0 right-0 cursor-pointer hover:scale-105 transition-all duration-300 rounded-full text-white p-1 font-semibold ${
                  checkStates[index] ? "bg-red-500" : "bg-green-500"
                }`}
                onClick={() => handleaddAccount(index)}
              />             
            </li>
          ))}
        </ul>
        <div className="flex justify-between mt-8 sm:mt-10">
          <Button onClick={handlePrevious} className={`bg-secondary`}>
            Previous
          </Button>

          <Button className={`bg-secondary`} onClick={handleContinue}>
            Continue
          </Button>
        </div>
      </div>
    </>
  );
};

export default AddSocialMediaAccounts;
