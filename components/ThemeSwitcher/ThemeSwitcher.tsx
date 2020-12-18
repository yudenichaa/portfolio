import { useCallback, useContext } from 'react';
import styles from './theme-switcher.module.scss';
import TranslationContext from '../../context/TranslationContext';
import ThemeContext from '../../context/ThemeContext';
import { default as cn } from 'classnames';

const ThemeSwitcher: React.FC = () => {
  const translation = useContext(TranslationContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const onThemeChange = useCallback(() => toggleTheme(), []);
  return (
    <label
      className={cn(styles['theme-switcher'], {
        [styles['theme-switcher_light']]: theme == 'light',
        [styles['theme-switcher_dark']]: theme == 'dark',
      })}
    >
      <input
        onChange={onThemeChange}
        className={styles['theme-switcher__checkbox']}
        type="checkbox"
      />
      <img
        className={cn(styles['theme-switcher__icon'], {
          [styles['theme-switcher__icon_light']]: theme == 'light',
          [styles['theme-switcher__icon_dark']]: theme == 'dark',
        })}
        src="/images/theme_switcher/sun.svg"
        alt={translation.themeSwitcher.lightIconAlt}
      />
      <div
        className={cn(styles['theme-switcher__background'], {
          [styles['theme-switcher__background_light']]: theme == 'light',
          [styles['theme-switcher__background_dark']]: theme == 'dark',
        })}
      >
        <div
          className={cn(styles['theme-switcher__ball'], {
            [styles['theme-switcher__ball_light']]: theme == 'light',
            [styles['theme-switcher__ball_dark']]: theme == 'dark',
          })}
        />
      </div>
      <img
        className={cn(styles['theme-switcher__icon'], {
          [styles['theme-switcher__icon_light']]: theme == 'light',
          [styles['theme-switcher__icon_dark']]: theme == 'dark',
        })}
        src="/images/theme_switcher/moon.svg"
        alt={translation.themeSwitcher.darkIconAlt}
      />
    </label>
  );
};

export default ThemeSwitcher;
