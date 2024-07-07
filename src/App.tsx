import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import MultiStepForm from './pages/multistepform';

function App() {
    return (
        <Router basename='/'>
            <Routes>
            <Route path='Login' element={<Login />}/>
            <Route path='signup' element={<Signup />}/>
            <Route path='multistepform' element={<MultiStepForm />}/>
            </Routes>
        </Router>
    );
}

export default App;