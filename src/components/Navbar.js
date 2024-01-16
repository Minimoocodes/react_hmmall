import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

// 3 lines - login, logo, menu & search

const Navbar = () => {
  const menuList = [
    "Women",
    "Divided",
    "Men",
    "Kids",
    "Sports",
    "H&M Home",
    "Sale",
    "Sustainability",
  ];

  const navigate = useNavigate();
  const goToLogin = () => {
    navigate("/login");
  };

  const search = (event) => {
    if (event.key === "Enter") {
      let keyword = event.target.value;
      navigate(`/?q=${keyword}`);
    }
  };

  return (
    <div>
      <div className="login_button" onClick={goToLogin}>
        <FontAwesomeIcon icon={faUser} />
        <div>Login</div>
      </div>

      <div className="nav_logo">
        <img
          width={100}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/2560px-H%26M-Logo.svg.png"
          alt="logo"
        />
      </div>

      <div className="nav_menuArea">
        <div className="nav_menuwrap">
          <ul className="nav_menu">
            {menuList.map((menu) => (
              <li>{menu}</li>
            ))}
          </ul>
        </div>
        <div className="search_wrap">
          <div className="nav_search">
            <FontAwesomeIcon icon={faSearch} />
            <input
              onKeyDown={(event) => {
                search(event);
              }}
              className="search_input"
              type="text"
              placeholder="search"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
