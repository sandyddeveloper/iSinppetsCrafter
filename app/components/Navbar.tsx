import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import DarkModeToggle from "./DarkMode";
import SideBarMenuIcon from "./SideBarMenu";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import TagArea from "./ContentArea";

export default function ContentArea() {
  return (
    <div className="w-full bg-slate-100 dark:bg-black p-5 text-black dark:text-white transition-colors duration-300">
      <Topbar />
      <TagArea />
    </div>
  );
}

function Topbar() {
  const [openSideBar, setOpenSideBar] = useState(false);

  const toggleSideBar = () => setOpenSideBar(!openSideBar);
  return (
    <div className="rounded-lg flex justify-between items-center bg-white dark:bg-gray-800 p-3 transition-colors duration-300">
      <ProfileUser />
      <SearchBar />
      <div className="flex gap-4 items-center">
        <DarkModeToggle />
        <SideBarMenuIcon
          openSideBar={openSideBar}
          toggleSideBar={toggleSideBar}
        />
      </div>
    </div>
  );
}

function ProfileUser() {
  const user = {
    userName: "John Doe",
    firstName: "John",
    lastName: "Doe",
    imageUrl: "/path/to/image.jpg",
    emailAddresses: [{ emailAddress: "john.doe@example.com" }],
  };

  const loading = (
    <div className="w-9 h-9 rounded-full mb-[5px] bg-slate-200 dark:bg-gray-600"></div>
  );

  return (
    <div className="flex gap-3 items-center">
      {user ? (
        <>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
            alt={user?.userName || "User Avatar"}
            className="w-9 h-9 rounded-full mb-[5px]"
          />
          <div className={`max-md:hidden flex flex-col text-sm`}>
            <span className="font-semibold text-black-100 dark:text-gray-200">
              {user.userName}
            </span>
            <span className="text-slate-500 dark:text-gray-400 text-[11px]">
              {user.emailAddresses[0].emailAddress}
            </span>
          </div>
        </>
      ) : (
        loading
      )}
    </div>
  );
}

function SearchBar() {
  return (
    <div className="relative pl-3 w-[60%] h-[38px] bg-slate-100 dark:bg-gray-800 rounded-3xl flex items-center gap-2 transition-colors duration-300">
      <SearchIcon
        className="text-purple dark:text-purple"
        sx={{ fontSize: 25 }}
      />
      <input
        placeholder="Search a snippet..."
        className="w-[70%] py-1 px-2  text-sm bg-slate-100 dark:bg-gray-800 text-slate-500 dark:text-gray-300"
      />
      <AddSnippetButton />
    </div>
  );

  function AddSnippetButton() {
    return (
      <div className="absolute flex gap-2 px-4 rounded-3xl  bg-purple dark:bg-purple p-1  text-[13px] text-white top-[2px] right-[1px] items-center cursor-pointer select-none">
        {/* <div className="text-xl">+</div> */}
        <AddIcon sx={{ fontSize: 26 }} />
        <div className="max-md:hidden text-[15px] items-center">Snippet</div>
      </div>
    );
  }
}
