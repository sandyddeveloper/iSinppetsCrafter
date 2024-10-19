"use client";
import React from "react";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

export default function SideBarMenuIcon({ openSideBar, toggleSideBar }) {
  return (
    <>
      {!openSideBar ? (
        <MenuOutlinedIcon
          onClick={toggleSideBar}
          className="text-slate-500 cursor-pointer hidden max-md:block"
        />
      ) : (
        <CloseOutlinedIcon
          onClick={toggleSideBar}
          className="text-slate-500 cursor-pointer hidden max-md:block"
        />
      )}
    </>
  );
}
