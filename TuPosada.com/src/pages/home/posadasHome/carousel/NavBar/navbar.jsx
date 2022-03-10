import { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./navbar.css";
import { NavbarBrand } from "reactstrap";


function NavBar(){
    return(
        <ul className={styles.navbarContainer}>
            <li>
            <Link to="/" className={styles.link}>
            Cacahuate
            </Link>

            </li>
        </ul>

    )

}

export default NavBar