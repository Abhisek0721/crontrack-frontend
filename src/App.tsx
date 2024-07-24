import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import MultiStepForm from './pages/MultiStepForm';
import { Toaster } from 'react-hot-toast';
import MusicPage from './pages/Music';
import './App.css'

function App() {
    return (
        <Router basename='/'>
            <Routes>
            <Route path='login' element={<Login />}/>
            <Route path='signup' element={<Signup />}/>
            <Route path='multistepform' element={<MultiStepForm />}/>
            <Route path='dashboard' element={<MusicPage/>}></Route>
            </Routes>

            <Toaster/>
        </Router>
    );
}

export default App;