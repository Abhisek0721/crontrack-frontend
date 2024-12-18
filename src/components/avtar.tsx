import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "./ui/button";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import logOut from "../assets/logout.svg";
import { Pencil2Icon } from "@radix-ui/react-icons";
import { useAppDispatch } from "../Redux/Hooks/store";
import { removeUserInfo } from "../Redux/feature/authSlice";
import { useState } from "react";
import { FiUserPlus } from "react-icons/fi";
import {GearIcon} from "@radix-ui/react-icons";
import { useNavigate } from "react-router-dom";

// All Dialog 
import { InviteMember } from "../modals/inviteMember";
import { ChangePasswordDialog } from "../modals/changePassword";


export const Avtar = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [isdialogshow, setisdialogshow] = useState<boolean>(false);
  const [isChangePasswordDialogShow, setisChangePasswordDialogShow] = useState<boolean>(false)
  return (
    <>
      <div>
        <Popover>
          <PopoverTrigger asChild>
            <Avatar>
              <AvatarImage
                src="https://github.com/shadcn.png"
                className="cursor-pointer"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </PopoverTrigger>

          <PopoverContent className="w-fit">
            <div className="flex flex-col gap-2 justify-start items-start">

            <Button
                variant="ghost"
                className="flex gap-2 w-full justify-start"
                onClick={() => setisdialogshow(!isdialogshow)}
              >
                <FiUserPlus />
                Invite Members
              </Button>

              <Button
                variant="ghost"
                className="flex gap-2 w-full justify-start"
                onClick={() => setisChangePasswordDialogShow(!isChangePasswordDialogShow)}
              >
                <Pencil2Icon />
                Change Password
              </Button>

              <Button
                variant="ghost"
                className="flex gap-2 w-full justify-start"
                onClick={() => navigate("/account/profile")}
              >
                <GearIcon />
                Account Settings
              </Button>

              <Button
                variant="ghost"
                className="flex gap-2 w-full justify-start"
                onClick={() => {
                  dispatch(removeUserInfo());
                }}
              >
                <img src={logOut} alt="" />
                Logout
              </Button>
            </div>
          </PopoverContent>
        </Popover>

        {isdialogshow && <InviteMember isOpen={isdialogshow} setisOpen={setisdialogshow} />}
        {isChangePasswordDialogShow && <ChangePasswordDialog isOpen={isChangePasswordDialogShow} setIsOpen={setisChangePasswordDialogShow}/>}
      </div>
    </>
  );
};
