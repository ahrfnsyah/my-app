// components/Navbar.tsx
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/components/Navbar/navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/" className={styles.logoLink}>
          <div className={styles.logoContent}>
            <Image src="/icons/logo2.png" alt="Logo" width={30} height={30} />
            <span className={styles.logoText}>VegeNation</span>
          </div>
        </Link>
      </div>
      <div className={styles.links}>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="#articles">Articles</Link>
        <Link href="#about">About</Link>
      </div>
    </nav>
  );
}
