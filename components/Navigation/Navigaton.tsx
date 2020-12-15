import styles from './navigation.module.scss';
import { useContext } from 'react';
import TranslationContext from '../../context/TranslationContext';
import ThemeContext from '../../context/ThemeContext';
import { default as cn } from 'classnames';

const Navigation: React.FC = () => {
  const translation = useContext(TranslationContext);
  const { theme } = useContext(ThemeContext);

  return (
    <nav
      className={cn(styles.navigation, {
        [styles.navigation_light]: theme == 'light',
        [styles.navigation_dark]: theme == 'dark',
      })}
    >
      <ul className={styles.navigation__list}>
        {translation.navigation.navigationItems.map((navigationItem) => (
          <li key={navigationItem.text}>
            <a
              className={styles['navigation__list-link']}
              href={navigationItem.link}
            >
              {navigationItem.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
