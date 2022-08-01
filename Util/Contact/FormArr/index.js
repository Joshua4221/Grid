import { FiUser, FiBook } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { BiMessageRounded } from "react-icons/bi";

const FormArray = [
  {
    multiple_input: [
      {
        label: "Your Name:",
        type: "text",
        name: "name",
        icons: FiUser,
        placeholder: "Name:",
        classbody: "inputbody",
        classname: "multiple-input",
        labelclassname: "labelclass",
      },
      {
        label: "Email:",
        type: "text",
        name: "emila",
        icons: HiOutlineMail,
        placeholder: "Email:",
        classbody: "inputbody",
        classname: "multiple-input",
        labelclassname: "labelclass",
      },
    ],
  },
  {
    label: "Your Question:",
    type: "text",
    name: "question",
    icons: FiBook,
    placeholder: "Subject:",
    classbody: "inputbody",
    classname: "input",
  },
  {
    description: "question",
    label: "Your Comment:",
    name: "message",
    icons: BiMessageRounded,
    cols: 10,
    rows: 8,
    placeholder: "Message:",
    classbody: "inputbody",
    classname: "input",
  },
  {
    type: "submit",
    value: "Send Message",
    classbody: "submitbody",
    classname: "submit",
  },
];

export default FormArray;
