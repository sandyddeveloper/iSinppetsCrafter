import React from "react";
import { mainColor } from "../lib/data";
import CodeOffIcon from "@mui/icons-material/CodeOff";

export default function Logo() {
  return (
    <div className="flex gap-2 items-center">
      <div className={`bg-[${mainColor}] p-[6px] rounded-md`}>
        <CodeOffIcon
          sx={{
            fontSize: 40,
            color: "white",
            stroke: "white",
            strokeWidth: 2,
          }}
        />
      </div>
      <div className="flex gap-1text-[19px]">
        <span className="font-bold text-purple">iSnippets </span>
        <span>Crafter</span>
      </div>
    </div>
  );
}
