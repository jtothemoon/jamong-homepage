import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "nav.home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "nav.about",
    path: "/about",
    newTab: false,
  },
  {
    id: 33,
    title: "nav.portfolio",
    path: "/portfolio",
    newTab: false,
  },
  {
    id: 3,
    title: "nav.contact",
    path: "/contact",
    newTab: false,
  },
  // {
  //   id: 4,
  //   title: "Pages",
  //   newTab: false,
  //   submenu: [
  //     {
  //       id: 41,
  //       title: "About Page",
  //       path: "/about",
  //       newTab: false,
  //     },
  //     {
  //       id: 42,
  //       title: "Contact Page",
  //       path: "/contact",
  //       newTab: false,
  //     },
  //     {
  //       id: 43,
  //       title: "Portfolio Page",
  //       path: "/portfolio",
  //       newTab: false,
  //     },
  //     {
  //       id: 46,
  //       title: "Sign In Page",
  //       path: "/signin",
  //       newTab: false,
  //     },
  //     {
  //       id: 47,
  //       title: "Sign Up Page",
  //       path: "/signup",
  //       newTab: false,
  //     },
  //     {
  //       id: 48,
  //       title: "Error Page",
  //       path: "/error",
  //       newTab: false,
  //     },
  //   ],
  // },
];
export default menuData;