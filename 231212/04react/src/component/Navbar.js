import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch, faUser } from "@fortawesome/free-solid-svg-icons";

const menuList = ["여성", "남성", "청소년", "아동", "Home", "Sale", "Brand"];

const Navbar = ({ authenticate, setAuthenticate }) => {
  const [width, setWidth] = useState(0);
  const navigate = useNavigate();
  const open = () => setWidth(250);
  const close = () => setWidth(0);
  const onCheckEnter = (event) => {
    if (event.key === "Enter") {
      navigate(`?q=${event.target.value}`);
    }
  };
  return (
    <div>
      {/* <div className="side-menu" style={{ width: width }}>
        <button className="closebtn" onClick={close}>
          &times;
        </button>
        <div className="side-menu-list" id="menu-list">
          {menuList.map((menu, index) => (
            <button key={index}>{menu}</button>
          ))}
        </div>
      </div> */}
      <div className="nav-header">
        <div className="burger-menu hide">
          <FontAwesomeIcon icon={faBars} onClick={open} />
        </div>
        {authenticate ? (
          <div onClick={() => setAuthenticate(false)}>
            <FontAwesomeIcon icon={faUser} />
            <span style={{ cursor: "pointer" }}>로그아웃</span>
          </div>
        ) : (
          <div onClick={() => navigate("/login")}>
            <FontAwesomeIcon icon={faUser} />
            <span style={{ cursor: "pointer" }}>로그인</span>
          </div>
        )}
      </div>
      <div className="nav-logo">
        <Link to="/">
          <img
            width={100}
            src="https://www.shinailbo.co.kr/news/photo/202106/1419496_624961_3416.jpg"
          />
        </Link>
      </div>
      <div className="nav-menu-area">
        <ul className="menu">
          {menuList.map((menu, index) => (
            <li key={index}>
              <a href="#">{menu}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="search-box">
        <FontAwesomeIcon icon={faSearch} />
        <input type="text" placeholder="제품검색" onKeyUp={onCheckEnter} />
      </div>
    </div>
  );
};

export default Navbar;
