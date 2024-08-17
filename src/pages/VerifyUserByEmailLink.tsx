import { useUserVerifyMutation } from "../Redux/feature/authApi";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { Spinner } from "../spinner";
import { useEffect, useState } from "react";
import verificationSuccess from "../assets/verificationSuccess.svg";
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
      console.log(response);
      if (response?.error) {
        setisverified(false);
        setmessage(response?.error?.data?.message);
      }
      if (response?.data) {
        setisverified(true);
        setmessage(response?.data?.message);
      }
    };
    verifyUserHandler();
  }, []);

  return (
    <>
      {isLoading && <Spinner />}
      <div className="fixed inset-0 flex justify-center items-center flex-col bg-black bg-opacity-50 z-20">
        <img
          src={
            isverified
              ? verificationSuccess
              : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgY6bZ4w9Lhugtn1bOnhq8P7cvovowVDW-rg&s"
          }
          alt=""
        />

        <div
          className={`mt-10 text-2xl ${
            isverified ? "text-green-800" : "text-red-800"
          }`}
        >{`${message}`}</div>
      </div>
    </>
  );
};
