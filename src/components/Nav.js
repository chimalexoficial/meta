import '../App.css'
function Nav() {
    return <nav>

        <div><img className="logo" src="https://littlelemonrestaurantankitamwebsiteproject.netlify.app/static/media/Logo.370f832fad423c516d56.png" alt="logo" /></div>
        <ul>
            <li><a href="homepage">Homepage</a></li>
            <li><a href="/booking">Booking</a></li>
            <li><a href="#">Menu</a></li>
            <li><a href="#">Reservations</a></li>
            <li><a href="#">Order Online</a></li>
            <li><a href="#">Login</a></li>
        </ul>
    </nav>
}

export default Nav;