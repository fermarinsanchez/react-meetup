import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

export default function MainNavigation({ setPage }) {
  return (
    <header className={classes.header} data-test="navigation-header">
      <Link to='/'><div className={classes.logo}>React Meetups</div></Link>
      <nav>
        <ul>
          <li>
            <Link to="/" >
              All Meetups
             </Link>
          </li>

          <li>
            <Link to="meetup-form" >
              Add New Meetup
             </Link>
          </li>
          <li>
            <Link to="/favorites">
              My Favorites
              <span className={classes.badge}>{0}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
