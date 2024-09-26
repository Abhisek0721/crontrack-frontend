import { useParams } from "react-router-dom";
import { useState, useEffect, useMemo } from "react";
import { useAcceptInvitationInWorkspaceMutation } from "../Redux/feature/creatinigWorkSpaceFlowApi";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Spinner } from "../spinner";
import correct from "../assets/correct.png";
import failed from "../assets/delete.png";

export const AcceptInvitation = () => {
  const [isverified, setisverified] = useState<boolean | null>(null);
  const [message, setmessage] = useState<string>("");
  const params = useParams();
  const [acceptfn, { isLoading }] = useAcceptInvitationInWorkspaceMutation();
  
  const navigate = useNavigate();

  const token = useMemo(
    () => ({
      verification_token: `${params.invitationToken}`,
    }),
    [params.invitationToken]
  );

  useEffect(() => {
    const acceptInvitationHandler = async () => {
      try {
        const response: any = await acceptfn(token);
        if (response?.error) {
          setisverified(false);
          setmessage(response?.error?.data?.message);
          toast.error(`${response?.error?.data?.message}`, { duration: 4000 });
        }
        if (response?.data) {
          setisverified(true);
          setmessage(response?.data?.message);
          toast.success(`${response?.data?.message}`, { duration: 4000 });
        }
        setTimeout(() => {
          navigate("/");
        }, 4000);
      } catch (error) {
        setisverified(false);
        setmessage("Something went wrong");
        toast.error(`${error}`);
      }
    };
    acceptInvitationHandler();
  }, [token, navigate, acceptfn]);

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
      </div>
    </>
  );
};
