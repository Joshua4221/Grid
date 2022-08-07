import CompanyLogo from "../../Asset/Icons/logo-light.png";
import { FiMenu } from "react-icons/fi";

export const NavArray = [
  {
    classMain: "firstLayout",
    section: [{ image: CompanyLogo, classBody: "firstLayoutBody" }],
  },
  {
    classMain: "secondLayout",
    section: [
      {
        link: "/",
        linkText: "Home",
        classBody: "secondLayoutBodylink",
        classname: "secondLayoutClasslink",
        classItem: "secondLayoutItemlink",
      },
      {
        link: "/services",
        linkText: "Services",
        classBody: "secondLayoutBodylink",
        classname: "secondLayoutClasslink",
        classItem: "secondLayoutItemlink",
      },
      {
        link: "/contact",
        linkText: "Contact",
        classBody: "secondLayoutBodylink",
        classname: "secondLayoutClasslink",
        classItem: "secondLayoutItemlink",
      },
      {
        link: "/about",
        linkText: "About us",
        classBody: "secondLayoutBodylink",
        classname: "secondLayoutClasslink",
        classItem: "secondLayoutItemlink",
      },
    ],
  },
  {
    classMain: "thirdLayout",
    section: [
      {
        icon: FiMenu,
        classBody: "thirdLayoutBodyicon",
        classname: "thirdLayoutClassicon",
        classItem: "thirdLayoutItemicon",
      },
    ],
  },
];
