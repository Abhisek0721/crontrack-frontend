import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Login } from "./pages/auth/Login";
import { Signup } from "./pages/auth/Signup";
import { Toaster } from "react-hot-toast";
import { VerifyUserByEmailLink } from "./pages/auth/VerifyUserByEmailLink";
import { ChangeUserPassword } from "./pages/auth/ChangeUserPassword";
import { AcceptInvitation } from "./pages/AcceptInvitation";
import { SocialAuth } from "./pages/workspace-And-addSocialMediaAccount/Social-auth";

import { ProtectedRoute } from "./Redux/util/ProtectedRoute";

//Create Workspace and AddSocialMedia accounts
import { WorkSpaceFlow } from "./pages/workspace-And-addSocialMediaAccount/WorkSpaceFlow";
import Workspace from "./pages/workspace-And-addSocialMediaAccount/CreateWorkSpace";
import AddSocialMediaAccounts from "./pages/workspace-And-addSocialMediaAccount/AddSocialMediaAccounts";

// Policy and Term&Conditions
import PrivacyPolicy from "./legal/PrivacyPolicy";
import TermsAndConditions from "./legal/TermAndCondition";
import DisconnectSocialMedia from "./legal/DisconnectSocialMedia";

//Dashboard
import Dashboard from "./pages/dashboard/Dashboard";
import { DashboardContent } from "./pages/dashboard/dashboard/DashboardContent";
import { Engagements } from "./pages/dashboard/engagement/Engagements";
import { Calendar } from "./pages/dashboard/calendar/Calendar";
import { Members } from "./pages/dashboard/members/Members";
import  Post  from "./pages/dashboard/post/Post";

//Account Settings file
import { AccountSettings } from "./pages/dashboard/accountSettings/AccountSettings";
import { Profile } from "./pages/dashboard/accountSettings/profile/Profile";
import SocialAccounts from "./pages/dashboard/accountSettings/social-accounts/SocialAccounts";
import { ReferralPrograms } from "./pages/dashboard/accountSettings/referral-programs/ReferralPrograms";
import { Notifications } from "./pages/dashboard/accountSettings/notifications/Notifications";
import { Billing } from "./pages/dashboard/accountSettings/billing/Billing";
import { RolePermissions } from "./pages/dashboard/accountSettings/role-&-permissions/Role&Permissions";
import "./App.css";

function App() {
  return (
    <Router basename="/">
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route
          path="verify/verify-email/:tokenId"
          element={<VerifyUserByEmailLink />}
        />
        <Route
          path="verify/forgot-password/:token"
          element={<ChangeUserPassword />}
        />

        <Route
          path="verify/workspace-invite/:invitationToken"
          element={<AcceptInvitation />}
        />

        <Route path="legal/privacy-policy" element={<PrivacyPolicy />} />
        <Route
          path="legal/terms-and-conditions"
          element={<TermsAndConditions />}
        ></Route>
         <Route
          path="disconnect-social-media-account"
          element={<DisconnectSocialMedia />}
        />


        <Route path="*" element={<ProtectedRoute />}>

        {/* create workspace and add social media account */}
        <Route path="create-workspace-name" element={<WorkSpaceFlow />}>
          <Route path="" element={<Workspace />} />
          <Route
            path="add-socialmedia-accounts"
            element={<AddSocialMediaAccounts />}
          />
        </Route>

        {/* Dashboard */}
        <Route path="" element={<Dashboard />} >
        <Route path="" element={<DashboardContent />}></Route>
        <Route path="calendar" element={<Calendar />} />
        <Route path="post" element={<Post />} />
        <Route path="members" element={<Members />} />
        <Route path="engagements" element={<Engagements />}/>
        </Route>

          {/* Account Setting Route */}
          <Route path="account" element={<AccountSettings />}>
          <Route path= "profile" element={<Profile />}></Route>
          <Route path= "social-accounts" element={<SocialAccounts />}></Route>
          <Route path= "billing" element={<Billing/>}></Route>
          <Route path="roles-&-permissions" element={<RolePermissions />}></Route>
          <Route path="referral-program" element={<ReferralPrograms />}></Route>
          <Route path="notification-permission" element={<Notifications />}></Route>
          </Route>

          {/* Route to connect social media account */}
          <Route path="social-auth" element={<SocialAuth />}></Route>

        </Route>


      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
