import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { withTheme } from "styled-components";
import { NavDiv } from "./nav.style";

const Nav = ({ navArray, theme }) => {
  const [show, setShow] = useState(false);

  const HandleShow = () => {
    setShow(!show);
  };

  return (
    <NavDiv color={theme} show={show}>
      {navArray.map((item, key) => (
        <div key={key} className={`${item.classMain}`}>
          {item.section.map((item, key) => (
            <div key={key} className={`${item.classBody}`}>
              {item.image ? (
                <div className={`${item.className}`}>
                  <Image
                    src={item.image}
                    alt={"logo"}
                    // width={"100"}
                    // height={"50"}
                    placeholder="blur"
                    priority
                    blurDataURL
                  />
                  <div></div>
                </div>
              ) : item.icon ? (
                <div className={`${item.classname}`} onClick={HandleShow}>
                  <item.icon className={`${item.classItem}`} />
                </div>
              ) : (
                item.link && (
                  <div className={`${item.classname}`}>
                    <Link href={item.link}>
                      <a>
                        <div className={`${item.classItem}`}>
                          <p>{item.linkText}</p>
                        </div>
                      </a>
                    </Link>
                  </div>
                )
              )}
              <div className={`${item.classItem}`}>
                <h4>{item.text}</h4>
              </div>
            </div>
          ))}
        </div>
      ))}
    </NavDiv>
  );
};

export default withTheme(Nav);
