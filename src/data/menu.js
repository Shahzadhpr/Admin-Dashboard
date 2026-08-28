import { BiCommentDetail } from "react-icons/bi";
import {
  HiOutlineChatBubbleLeftRight,
  HiOutlineHome,
  HiOutlineShoppingCart,
  HiOutlineUsers,
} from "react-icons/hi2";

export default [
  {
    id: 1,
    title: "منو اصلی",
    items: [
      {
        id: 2,
        href: "/",
        title: "داشبورد",
        icon: HiOutlineHome,
      },
      {
        id: 3,
        href: "/Products",
        title: "محصولات",
        icon: HiOutlineShoppingCart,
      },
      {
        id: 4,
        href: "/users",
        title: "کاربران",
        icon: HiOutlineUsers,
      },
      {
        id: 5,
        href: "/tickets",
        title: "تیکت ها",
        icon: HiOutlineChatBubbleLeftRight,
      },
      {
        id: 6,
        href: "/comments",
        title: "کامنت ها",
        icon: BiCommentDetail,
      },
    ],
  },
];
