import Image from "next/image";
import logo from "./../../../public/logo.jpg";
import styles from "./navbar.module.scss";
import Link from "next/link";

const Navbar = () => {
  const links = [
    {
      id: 1,
      title: "Home",
      url: "/",
    },
    {
      id: 2,
      title: "Services",
      url: "/services",
    },
    {
      id: 3,
      title: "Contact Us",
      url: "/contact",
    },
  ];
  return (
    <div className={styles.navbar}>
      <div className={styles.navbar__logo}>
        <Image src={logo} alt="logo" className={styles.navbar__img}></Image>
      </div>
      <div className={styles.navbar__menu}>
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.navbar__item}>
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
