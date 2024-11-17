import LaughIcon from "./Icons/LaughIcon";
import LikeIcon from "./Icons/LikeIcon";
import LoveIcon from "./Icons/LoveIcon";
import SadIcon from "./Icons/SadIcon";
import { LikeType } from "./types/Like";

export const reactions: LikeType[] = [
    {
        name: "like",
        icon: <LikeIcon />,
    },
    {
        name: "love",
        icon: <LoveIcon />,
    },
    {
        name: "laugh",
        icon: <LaughIcon />,
    },
    {
        name: "sad",
        icon: <SadIcon />,
    },
];