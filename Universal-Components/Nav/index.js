import Image from "next/image";
import Link from "next/link";
import { useState, useCallback } from "react";
import { withTheme } from "styled-components";
import { NavDiv } from "./nav.style";

const Nav = ({ navArray, theme, component }) => {
  const [show, setShow] = useState(false);

  const HandleShow = useCallback(() => {
    setShow(!show);
  }, [show]);

  const HandleClick = useCallback(() => {
    setShow(false);
  }, []);

  return (
    <NavDiv color={theme} show={show} component={component}>
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
                  <div className={`${item.classname}`} onClick={HandleClick}>
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
