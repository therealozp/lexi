import Image from "next/image";
import { Button } from "@material-ui/core";
import clsx from "clsx";
import Link from "next/link";

export default function Landing({ styles, innerRef }) {
  return (
    <div ref={innerRef}>
      <div className={styles.landing}>
        <div className={styles.landing__nav}>
          <div className={styles.landing__title}>
            <div className={styles.landing__logo}>
              <Image
                src={"/images/lexi.svg"}
                width={62}
                height={36}
                alt="logo"
              />
            </div>
            Lexi
          </div>
          <ul className={styles.landing__nav__links}>
            <li>
              <a className={styles.landing__nav__link__active}>Home</a>
              <Link href="/quizzes">
                <a>Quizzes</a>
              </Link>

              <Link href="/about">
                <a>About</a>
              </Link>
            </li>
          </ul>
        </div>

        <div className={styles.landing__hero}>
          <div className={styles.landing__image__container}>
            <Image
              src="/images/landing.svg"
              alt="landing image"
              layout="fill"
              className={styles.landing__image}
            />
          </div>

          <div className={styles.landing__call_to_action}>
            <p className={styles.landing__call_to_action_catchphrase}>
              Improve your vocabulary
            </p>
            <Button
              className={styles.landing__call_to_action_button}
              onClick={() => {
                window.location.href = "/quizzes";
              }}>
              get started
            </Button>
            <Button
              className={clsx([
                styles.landing__call_to_action_button,
                styles.landing__call_to_action_button_quick_test,
              ])}
              onClick={() => {
                window.location.href = "/quizzes/mode/synonym";
              }}>
              quick test
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
