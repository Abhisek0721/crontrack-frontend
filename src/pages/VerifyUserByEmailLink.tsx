import { useUserVerifyMutation } from "../Redux/feature/authApi";
import { useParams } from "react-router-dom";
import { Spinner } from "../spinner";
import { useEffect, useState } from "react";
import correct from "../assets/correct.png";
import failed from "../assets/delete.png"
import { setIsUserVerified } from "../Redux/util/getUserDetailFromBrowser";


export const VerifyUserByEmailLink = () => {
  const params = useParams();
 
  const [verifyUser, { isLoading }] = useUserVerifyMutation();
  const [isverified, setisverified] = useState<Boolean>();
  const [message, setmessage] = useState<String>("");

  const token = {
    verification_token: `${params.tokenId}`,
  };

  useEffect(() => {
    const verifyUserHandler = async () => {
      const response = await verifyUser(token);
      if (response?.error) {
        setisverified(false);
        setIsUserVerified(false);
        setmessage(response?.error?.data?.message);
      }
      if (response?.data) {
        setisverified(true);
        setIsUserVerified(true);
        setmessage(response?.data?.message); 
      }
    };
    verifyUserHandler();
  }, []);

  return (
    <>
      {isLoading ? <Spinner /> : (  <div className="fixed inset-0 flex justify-center items-center flex-col bg-black bg-opacity-50 z-20">
        <img
        className="w-[120px] animate-pulse"
          src={
            isverified
              ? correct
              : failed
          }
          alt=""
        />

        <div
          className={`mt-10 text-2xl ${
            isverified ? "text-green-800" : "text-red-800"
          }`}
        >{`${message}`}</div>
      </div>)}
    
    </>
  );
};
