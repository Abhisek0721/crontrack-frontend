import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import inviteMember from "../assets/noun-user-management-5660550.svg"
import { useState } from "react"
import {z} from "zod"

const formSchema = z.object({
  members_to_invite: z.string().email({ 
    message: "Invalied Email",
  })
})


export const SendInvitationEmail = () =>  {

  return (
    <>
    <Dialog>

      <DialogTrigger asChild>
        <Button className="flex gap-1">
        <img src={inviteMember} className="mt-1" alt="" />
          Invite
        </Button>
        </DialogTrigger>


      <DialogContent className="sm:max-w-[425px]">

        {/*header of dialog */}
        <DialogHeader>
          <DialogTitle>Invite people to this workspace</DialogTitle>
          {/* <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription> */}
        </DialogHeader>

        {/* main content of dialog */}




        {/* footer of dialog */}
        <DialogFooter>
          <Button type="submit" className="w-full">
            Save changes
            </Button>
        </DialogFooter>
      </DialogContent>

    </Dialog>
    </>
  
  )
}
