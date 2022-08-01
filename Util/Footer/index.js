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
        text: "Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.",
        classbody: "firstClassbody footerbody",
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
        classbody: "secondClassbody footerbody",
        classname: "secondClassname",
        linkarray: [
          {
            linkIcon: FiChevronRight,
            link: "",
            linkText: "Service",
            classbody: "linkbodyText",
            classname: "linkclassText",
            classlinkicon: "linkiconText",
            classitem: "linktextText",
          },
          {
            linkIcon: FiChevronRight,
            link: "",
            linkText: "About us",
            classbody: "linkbodyText",
            classname: "linkclassText",
            classlinkicon: "linkiconText",
            classitem: "linktextText",
          },
          {
            linkIcon: FiChevronRight,
            link: "",
            linkText: "Contact",
            classbody: "linkbodyText",
            classname: "linkclassText",
            classlinkicon: "linkiconText",
            classitem: "linktextText",
          },
          {
            linkIcon: FiChevronRight,
            link: "",
            linkText: "Term",
            classbody: "linkbodyText",
            classname: "linkclassText",
            classlinkicon: "linkiconText",
            classitem: "linktextText",
          },
        ],
      },
      {
        header: "Usefull Links",
        classbody: "thirdClassbody footerbody",
        classname: "thirdClassname",
        linkarray: [
          {
            linkIcon: FiChevronRight,
            link: "",
            linkText: "Terms of Services",
            classbody: "linkbodyText",
            classname: "linkclassText",
            classlinkicon: "linkiconText",
            classitem: "linktextText",
          },
          {
            linkIcon: FiChevronRight,
            link: "",
            linkText: "Privacy Policy",
            classbody: "linkbodyText",
            classname: "linkclassText",
            classlinkicon: "linkiconText",
            classitem: "linktextText",
          },
        ],
      },
      {
        header: "Newsletter",
        classbody: "thirdClassbody footerbody",
        classname: "thirdClassname",
        text: "Sign up and receive the latest tips via email.",
        classitem: "secondClassitem",
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
            value: "Send Message",
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
    text: "© 2022 Techwind.| All Rights Reserved. | 2021-2022",
  },
];
