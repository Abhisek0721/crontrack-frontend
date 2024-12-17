import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { ProgressMessage } from "@/components/progressMessage";
import { TopNavBar } from "@/components/TopNavBar";

export const AccountSettings = () => {
  const navigate = useNavigate();
  const [activeState, setactiveState] = useState("profile");
  const Tabs = [
    {
      key: "Profile",
      value: "profile",
    },
    {
      key: "Social Accounts",
      value: "social-accounts",
    },
    {
      key: "Billing",
      value: "billing",
    },
    {
      key: "Roles & Permission",
      value: "roles-&-permissions",
    },
    {
      key: "Referral Program",
      value: "referral-program",
    },
    {
      key: "Notification Permission",
      value: "notification-permission",
    },
  ];
  return (
    <>
      <ProgressMessage
        message="This page is under construction. Please check back soon"
        className=""
      />
      <TopNavBar />
      <div className="border flex justify-center">
        {/* <Button
                    variant="ghost"
                    className="ml-4 mt-1"
                    onClick={() => navigate("/")}>
                    <ArrowLeft />
                    </Button> */}

        <div className="relative w-auto flex gap-6">
          {Tabs?.map((tab) => (
            <div key={tab?.value} className="relative">
              <button
                className={`transition-all px-6 py-3 rounded-sm ${
                  activeState === tab?.value
                    ? "text-[#001F3F] font-semibold"
                    : "text-gray-500"
                }`}
                onClick={() => {
                  setactiveState(tab?.value);
                  navigate(`${tab?.value}`);
                }}
              >
                <span className="hidden sm:block">{tab?.key}</span>
              </button>

              {/* Bottom Div for Active State */}
              {activeState === tab?.value && (
                <div className="absolute bottom-0 left-0 w-full h-1 bg-[#001F3F] rounded-t-md"></div>
              )}
            </div>
          ))}
        </div>
      </div>

      <Outlet />
    </>
  );
};
