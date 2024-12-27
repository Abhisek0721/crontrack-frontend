import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { RxDashboard } from "react-icons/rx";
import { PiUsersThreeDuotone } from "react-icons/pi";
import { BiLike } from "react-icons/bi";
import { BsSignpost2 } from "react-icons/bs";
import { MdOutlineCalendarToday } from "react-icons/md";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Sidebar({ className }: { className?: string }) {
  const [activeState, setActiveState] = useState<string>("");
  const navigate = useNavigate();

  const sidebarOptions = [
    { id: "", label: "Dashboard", icon: RxDashboard },
    { id: "post", label: "Post", icon: BsSignpost2 },
    { id: "calendar", label: "Calendar", icon: MdOutlineCalendarToday },
    { id: "members", label: "Members", icon: PiUsersThreeDuotone },
    { id: "engagements", label: "Engagements", icon: BiLike },
  ];

  return (
    <div className={cn("pb-12 min-h-full", className)}>
      <div className="space-y-4 py-4 h-full">
        <div className="px-3 py-2">
          <div className="space-y-1">
            {sidebarOptions.map((item) => (
              <div key={item.id} className="relative w-full" onClick={() => navigate(`${item?.id}`)}>
                <Button
                  variant="ghost"
                  className={`w-full justify-start flex gap-2 ${
                    activeState === item.id ? "text-[#001F3F] font-semibold border-2 border-solid" : "text-gray-600"
                  }`}
                  onClick={() => setActiveState(item.id)}
                >
                  <item.icon
                    className={`text-[1.1rem] ${
                      activeState === item.id ? "text-[#001F3F]" : "text-gray-600"
                    }`}
                  />
                  <span>{item.label}</span>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
