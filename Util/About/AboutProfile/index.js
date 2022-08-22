import { FaLinkedinIn, FaTwitter, FaGithub, FaFacebookF } from "react-icons/fa";
import Team1 from "../../../Asset/Image/team-1.jpg";
import Team2 from "../../../Asset/Image/team-2.jpg";
import Team3 from "../../../Asset/Image/collins.jpg";
import Team4 from "../../../Asset/Image/team-6.jpg";
import Team5 from "../../../Asset/Image/team-7.jpg";

export const AboutProfileArray = [
  {
    image: Team1,
    linkarray: [
      {
        link: "https://www.linkedin.com/in/joshua-ejike-0227b31ba",
        linkicon: FaLinkedinIn,
      },
      {
        link: "https://twitter.com/JoshuaEjike2?t=J47aJIq-kRHg2aLRjg8Cww&s=09",
        linkicon: FaTwitter,
      },
      { link: "https://github.com/Joshua4221", linkicon: FaGithub },
      {
        link: "https://www.facebook.com/profile.php?id=100008744569476",
        linkicon: FaFacebookF,
      },
    ],
    name: "Joshua Ejike",
    profession: "Software Developer",
  },
  {
    image: Team4,
    linkarray: [
      { link: "", linkicon: FaLinkedinIn },
      { link: "", linkicon: FaTwitter },
      { link: "", linkicon: FaGithub },
      { link: "", linkicon: FaFacebookF },
    ],
    name: "Emmanuel Ugorji",
    profession: "Software Developer",
  },
  {
    image: Team3,
    linkarray: [
      {
        link: "https://www.linkedin.com/in/collins-okafor-43428b17b/",
        linkicon: FaLinkedinIn,
      },
      { link: "https://twitter.com/ci_okafor", linkicon: FaTwitter },
      { link: "https://github.com/collins-okafor", linkicon: FaGithub },
      {
        link: "https://web.facebook.com/profile.php?id=100006978586793",
        linkicon: FaFacebookF,
      },
    ],
    name: "Collins Okafor",
    profession: "Software Developer",
  },
  {
    image: Team2,
    linkarray: [
      {
        link: "",
        linkicon: FaLinkedinIn,
      },
      { link: "", linkicon: FaTwitter },
      { link: "", linkicon: FaGithub },
      { link: "", linkicon: FaFacebookF },
    ],
    name: "Favour",
    profession: "Software Developer",
  },
  {
    image: Team5,
    linkarray: [
      { link: "", linkicon: FaLinkedinIn },
      { link: "", linkicon: FaTwitter },
      { link: "", linkicon: FaGithub },
      { link: "", linkicon: FaFacebookF },
    ],
    name: "Standley",
    profession: "Software Developer",
  },
];
