import { FunctionComponent } from "react";
import styles from "./PorfolioHomeDesktop.module.css";
const PorfolioHomeDesktop: FunctionComponent = () => {
  return (
    <div className={styles.porfolioHomeDesktop}>
      <div className={styles.mainBackground} />
      <div className={styles.hiAllI}>Hi all. I am</div>
      <div className={styles.frontEndDeveloper}>{`> Front-end developer`}</div>
      <div className={styles.michealWeaver}>Micheal Weaver</div>
      <img
        className={styles.backgroundBlursIcon}
        alt=""
        src="/background-blurs.svg"
      />
      <div className={styles.youCanAlso}>
        // you can also see it on my Github page
      </div>
      <div className={styles.completeTheGame}>
        // complete the game to continue
      </div>
      <div className={styles.constGithublinkContainer}>
        <span className={styles.const}>const</span>
        <span className={styles.span}>{` `}</span>
        <span className={styles.githublink}>githubLink</span>
        <span className={styles.span}>{` = `}</span>
        <span>
          “
          <span className={styles.httpsgithubcomexampleurl}>
            https://github.com/example/url
          </span>
          ”
        </span>
      </div>
      <div className={styles.snakeGame}>
        <div className={styles.backgroundSnake} />
        <div className={styles.backgroundRules} />
        <div className={styles.hiThereContainer}>
          <p className={styles.hiThere}>// Hi there!</p>
          <p className={styles.hiThere}>// I am ... !</p>
          <p className={styles.blankLine}>&nbsp;</p>
          <p className={styles.name}>
            <span className={styles.githublink}>name</span>
            <span className={styles.span}>{` = `}</span>
            <span>“...”</span>
            <span className={styles.span}>;</span>
          </p>
          <p className={styles.age20}>
            <span>age</span>
            <span className={styles.span}>{` = `}</span>
            <span className={styles.span5}>20</span>
            <span className={styles.span}>;</span>
          </p>
        </div>
        <div className={styles.component2}>
          <div className={styles.a}>Next</div>
        </div>
        <img className={styles.boltUpLeftIcon} alt="" src="/boltupleft.svg" />
        <img
          className={styles.boltDownLeftIcon}
          alt=""
          src="/boltdownleft.svg"
        />
        <img className={styles.boltUpRightIcon} alt="" src="/boltupright.svg" />
        <img
          className={styles.boltDownRightIcon}
          alt=""
          src="/boltdownright.svg"
        />
        <div className={styles.button}>
          <div className={styles.a}>about_me</div>
        </div>
        <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
      </div>
      <div className={styles.header}>
        <div className={styles.michealWeaver1}>micheal-weaver</div>
        <div className={styles.contactMe}>_contact-me</div>
        <img className={styles.headerChild} alt="" src="/vector-261.svg" />
        <img className={styles.headerItem} alt="" src="/vector-34.svg" />
        <div className={styles.headerInner} />
        <div className={styles.headerTextParent}>
          <div className={styles.headerText}>
            <div className={styles.a}>_hello</div>
            <div className={styles.headerTextChild} />
          </div>
          <div className={styles.component5}>
            <div className={styles.a}>_about-me</div>
            <div className={styles.headerTextChild} />
          </div>
          <div className={styles.component5}>
            <div className={styles.a}>_projects</div>
            <div className={styles.headerTextChild} />
          </div>
        </div>
      </div>
      <div className={styles.headerUnderline} />
      <div className={styles.footer}>
        <img className={styles.footerChild} alt="" src="/vector-181.svg" />
        <img className={styles.frameIcon} alt="" src="/frame.svg" />
        <div className={styles.username}>@username</div>
        <div className={styles.findMeIn}>find me in:</div>
        <img className={styles.footerItem} alt="" src="/vector-7.svg" />
        <img className={styles.footerInner} alt="" src="/vector-141.svg" />
        <img className={styles.vectorIcon} alt="" src="/vector-141.svg" />
        <img className={styles.footerChild1} alt="" src="/vector-141.svg" />
        <div className={styles.socialMedia}>
          <img className={styles.frameIcon1} alt="" src="/frame4.svg" />
        </div>
        <div className={styles.socialMedia1}>
          <img className={styles.frameIcon1} alt="" src="/frame2.svg" />
        </div>
      </div>
      <div className={styles.porfolioHomeDesktopInner}>
        <div className={styles.frameChild} />
      </div>
      <div className={styles.porfolioHomeDesktopChild} />
    </div>
  );
};

export default PorfolioHomeDesktop;
