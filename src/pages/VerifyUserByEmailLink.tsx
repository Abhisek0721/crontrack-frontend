import { useUserVerifyMutation } from "../Redux/feature/authApi";
import { useParams } from "react-router-dom";
import { Spinner } from "../spinner";
import { useEffect, useState, useMemo } from "react";
import correct from "../assets/correct.png";
import failed from "../assets/delete.png";
import { useNavigate } from "react-router-dom";
import Confetti from 'react-confetti'


export const VerifyUserByEmailLink = () => {
  const params = useParams();
  const navigate = useNavigate();


  const [verifyUser, { isLoading }] = useUserVerifyMutation();
  const [isverified, setisverified] = useState<boolean | null>(null);
  const [message, setmessage] = useState<string>("");

  const token = useMemo(() => ({
    verification_token: `${params.tokenId}`,
  }), [params.tokenId]);

  useEffect(() => {
    const verifyUserHandler = async () => {
      try {
        const response: any = await verifyUser(token);
        if (response?.error) {
          setisverified(false);
          setmessage(response?.error?.data?.message);
        } else if (response?.data) {
          setisverified(true);
          setmessage(response?.data?.message);
          setTimeout(() => {
            navigate("/login");
          }, 5000);
        }
      } catch (err) {
        setisverified(false);
        setmessage("Something went wrong");
      }
    };

    verifyUserHandler();
  }, [token, verifyUser, navigate]);

  return (
    <>
      {isLoading && <Spinner />}
      <div className="fixed inset-0 flex justify-center items-center flex-col bg-black bg-opacity-50 z-20">
        {isverified !== null && (
          <img
            className="w-[120px] animate-pulse"
            src={isverified ? correct : failed}
            alt={isverified ? "Verified" : "Failed"}
          />
        )}

        <div
          className={`mt-10 text-2xl ${
            isverified === true ? "text-green-800" : "text-red-800"
          }`}
        >
          {message}
        </div>

        {isverified && (
            <Confetti 
            width={window.innerWidth}
            height={window.innerHeight} 
            recycle={true}
            />)}

        

      </div>
    </>
  );
};
