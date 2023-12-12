import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch, faUser } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const menuList = [
    "여성",
    "남성",
    "청소년",
    "아동",
    "MUSINSA HOME",
    "SALE",
    "Brand",
  ];
  return (
    <div>
      <div className="nav-header">
        <div className="burger-menu hide">
          <FontAwesomeIcon icon={faBars} />
        </div>
        <div className="nav-user">
          <FontAwesomeIcon icon={faUser} />
        </div>
      </div>
      <div className="nav-logo">
        <Link to="/">
          <img
            src="https://www.shinailbo.co.kr/news/photo/202106/1419496_624961_3416.jpg"
            width={150}
          />
        </Link>
      </div>
      <div className="nav-menu-area">
        <ul className="menu">
          {menuList.map((menu, index) => (
            <li>
              <a href="#" key={index}>
                {menu}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="search-Box">
        <FontAwesomeIcon icon={faSearch} />
        <input type="text" placeholder="제품검색" />
      </div>
    </div>
  );
};

export default Navbar;
