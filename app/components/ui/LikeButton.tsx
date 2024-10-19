import { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function LikeButton() {
  const [liked, setLiked] = useState(false);

  const handleLikeClick = () => {
    setLiked(!liked); 
  };

  return (
    <div onClick={handleLikeClick} className="cursor-pointer">
      {liked ? (
        <FavoriteIcon className="text-red-500" /> 
      ) : (
        <FavoriteBorderIcon className="text-slate-400" /> 
      )}
    </div>
  );
}
