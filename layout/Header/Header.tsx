import styles from './header.module.scss';
import LanguageSwitcher from '../../components/LanguageSwitcher';
import ThemeSwitcher from '../../components/ThemeSwitcher';
import Navigation from '../../components/Navigation';


const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__controls}>
        <ThemeSwitcher />
        <LanguageSwitcher />
      </div>
      <Navigation />
    </header>
  );
};

export default Header;
