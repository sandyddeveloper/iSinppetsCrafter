
import { SiJavascript, SiPython, SiCplusplus } from "react-icons/si";
import { Home,  Folder, Tag,  User, Settings, SquareDashedBottomCode, FileHeart, Trash2 } from "lucide-react";

export const mainColor = "#8338ec";
export const purple = "#805ad5";


 export const navItems = [
    { icon: Home, label: "Dashboard" },
    { icon: SquareDashedBottomCode, label: "Snippets" },
    { icon: Folder, label: "Categories" },
    { icon: Tag, label: "Tags" },
    { icon: FileHeart, label: "Favorites" },
    { icon: Trash2, label: "Trash" },
    { icon: User, label: "Profile" },
    { icon: Settings, label: "Settings" },
  ];
 

  export const languages = [
    { name: "Javascript", icon: SiJavascript, score: 3 },
    { name: "Python", icon: SiPython, score: 10 },
    { name: "C++", icon: SiCplusplus, score: 2 },
  ];