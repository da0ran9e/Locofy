import { FunctionComponent, useEffect } from "react";
import styles from "./PorfolioContactDesktop.module.css";
const PorfolioContactDesktop: FunctionComponent = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  return (
    <div className={styles.porfolioContactDesktop}>
      <div className={styles.mainBackground} />
      <div className={styles.constButtonContainer}>
        <p className={styles.constButtonDocumentquerys}>
          <span className={styles.const}>const</span>
          <span className={styles.span}>{` `}</span>
          <span className={styles.button}>button</span>
          <span className={styles.span}>{` `}</span>
          <span className={styles.const}>=</span>
          <span className={styles.span}>{` `}</span>
          <span className={styles.button}>document</span>
          <span className={styles.span}>.</span>
          <span>querySelector</span>
          <span className={styles.span}>(</span>
          <span className={styles.sendbtn}>'#sendBtn'</span>
          <span className={styles.span}>);</span>
        </p>
        <p className={styles.p}></p>
        <p className={styles.constButtonDocumentquerys}>
          <span className={styles.const}>const</span>
          <span className={styles.span}>{` `}</span>
          <span>message</span>
          <span className={styles.span}>{` `}</span>
          <span className={styles.const}>=</span>
          <span className={styles.span}>{` {
`}</span>
        </p>
        <p className={styles.nameJonathanDavis}>
          <span className={styles.span}> </span>
          <span className={styles.button}>name</span>
          <span className={styles.span}>{`: `}</span>
          <span>"Jonathan Davis"</span>
          <span className={styles.span}>,</span>
        </p>
        <p className={styles.constButtonDocumentquerys}>
          <span className={styles.span}> </span>
          <span>email</span>
          <span className={styles.span}>{`: `}</span>
          <span className={styles.sendbtn}>""</span>
          <span className={styles.span}>,</span>
        </p>
        <p className={styles.p}>
          <span className={styles.span}> </span>
          <span className={styles.button}>message</span>
          <span className={styles.span}>{`: `}</span>
          <span className={styles.sendbtn}>""</span>
          <span>,</span>
        </p>
        <p className={styles.nameJonathanDavis}>
          <span>{`	date: `}</span>
          <span>"Thu 21 Apr"</span>
          <span className={styles.span}></span>
        </p>
        <p className={styles.p}>{`}
`}</p>
        <p className={styles.p}></p>
        <p className={styles.constButtonDocumentquerys}>
          <span className={styles.button}>button</span>
          <span className={styles.span}>.</span>
          <span>addEventListener</span>
          <span className={styles.span}>(</span>
          <span className={styles.sendbtn}>'click'</span>
          <span className={styles.span}>{`, () `}</span>
          <span className={styles.const}>{`=>`}</span>
          <span className={styles.span}>{` {
`}</span>
        </p>
        <p className={styles.constButtonDocumentquerys}>
          <span className={styles.span}> </span>
          <span className={styles.button}>form</span>
          <span className={styles.span}>.</span>
          <span className={styles.button}>send</span>
          <span className={styles.span}>(</span>
          <span>message</span>
          <span className={styles.span}>);</span>
        </p>
        <p className={styles.p}>{`})`}</p>
      </div>
      <div className={styles.div}>
        <p className={styles.constButtonDocumentquerys}>1</p>
        <p className={styles.constButtonDocumentquerys}>2</p>
        <p className={styles.constButtonDocumentquerys}>3</p>
        <p className={styles.constButtonDocumentquerys}>4</p>
        <p className={styles.constButtonDocumentquerys}>5</p>
        <p className={styles.constButtonDocumentquerys}>6</p>
        <p className={styles.constButtonDocumentquerys}>7</p>
        <p className={styles.constButtonDocumentquerys}>8</p>
        <p className={styles.constButtonDocumentquerys}>9</p>
        <p className={styles.constButtonDocumentquerys}>10</p>
        <p className={styles.constButtonDocumentquerys}>11</p>
        <p className={styles.constButtonDocumentquerys}>12</p>
      </div>
      <div className={styles.contacts}>contacts</div>
      <div className={styles.findMeAlsoIn}>find-me-also-in</div>
      <div className={styles.contacts1}>contacts</div>
      <img
        className={styles.porfolioContactDesktopChild}
        alt=""
        src="/vector-56.svg"
      />
      <img
        className={styles.porfolioContactDesktopItem}
        alt=""
        src="/vector-60.svg"
      />
      <img
        className={styles.porfolioContactDesktopInner}
        alt=""
        src="/vector-57.svg"
      />
      <img className={styles.vectorIcon} alt="" src="/vector-58.svg" />
      <img
        className={styles.porfolioContactDesktopChild1}
        alt=""
        src="/vector-61.svg"
      />
      <img
        className={styles.porfolioContactDesktopChild2}
        alt=""
        src="/vector-61.svg"
      />
      <img className={styles.vectorIcon1} alt="" src="/vector.svg" />
      <img className={styles.vectorIcon2} alt="" src="/vector1.svg" />
      <img className={styles.mouseIcon} alt="" src="/mouseicon.svg" />
      <img
        className={styles.porfolioContactDesktopChild3}
        alt=""
        src="/vector-59.svg"
      />
      <div className={styles.rectangleDiv} />
      <div className={styles.youtubeChannel}>YouTube channel</div>
      <div className={styles.gurushotsProfile}>GuruShots profile</div>
      <div className={styles.instagramAccaunt}>Instagram accaunt</div>
      <div className={styles.twichProfile}>Twich profile</div>
      <img className={styles.closeIcon} alt="" src="/closeicon.svg" />
      <div className={styles.name1}>_name:</div>
      <div className={styles.email1}>_email:</div>
      <div className={styles.message2}>_message:</div>
      <div className={styles.usergmailcom}>user@gmail.com</div>
      <div className={styles.div1}>+3598246359</div>
      <img className={styles.mailIcon} alt="" src="/mailicon.svg" />
      <img className={styles.phoneIcon} alt="" src="/phoneicon.svg" />
      <div className={styles.header4}>
        <div className={styles.michealWeaver}>micheal-weaver</div>
        <div className={styles.contactMe}>_contact-me</div>
        <img className={styles.header4Child} alt="" src="/vector-26.svg" />
        <img className={styles.header4Item} alt="" src="/vector-34.svg" />
        <div className={styles.header4Inner} />
        <button
          className={styles.headerTextParent}
          autoFocus
          data-animate-on-scroll
        >
          <div className={styles.headerText}>
            <div className={styles.hellp}>_hello</div>
            <div className={styles.headerTextChild} />
          </div>
          <div className={styles.headerText}>
            <div className={styles.hellp}>_about-me</div>
            <div className={styles.headerTextChild} />
          </div>
          <div className={styles.headerText}>
            <div className={styles.hellp}>_projects</div>
            <div className={styles.headerTextChild} />
          </div>
        </button>
      </div>
      <div className={styles.headerUnderline3} />
      <div className={styles.footer4}>
        <img className={styles.footer4Child} alt="" src="/vector-18.svg" />
        <img className={styles.frameIcon} alt="" src="/frame.svg" />
        <div className={styles.username}>@username</div>
        <div className={styles.findMeIn}>find me in:</div>
        <img className={styles.footer4Item} alt="" src="/vector-7.svg" />
        <img className={styles.footer4Inner} alt="" src="/vector-14.svg" />
        <img className={styles.footer4Child1} alt="" src="/vector-14.svg" />
        <img className={styles.footer4Child2} alt="" src="/vector-14.svg" />
        <div className={styles.socialMedia}>
          <img className={styles.frameIcon1} alt="" src="/frame1.svg" />
        </div>
        <div className={styles.socialMedia1}>
          <img className={styles.frameIcon1} alt="" src="/frame2.svg" />
        </div>
      </div>
      <div className={styles.porfolioContactDesktopChild4} />
      <div className={styles.porfolioContactDesktopChild5} />
      <div className={styles.porfolioContactDesktopChild6} />
      <div className={styles.button2}>
        <div className={styles.startGame}>submit-message</div>
      </div>
      <div className={styles.jonathanDavis}>Jonathan Davis |</div>
      <img className={styles.vectorIcon3} alt="" src="/vector2.svg" />
      <img className={styles.vectorIcon4} alt="" src="/vector2.svg" />
      <img className={styles.vectorIcon5} alt="" src="/vector2.svg" />
      <img className={styles.vectorIcon6} alt="" src="/vector2.svg" />
    </div>
  );
};

export default PorfolioContactDesktop;
