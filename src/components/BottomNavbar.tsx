import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { RxDashboard } from "react-icons/rx";
import { PiUsersThreeDuotone } from "react-icons/pi";
import { BiLike } from "react-icons/bi";
import { BsSignpost2 } from "react-icons/bs";
import { MdOutlineCalendarToday } from "react-icons/md";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const BottomNavbar = ({ className }: { className: string }) => {
  const [activeState, setActiveState] = useState<string>("");
  const navigate = useNavigate();

   // Initialize `activeState` from sessionStorage
   useEffect(() => {
    const storedState = sessionStorage.getItem("activeState");
    if (storedState) {
      setActiveState(JSON.parse(storedState));
    }
  }, []);

  // Update `sessionStorage` whenever `activeState` changes
  useEffect(() => {
    sessionStorage.setItem("activeState", JSON.stringify(activeState));
  }, [activeState])

  // Array of menu options
  const menuOptions = [
    { id: "", label: "Dashboard", icon: RxDashboard },
    { id: "post", label: "Post", icon: BsSignpost2 },
    { id: "calendar", label: "Calendar", icon: MdOutlineCalendarToday },
    { id: "members", label: "Members", icon: PiUsersThreeDuotone },
    { id: "engagements", label: "Engagements", icon: BiLike },
  ];

  return (
    <>
      <div className={cn("", className)}>
        <div className="space-x-4 px-4 fixed bottom-0 w-full border-t bg-white">
          <div className="py-3">
            <div className="flex space-y-1">
              {menuOptions.map((item) => (
                <div key={item.id} className="relative w-full" onClick={() =>navigate(`${item?.id}`)}>
                  <Button
                    variant="ghost"
                    className="w-full justify-start flex gap-2"
                    onClick={() =>
                      setActiveState(item.id)
                    }
                  >
                    <item.icon
                      className={`sm:text-[1rem] w-full sm:w-fit ${
                        activeState === item.id
                          ? "text-[#001F3F]" // Highlight icon when active
                          : "text-gray-600"
                      } text-[1.3rem]`}
                    />
                    <span
                      className={`hidden sm:block ${
                        activeState === item.id ? "text-[#001F3F]" : "text-gray-600"
                      }`}
                    >
                      {item.label}
                    </span>
                  </Button>
                  {/* Bottom bar when active */}
                  {activeState === item.id && (
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-[#001F3F] rounded-t-md"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
