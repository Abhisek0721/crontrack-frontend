import { BrowserRouter as Router } from 'react-router-dom';
import { Login } from './pages/Login';

function App() {
    return (
        <Router basename="/">
            <Login />
        </Router>
    );
}

export default App;