import { Link, NavLink } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import logo from "/shared/logo.svg";
import hamIcon from "/shared/icon-hamburger.svg";

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const activeStyle = {
    borderBottom: "4px solid #93C5FD",
  };

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="flex justify-between items-center p-6">
        <Link to="/">
          <img src={logo} />
        </Link>
        <button className="hamburger" onClick={toggleSidebar}>
          <img src={hamIcon} />
        </button>
      </div>
      <div
        ref={sidebarRef}
        className={`sidebar ${isSidebarOpen ? "open" : ""}`}
      >
        <ul>
          <li>
            <NavLink
              to="/"
              className="hover:border-b-2"
              style={({ isActive }) => (isActive ? activeStyle : null)}
            >
              <span className="mr-5 opacity-50">00</span>HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/destination"
              className="hover:border-b-2"
              style={({ isActive }) => (isActive ? activeStyle : null)}
            >
              <span className="mr-5 opacity-50">01</span>DESTINATION
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/crew"
              className="hover:border-b-2"
              style={({ isActive }) => (isActive ? activeStyle : null)}
            >
              <span className="mr-5 opacity-50">02</span>CREW
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/technology"
              className="hover:border-b-2"
              style={({ isActive }) => (isActive ? activeStyle : null)}
            >
              <span className="mr-5 opacity-50">03</span>TECHNOLOGY
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}
