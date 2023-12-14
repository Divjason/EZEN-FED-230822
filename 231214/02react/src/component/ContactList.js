import React from "react";
import { useState, useEffect } from "react";
import SearchBox from "./SearchBox";
import ContactItem from "./ContactItem";
import { useSelector } from "react-redux";

const ContactList = () => {
  const { contact, keyWord } = useSelector((state) => state);
  const [filteredList, setFilteredList] = useState([]);
  useEffect(() => {
    if (keyWord !== "") {
      const list = contact.filter((item) => item.name.includes(keyWord));
      setFilteredList(list);
    } else {
      setFilteredList(contact);
    }
  }, [keyWord]);
  return (
    <div>
      <SearchBox />
      {filteredList.map((item, index) => (
        <ContactItem key={index} item={item} />
      ))}
    </div>
  );
};

export default ContactList;
