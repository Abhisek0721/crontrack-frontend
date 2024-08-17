import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import CreateWorkSpaceFlow from './pages/CreateWorkSpaceFlow';
import { Toaster } from 'react-hot-toast';
import Dashboard from './pages/Dashboard';
import { VerifyUserByEmailLink } from './pages/VerifyUserByEmailLink';
import { ChangeUserPassword } from './pages/ChangeUserPassword';
import './App.css'

function App() {
    return (
        <Router basename='/'>
            <Routes>
            <Route path='login' element={<Login />}/>
            <Route path='signup' element={<Signup />}/>
            <Route path='createworkspaceflow' element={<CreateWorkSpaceFlow />}/>
            <Route path='dashboard' element={<Dashboard/>}></Route>
            <Route path='verify/verify-email/:tokenId' element={<VerifyUserByEmailLink/>}></Route>
            <Route path='verify/forgot-password/:token' element = {<ChangeUserPassword />}></Route>
            </Routes>

            <Toaster/>
        </Router>
    );
}

export default App;