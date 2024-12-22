import { cn } from "@/lib/utils"
import { Button } from "./ui/button";
import { useState } from "react";
import toast from "react-hot-toast";

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
  } from "@/components/ui/alert-dialog";

const DeleteAccountCard = ({className}: React.HTMLAttributes<HTMLElement>) => {
    const [isDialogOpen, setisDialogOpen] = useState<boolean>(false)

    const handleDelete = async() => {
        try {
            setisDialogOpen(false);
            console.log("delete account")
        } catch (error) {
            toast.error(`${error}`, {duration: 5000})
        }
    }
  return (
    <div className={cn("border border-red-500 bg-slate-100 p-4 flex items-center justify-between", className)}>
      <div className="flex items-center space-x-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-red-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 16h-1v-4h-1m1-4h.01M12 22a10 10 0 100-20 10 10 0 000 20z"
          />
        </svg>
        <span className="text-red-500 font-medium">Delete Account</span>
      </div>
      <Button
      variant="destructive"
      onClick={() => setisDialogOpen(true)}
      >
        Delete
      </Button>

      <AlertDialog open={isDialogOpen} onOpenChange={setisDialogOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you Sure</AlertDialogTitle>
          <AlertDialogDescription>
            when you delete your, account you loose your all data.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={() => setisDialogOpen(false)}>
            Cancel
          </AlertDialogCancel>

          {/* Close both AlertDialog and InviteMember Dialog on Continue */}
          <AlertDialogAction
          className="bg-red-600"
            onClick={handleDelete}
          >
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
    </div>
  );
};

export default DeleteAccountCard;
