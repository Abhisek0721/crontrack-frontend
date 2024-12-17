import { Separator } from "@/components/ui/separator";
import { TabsContent, Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { TopNavBar } from "../components/TopNavBar";
import { Sidebar } from "../components/Sidebar";
import { BottomNavbar } from "../components/BottomNavbar";
import { useGetallworkspaceQuery } from "../Redux/feature/creatinigWorkSpaceFlowApi";
import { useAppDispatch } from "../Redux/Hooks/store";
import { setUserWorkspace } from "../Redux/feature/authSlice";
import { useEffect } from "react";
import { ProgressMessage } from "@/components/progressMessage";

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
      <div className="">
        <ProgressMessage
          message="This page is under construction. Please check back soon"
          className=""
        />
        <TopNavBar />
        <div className="border-t">
          <div className="bg-background">
            <div className="grid lg:grid-cols-5">
              <Sidebar className="hidden lg:block" />
              <div className="col-span-3 lg:col-span-4 lg:border-l">
                <div className="h-full px-4 py-6 lg:px-8">
                  <Tabs
                    defaultValue="upcoming post"
                    className="h-full space-y-6"
                  >
                    <div className="space-between flex items-center">
                      <TabsList>
                        <TabsTrigger value="upcoming post" className="relative">
                          Upcoming Post
                        </TabsTrigger>
                        <TabsTrigger value="previous post">
                          Previous Post
                        </TabsTrigger>
                        <TabsTrigger value="live">Live</TabsTrigger>
                      </TabsList>
                    </div>

                    {/* Upcoming Post ke andar dikhne wala ui  */}
                    <TabsContent
                      value="upcoming post"
                      className="h-full flex-col border-none p-0 data-[state=active]:flexe"
                    >
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <p className="text-sm text-muted-foreground">
                            Your Upcoming post.
                          </p>
                        </div>
                      </div>
                      <Separator className="my-4" />
                    </TabsContent>

                    {/* Previous Post ke andar dikhne wala ui  */}
                    <TabsContent
                      value="previous post"
                      className="h-full flex-col border-none p-0 data-[state=active]:flex"
                    >
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <p className="text-sm text-muted-foreground">
                            Your previous post.
                          </p>
                        </div>
                      </div>
                      <Separator className="my-4" />
                    </TabsContent>

                    {/* Live ke andar dikhne wala ui  */}
                    <TabsContent
                      value="live"
                      className="h-full flex-col border-none p-0 data-[state=active]:flex"
                    >
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <p className="text-sm text-muted-foreground">
                            You are live
                          </p>
                        </div>
                      </div>
                      <Separator className="my-4" />
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
        </div>
        <BottomNavbar className="block lg:hidden" />
      </div>
    </>
  );
}
