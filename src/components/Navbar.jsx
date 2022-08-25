import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ReactComponent as OfferIcon } from "../assets/svg/localOfferIcon.svg";
import { ReactComponent as ExploreIcon } from "../assets/svg/exploreIcon.svg";
import { ReactComponent as PersonOutlineIcon } from "../assets/svg/personOutlineIcon.svg";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const pathMatchRoute = (route) => {
    if (route === location.pathname) {
      return true;
    }
  };

  return (
    <footer className="navbar">
      <nav className="navbarNav">
        <ul className="navbarListItems">
          <li className="navbarListItem" onClick={() => navigate("/")}>
            <ExploreIcon
              fill={pathMatchRoute("/") ? "#000" : "#8f8f8f"}
              width="36px"
              height="36px"
            />
            <p
              className={
                pathMatchRoute("/")
                  ? "navbarListItemNameActive"
                  : "navbarListItemName"
              }
            >
              Explore
            </p>
          </li>

          <li className="navbarListItem" onClick={() => navigate("/Offers")}>
            <OfferIcon
              fill={pathMatchRoute("/Offers") ? "#000" : "#8f8f8f"}
              width="36px"
              height="36px"
            />
            <p
              className={
                pathMatchRoute("/Offers")
                  ? "navbarListItemNameActive"
                  : "navbarListItemName"
              }
            >
              Offer
            </p>
          </li>

          <li className="navbarListItem" onClick={() => navigate("/Profile")}>
            <PersonOutlineIcon
              fill={pathMatchRoute("/Profile") ? "#000" : "#8f8f8f"}
              width="36px"
              height="36px"
            />
            <p
              className={
                pathMatchRoute("/Profile")
                  ? "navbarListItemNameActive"
                  : "navbarListItemName"
              }
            >
              Profile
            </p>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Navbar;
