import { MainNav } from "@/components/main-nav";
import { Search } from "@/components/search";
import TeamSwitcher from "@/components/team-switcher";
import { SendInvitationEmail } from "./SendInvitationEmail";
export const TopNavBar = () => {
  return (
    <div className="flex justify-between pl-4 pr-11 py-4">
      <div className="flex gap-4">
        <TeamSwitcher />
        <MainNav />
      </div>
      <div className="flex gap-4">
       <SendInvitationEmail />
      <Search />  
      </div>
     
    </div>
  );
};
