import Footer from "@components/Commons/Footer";
import Navbar from "@components/Commons/Navbar";
import Head from "next/head";
import { Typography } from "@material-ui/core";
import theme from "src/theme";
import styles from "@styles/AboutPage.module.scss";
import Image from "next/image";
import Link from "next/link";

function CreditIcon({ src, width, height, alt, className }) {
  return (
    <>
      <div className={className}>
        <Image src={src} width={width} height={height} alt={alt} />
      </div>
    </>
  );
}

export default function AboutPage() {
  return (
    <html className={styles.html}>
      <>
        <Head>
          <title>About Lexi</title>
        </Head>

        <Navbar activeNavLink="about" />
        <div style={{ ...theme.mixins.toolbar }} />
        <div className={styles.aboutUs}>
          <div className={styles.aboutWrapper}>
            <div className={styles.bigText}>
              Learn vocabulary. <span className={styles.span1}>Quickly.</span>{" "}
              <span className={styles.span2}>Effectively.</span>
            </div>
            <Typography className={styles.typographyBody}>
              Lexi is a quiz app equipped with an ever-growing library of words
              that will give you great thrill in conquering the quest of
              expanding your vocabulary.
            </Typography>
          </div>
        </div>
        <div className={styles.aboutUs}>
          <div className={styles.aboutWrapperPurple}>
            <Typography className={styles.bigText}>Why Lexi?</Typography>
            <Typography className={styles.typographyBody}>
              Lexi&apos;s developers are both from non-English-speaking
              countries.
              <br />
              Let&apos;s be real, the hardest part of learing a language is
              getting used to the common words and expressions native people
              use. The toughest English tests demands&apos; are even greater:
              all the lexis they used were probaby pulled from random pages of
              some Ivy League college textbook - and crunching the dictionaries
              to learn them is demoralizing for some. That&apos;s why we created
              this, to aid English learners out there searching for another way
              to boost their vocabulary through fun quizzes.
            </Typography>
          </div>
        </div>
        <div className={styles.aboutUs}>
          <div className={styles.aboutWrapperPurple}>
            <Typography className={styles.bigText}>Inspirations</Typography>
            <Typography className={styles.typographyBody}>
              1,000,000 English multiple choice questions
              <br />
              Painful hours sitting looking up the dictionary for new words
              <br />
              Merriam-Webster&apos;s quizzes
              <br />
              Like the art? Check out{" "}
              <Link href="http://illustrations.co/">
                <a className={styles.links}>illustrations.co</a>
              </Link>{" "}
              and{" "}
              <Link href="https://instagram.com/m0ne_t?utm_medium=copy_link">
                <a className={styles.links}>m0ne_t</a>
              </Link>{" "}
              on Instagram!
            </Typography>
          </div>
        </div>
        <div className={styles.aboutUs}>
          <div className={styles.aboutWrapper}>
            <Typography className={styles.bigText}>Credits</Typography>
            <div>
              <div className={styles.creditsIconsContainer}>
                <CreditIcon
                  src="/images/apollo.svg"
                  width={100}
                  height={100}
                  alt="credit"
                  className={styles.creditIcon}
                />
                <CreditIcon
                  src="/images/graphql.svg"
                  width={100}
                  height={100}
                  alt="credit"
                  className={styles.creditIcon}
                />
                <CreditIcon
                  src="/images/react.svg"
                  width={100}
                  height={100}
                  alt="credit"
                  className={styles.creditIcon}
                />
                <CreditIcon
                  src="/images/strapi-2.svg"
                  width={100}
                  height={100}
                  alt="credit"
                  className={styles.creditIcon}
                />
                <CreditIcon
                  src="/images/wvl.svg"
                  width={100}
                  height={100}
                  alt="credit"
                  className={styles.creditIcon}
                />
                <CreditIcon
                  src="/images/next.svg"
                  width={100}
                  height={100}
                  alt="credit"
                  className={styles.creditIcon}
                />
                <CreditIcon
                  src="/images/mUI.svg"
                  width={100}
                  height={100}
                  alt="credit"
                  className={styles.creditIcon}
                />
                <CreditIcon
                  src="/images/heroku-4.svg"
                  width={100}
                  height={100}
                  alt="credit"
                  className={styles.creditIcon}
                />
                <CreditIcon
                  src="/images/storyblocks.png"
                  width={100}
                  height={100}
                  alt="credit"
                  className={styles.creditIcon}
                />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    </html>
  );
}
