import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { Toaster } from "react-hot-toast";
import Dashboard from "./pages/Dashboard";
import { VerifyUserByEmailLink } from "./pages/VerifyUserByEmailLink";
import { ChangeUserPassword } from "./pages/ChangeUserPassword";
import { ProtectedRoute } from "./Redux/util/ProtectedRoute";
import { WorkSpaceFlow } from "./pages/WorkSpaceFlow";
import Workspace from "./pages/CreateWorkSpace";
import AddSocialMediaAccounts from "./pages/AddSocialMediaAccounts";
import PrivacyPolicy from "./legal/PrivacyPolicy";
import TermsAndConditions from "./legal/TermAndCondition";
import { AcceptInvitation } from "./pages/AcceptInvitation";
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

        {/* here createworkspace and addsocialmediaaccont page protect nhi tha islye hatan pada ye baad me kahi error throw kr skta h because check nhi hua h code  */}
        {/* <Route path="create-workspace-name" element={<CreateWorkSpaceFlow />}>
          <Route path="" element={<Workspace />} />
          <Route
            path="add-socialmedia-accounts"
            element={<AddSocialMediaAccounts />}
          />
        </Route> */}

        <Route path="legal/privacy-policy" element={<PrivacyPolicy />} />
        <Route
          path="legal/terms-and-conditions"
          element={<TermsAndConditions />}
        ></Route>


        <Route path="*" element={<ProtectedRoute />}>
        <Route path="create-workspace-name" element={<WorkSpaceFlow />}>
          <Route path="" element={<Workspace />} />
          <Route
            path="add-socialmedia-accounts"
            element={<AddSocialMediaAccounts />}
          />
        </Route>
          <Route path="" element={<Dashboard />}></Route>
        </Route>


      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
