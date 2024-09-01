import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import calender from "../assets/calender.svg"
import member from "../assets/member-svgrepo-com (1).svg"
import dashboardSvg from "../assets/Dashboard.svg"
import { Playlist } from "../DummyData/playlists"

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  playlists: Playlist[]
}

export function Sidebar({ className, playlists }: SidebarProps) {
  return (
    <div className={cn("pb-12", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <div className="space-y-1">
            <Button variant="ghost" className="w-full justify-start flex gap-2">
              <img src={dashboardSvg} alt="" />
              Dashboard
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              Post
            </Button>
            <Button variant="ghost" className="w-full flex justify-start gap-2">
              <img src={calender} alt="" />
              Calendar
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2">
              <div className="flex relative">
              <img src={member} alt="" className="absolute top-1 right-2" />
              <img src={member} alt="" />
              </div>
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