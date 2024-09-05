import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { RxDashboard } from "react-icons/rx";
import { CiSignpostDuo1 } from "react-icons/ci";
import { CiCalendar } from "react-icons/ci";
import { PiUsersThreeDuotone } from "react-icons/pi";




export function Sidebar({ className }: { className?: string }) {
  return (
    <div className={cn("pb-12", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <div className="space-y-1">
            <Button variant="ghost" className="w-full justify-start flex gap-2">
            <RxDashboard/>
              Dashboard
            </Button>
            <Button variant="ghost" className="w-full justify-start flex gap-2">
            <CiSignpostDuo1 className="text-[1.01rem]"/>
              Post
            </Button>
            <Button variant="ghost" className="w-full flex justify-start gap-2">
            <CiCalendar className="text-[1.01rem]"/>
              Calendar
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2">
            <PiUsersThreeDuotone className="text-[1.02rem]"/>
              Members            
              </Button>
            <Button variant="ghost" className="w-full justify-start">
              Engagements
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}