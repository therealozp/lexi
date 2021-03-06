import Image from "next/image";
import clsx from "clsx";
import Link from "next/link";

export default function About({ styles }) {
  return (
    <div className={clsx([styles.section, styles.about])}>
      <div className={styles.about__header}>
        <div className={styles.about__header__text}>About</div>
        <Image
          src="/images/pirahna.svg"
          alt="owl"
          width={150}
          height={150}
          className={styles.about__header__image}
        />
      </div>
      <div className={styles.about__text}>
        Lexi is an online app for you to take quizzes that expands your
        vocabulary. Let&apos;s be real, vocabulary is hard, but we have designed
        our quizzes to help you improve!
        <br />
        <Link href="/about">
          <a>Learn More</a>
        </Link>
      </div>
    </div>
  );
}
