import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import CreateWorkSpaceFlow from './pages/CreateWorkSpaceFlow';
import { Toaster } from 'react-hot-toast';
import Dashboard from './pages/Dashboard';
import './App.css'

function App() {
    return (
        <Router basename='/'>
            <Routes>
            <Route path='login' element={<Login />}/>
            <Route path='signup' element={<Signup />}/>
            <Route path='createworkspaceflow' element={<CreateWorkSpaceFlow />}/>
            <Route path='dashboard' element={<Dashboard/>}></Route>
            </Routes>

            <Toaster/>
        </Router>
    );
}

export default App;