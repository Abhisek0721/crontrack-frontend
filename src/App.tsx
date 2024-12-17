import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { Toaster } from "react-hot-toast";
import Dashboard from "./pages/Dashboard";
import { VerifyUserByEmailLink } from "./pages/VerifyUserByEmailLink";
import { ChangeUserPassword } from "./pages/ChangeUserPassword";
import { AcceptInvitation } from "./pages/AcceptInvitation";

import { ProtectedRoute } from "./Redux/util/ProtectedRoute";

//Create Workspace and AddSocialMedia accounts
import { WorkSpaceFlow } from "./pages/WorkSpaceFlow";
import Workspace from "./pages/CreateWorkSpace";
import AddSocialMediaAccounts from "./pages/AddSocialMediaAccounts";

import PrivacyPolicy from "./legal/PrivacyPolicy";
import TermsAndConditions from "./legal/TermAndCondition";

//Account Settings file
import { AccountSettings } from "./pages/AccountSettings";
import { Profile } from "./pages/Profile";
import { SocialAccounts } from "./pages/SocialAccounts";
import { ReferralPrograms } from "./pages/ReferralPrograms";
import { Notifications } from "./pages/Notifications";
import { Billing } from "./pages/Billing";
import { RolePermissions } from "./pages/Role&Permissions";
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
        <Route path="" element={<Dashboard />} />

          {/* Account Setting Route */}
          <Route path="account" element={<AccountSettings />}>
          <Route path= "profile" element={<Profile />}></Route>
          <Route path= "social-accounts" element={<SocialAccounts />}></Route>
          <Route path= "billing" element={<Billing/>}></Route>
          <Route path="roles-&-permissions" element={<RolePermissions />}></Route>
          <Route path="referral-program" element={<ReferralPrograms />}></Route>
          <Route path="notification-permission" element={<Notifications />}></Route>
          </Route>

        </Route>


      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
