import Image from "../../Asset/Icons/logo-light.png";
import { BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";

export const FooterArray = [
  {
    classmain: "firstlayout",
    classname: "firstlayoutname",
    section: [
      {
        image: Image,
        text: "BricksLab can provide everything you need to generate awareness, drive traffic, connect.",
        classbody: "firstClassbody",
        classname: "firstClassname",
        classitem: "firstClassitem",
        linkarray: [
          {
            linkIcon: BsTwitter,
            link: "",
            classbody: "linkbody",
            classname: "linkclass",
            classlinkicon: "linkicon",
          },
          {
            linkIcon: BsInstagram,
            link: "",
            classbody: "linkbody",
            classname: "linkclass",
            classlinkicon: "linkicon",
          },
          {
            linkIcon: FaFacebookF,
            link: "",
            classbody: "linkbody",
            classname: "linkclass",
            classlinkicon: "linkicon",
          },
          {
            linkIcon: BsLinkedin,
            link: "",
            classbody: "linkbody",
            classname: "linkclass",
            classlinkicon: "linkicon",
          },
        ],
        classlinkbody: "firstClasslinkbody",
      },
      {
        header: "Company",
        classbody: "secondClassbody",
        classname: "secondClassname",
        classlinkbody: "secondClasslinkbody",
        linkarray: [
          {
            linkIcon: FiChevronRight,
            link: "",
            linkText: "Service",
            classbody: "linkbodyText",
            classname: "linkclassText",
            classlinkicon: "linkiconText",
            classicon: "iconlink",
            classitem: "linktextText",
          },
          {
            linkIcon: FiChevronRight,
            link: "",
            linkText: "About us",
            classbody: "linkbodyText",
            classname: "linkclassText",
            classlinkicon: "linkiconText",
            classicon: "iconlink",
            classitem: "linktextText",
          },
          {
            linkIcon: FiChevronRight,
            link: "",
            linkText: "Contact",
            classbody: "linkbodyText",
            classname: "linkclassText",
            classlinkicon: "linkiconText",
            classicon: "iconlink",
            classitem: "linktextText",
          },
          {
            linkIcon: FiChevronRight,
            link: "",
            linkText: "Term",
            classbody: "linkbodyText",
            classname: "linkclassText",
            classlinkicon: "linkiconText",
            classicon: "iconlink",
            classitem: "linktextText",
          },
        ],
      },
      {
        header: "Usefull Links",
        classbody: "secondClassbody",
        classname: "secondClassname",
        classlinkbody: "secondClasslinkbody",
        linkarray: [
          {
            linkIcon: FiChevronRight,
            link: "",
            linkText: "Terms of Services",
            classbody: "linkbodyText",
            classname: "linkclassText",
            classlinkicon: "linkiconText",
            classicon: "iconlink",
            classitem: "linktextText",
          },
          {
            linkIcon: FiChevronRight,
            link: "",
            linkText: "Privacy Policy",
            classbody: "linkbodyText",
            classname: "linkclassText",
            classlinkicon: "linkiconText",
            classicon: "iconlink",
            classitem: "linktextText",
          },
        ],
      },
      {
        header: "Newsletter",
        classbody: "thirdClassbody",
        classname: "thirdClassname",
        text: "Sign up and receive the latest tips via email.",
        classitem: "thirdClassitem",
        form: [
          {
            label: "Write your email *",
            type: "text",
            name: "question",
            icons: HiOutlineMail,
            placeholder: "Subject:",
            classbody: "inputbody",
            classname: "input",
          },
          {
            type: "submit",
            value: "Subscribe",
            classbody: "submitbody",
            classname: "submit",
          },
        ],
      },
    ],
  },
  {
    classmain: "secondlayout",
    classname: "secondlayoutname",
    text: "© 2022 BricksLab.| All Rights Reserved. | 2021-2022",
  },
];
