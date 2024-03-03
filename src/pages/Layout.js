import { Outlet, Link } from "react-router-dom";

import  "./static/style/layaut.css";
import "../index.css"

import logo from "./static/img/logo.svg";




const Layout = () => {
  return (
    <>
     
      <div className="Layout">
            <header className="header">
                <div className="container">
                    <nav className="navigation">

                      <div className="logo">
                            <img src={logo} alt="logo"/>
                        </div>

                        <ul class="navig">
                            <li>
                            <Link to="/">Home</Link>
                              </li>
                            <li>
                            <Link to="/about">About</Link>
                              </li>
                            <li>
                            <Link to="/galary">Galary</Link>
                              </li>
                            <li>
                            <Link to="/contacts">Contacts</Link>
                              </li>


                        </ul>
                    </nav>
                </div>
            </header>
        </div>

      <Outlet />
    </>
  )
};

export default Layout;