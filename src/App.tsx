import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import MultiStepForm from './pages/Multistepform';
import { Toaster } from 'react-hot-toast';
import './App.css'

function App() {
    return (
        <Router basename='/'>
            <Routes>
            <Route path='login' element={<Login />}/>
            <Route path='signup' element={<Signup />}/>
            <Route path='multistepform' element={<MultiStepForm />}/>
            </Routes>

            <Toaster/>
        </Router>
    );
}

export default App;