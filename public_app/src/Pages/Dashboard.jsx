import { Route, Routes } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { About } from './About';
import { Home } from './Home';

export const Dashboard = () => {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/home' element={<Home />} />
                <Route path='/about' element={<About />} />
            </Routes>
        </div>
    );
}
