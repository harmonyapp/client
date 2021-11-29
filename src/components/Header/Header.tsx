import { Link } from "react-router-dom";
import classes from "./Header.module.css";

const Header: React.FC = () => {
    return (
        <div className={classes.Header}>
            <div className={classes.InnerContent}>
                <div>
                    <h2 className={classes.Logo}><Link to="/">Harmony</Link></h2>
                </div>
                <div className={classes.Navigation}>
                    <span>
                        <Link to="/">Terms of Service</Link>
                    </span>
                    <span>
                        <Link to="/">Privacy Policy</Link>
                    </span>
                    <span>
                        <Link to="/">
                            <button className={classes.LoginButton}>Login</button>
                        </Link>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Header;
