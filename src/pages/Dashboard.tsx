import { Separator } from "@/components/ui/separator";
import { TabsContent, Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { TopNavBar } from "../modals/TopNavBar";
import { Sidebar } from "../modals/Sidebar";
import { BottomSidebar } from "../modals/BottomSidebar";

export default function Dashboard() {
  return (
    <>
      <div className="">
        <TopNavBar />
        <div className="border-t">
          <div className="bg-background">
            <div className="grid lg:grid-cols-5">
              <Sidebar className="hidden lg:block" />
              <div className="col-span-3 lg:col-span-4 lg:border-l">
                <div className="h-full px-4 py-6 lg:px-8">
                  <Tabs defaultValue="music" className="h-full space-y-6">
                    <div className="space-between flex items-center">
                      <TabsList>
                        <TabsTrigger value="music" className="relative">
                          Music
                        </TabsTrigger>
                        <TabsTrigger value="podcasts">Podcasts</TabsTrigger>
                        <TabsTrigger value="live" disabled>
                          Live
                        </TabsTrigger>
                      </TabsList>
                    
                    </div>
                    <TabsContent
                      value="music"
                      className="border-none p-0 outline-none"
                    >
                    </TabsContent>
                    <TabsContent
                      value="podcasts"
                      className="h-full flex-col border-none p-0 data-[state=active]:flex"
                    >


                      {/* podcast section ke andar dikhne wala ui  */}
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <h2 className="text-2xl font-semibold tracking-tight">
                            New Episodes
                          </h2>
                          <p className="text-sm text-muted-foreground">
                            Your favorite podcasts. Updated daily.
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
        <BottomSidebar className="block lg:hidden"/>
      </div>
    </>
  );
}
