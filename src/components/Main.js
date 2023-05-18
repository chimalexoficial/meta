import '../App.css'
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './HomePage';
import { BookingPage } from './BookingPage';
import { CallToAction } from './CallToAction';
import { Chicago } from './Chicago';
import { CustomerSay } from './CustomerSay';
import { Specials } from './Specials';

function Main() {
    return <main>
        <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/booking" element={<BookingPage />}></Route>
            <Route path="/call" element={<CallToAction />}></Route>
            <Route path="/chicago" element={<Chicago />}></Route>
            <Route path="/customer" element={<CustomerSay />}></Route>
            <Route path="/specials" element={<Specials />}></Route>
        </Routes>
    </main>
}

export default Main;