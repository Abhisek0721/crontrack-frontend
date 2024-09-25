// import { MainNav } from "@/components/main-nav";
// import { MainNavMd } from "@/components/MainNavMd";
import { Search } from "@/components/search";
import {WorkSpaceSwitcher} from "@/components/workSpaceSwitcher";
import { Avtar } from "@/components/avtar";
export const TopNavBar = () => {
  return (
    <div className="flex justify-between pl-4 pr-11 py-4">
      <div className="flex gap-4">
        <WorkSpaceSwitcher className="" />
        {/* <MainNav className="hidden md:block"/>
        <MainNavMd className="block md:hidden ml-[-1.6rem]"/> */}
      </div>
      <div className="flex gap-4">
        <Search className="hidden sm:block" />
        <Avtar />
      </div>
    </div>
  );
};
