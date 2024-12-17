import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { RxDashboard } from "react-icons/rx";
import { PiUsersThreeDuotone } from "react-icons/pi";
import { BiLike } from "react-icons/bi";
import { BsSignpost2 } from "react-icons/bs";
import { MdOutlineCalendarToday } from "react-icons/md";


export const BottomNavbar = ({className}: {className: string}) => {
    return (
        <>
        <div className={cn("",className)}>
        <div className="space-x-4 px-4 fixed bottom-0 w-full border-t">
        <div className="py-3">
          <div className="flex space-y-1">
            <Button variant="ghost" className="w-full justify-start flex gap-2">
            <RxDashboard className="w-full sm:w-fit sm:text-[1rem] text-[1.3rem]"/>
             <span className="hidden sm:block">Dashboard</span> 
            </Button>
            <Button variant="ghost" className="w-full justify-start flex gap-2">
            <BsSignpost2 className="sm:text-[1rem] w-full sm:w-fit text-[1.3rem] "/>
               <span className="hidden sm:block">Post</span>
            </Button>
            <Button variant="ghost" className="w-full flex justify-start gap-2">
            <MdOutlineCalendarToday className="sm:text-[1.01rem] w-full sm:w-fit text-[1.3rem]"/>
            <span className="hidden sm:block">Calendar</span>
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2">
            <PiUsersThreeDuotone className="sm:text-[1.02rem] w-full sm:w-fit text-[1.5rem]"/>
            <span className="hidden sm:block">Members</span>            
              </Button>
            <Button variant="ghost" className="w-full justify-start gap-2">
            <BiLike className="sm:text-[1.02rem] w-full sm:w-fit text-[1.5rem]"/>
            <span className="hidden sm:block">Engagements</span>
            </Button>
          </div>
        </div>
        </div>
        </div>
        </>
    )
}