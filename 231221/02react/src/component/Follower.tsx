import React from "react";
import { useOutletContext } from "react-router-dom";

interface IFollowersContext {
  nameOfMyUsers: string;
}

const Follower = () => {
  const { nameOfMyUsers } = useOutletContext<IFollowersContext>();
  return <div>Here are {nameOfMyUsers}의 followers</div>;
};

export default Follower;
