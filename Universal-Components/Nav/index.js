import Image from "next/image";
import Link from "next/link";
import { withTheme } from "styled-components";
import { NavDiv } from "./nav.style";

const Nav = ({ navArray, theme }) => {
  return (
    <NavDiv color={theme}>
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
              ) : (
                item.link && (
                  <div>
                    <Link href={item.link}>
                      <a>{item.linkText}</a>
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
