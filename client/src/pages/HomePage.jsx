import { Landing, QuizMode, About } from "@components/HomePage";
import Footer from "@components/Commons/Footer";
import styles from "@styles/Home.module.scss";
import { Button, Divider } from "@material-ui/core";
import clsx from "clsx";
import Navbar, { styles as navbarStyles } from "@components/Commons/Navbar";
import { useEffect, useRef } from "react";

export default function Home() {
  const navbarRef = useRef();
  const landingRef = useRef();

  useEffect(() => {
    if (!navbarRef || !landingRef) {
      return;
    }

    // initialize observer
    const options = {
      rootMargin: "-50px 0px 0px 0px",
      thershold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      if (entries.length == 0) {
        return;
      }

      const { isIntersecting } = entries[0];
      navbarRef.current.classList.toggle(navbarStyles.hidden, isIntersecting);
    }, options);

    observer.observe(landingRef.current);

    observer;
    return () => {};
  }, [navbarRef, landingRef]);

  return (
    <div className={styles.home}>
      <Navbar innerRef={navbarRef} />
      <Landing styles={styles} innerRef={landingRef} />
      <QuizMode styles={styles} />
      <Divider variant="middle" />
      <About styles={styles} />
      {/* <QuizCount /> */}
      <Footer>
        <div className={styles.footer__call_to_action}>
          <Button className={styles.call_to_action_button}>get started</Button>
          <Button
            className={clsx([
              styles.call_to_action_button,
              styles.call_to_action_button_quick_test,
            ])}
          >
            quick test
          </Button>
        </div>
      </Footer>
    </div>
  );
}