import { Separator } from "@/components/ui/separator";
import { TopNavBar } from "../components/TopNavBar";
import { Sidebar } from "../components/Sidebar";
import { BottomNavbar } from "../components/BottomNavbar";
import { useGetallworkspaceQuery } from "../Redux/feature/creatinigWorkSpaceFlowApi";
import { useAppDispatch } from "../Redux/Hooks/store";
import { setUserWorkspace } from "../Redux/feature/authSlice";
import { useEffect } from "react";
import { ProgressMessage } from "@/components/progressMessage";
import { Outlet } from "react-router-dom";

export default function Dashboard() {
  const { data, isLoading, refetch } = useGetallworkspaceQuery(undefined);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!isLoading && data?.data) {
      dispatch(setUserWorkspace({ user_workspace: data.data }));
      localStorage.setItem("user_workspace", JSON.stringify(data.data));
    }
  }, [isLoading, data, dispatch]);

  useEffect(() => {
    refetch();
  }, [refetch]);

  return (
    <>
     <div className="h-screen flex flex-col">
        <ProgressMessage
          message="This page is under construction. Please check back soon"
          className=""
        />
        <TopNavBar />

        <Separator orientation="horizontal" className="w-full" />

        <div className="flex flex-1 bg-background">
          <Sidebar className="hidden lg:block h-full w-96" />
          <Separator orientation="vertical" className="hidden lg:block h-full" />
          <div className="flex-grow p-4 w-full">
            <Outlet />
          </div>
        </div>

        <BottomNavbar className="block lg:hidden" />
      </div>
    </>
  );
}
