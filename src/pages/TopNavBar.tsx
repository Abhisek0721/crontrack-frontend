import { MainNav } from "@/components/main-nav";
import { Search } from "@/components/search";
import TeamSwitcher from "@/components/team-switcher";
export const TopNavBar = () => {
  return (
    <div className="flex justify-between pl-4 pr-11 py-4">
      <div className="flex gap-4">
        <TeamSwitcher />
        <MainNav />
      </div>
      <Search />
    </div>
  );
};
