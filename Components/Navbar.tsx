import Image from "next/image";
import Link from "next/link";
import styles from '../app/Navbar.module.css';

export default function Navbar() {
  return (
    <header className={styles.navbar}>
      <div className={styles.container}>
        <a className={styles.logoWrapper}>
          <Image
            className={styles.logo}
            src="/Nahyan sports logo.webp"
            width={2000}
            height={2000}
            alt="Logo"
          />
        </a>
        <nav className={styles.navLinks}>
          <Link href="/" className={styles.link}>Our Gallary</Link>
          <Link href="/Bats" className={styles.link}>Bats</Link>
          <Link href="/jersey" className={styles.link}>Jersey</Link>
          <Link href="/other" className={styles.link}>Other Items</Link>
        </nav>
      </div>
    </header>
  );
}
