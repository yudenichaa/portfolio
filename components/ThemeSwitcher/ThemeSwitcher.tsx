import { useState, useCallback, useContext } from 'react';
import styles from './theme-switcher.module.scss';
import TranslationContext from '../../context/TranslationContext';
import ThemeContext from '../../context/ThemeContext';
import { default as cn } from 'classnames';

const ThemeSwitcher: React.FC = () => {
  const translation = useContext(TranslationContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [ballText, setBallText] = useState('-');
  const onThemeChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      toggleTheme();
      setBallText(event.target.checked ? '+' : '-');
    },
    []
  );
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
        >
          {ballText}
        </div>
      </div>
      {translation.themeSwitcher.label}
    </label>
  );
};

export default ThemeSwitcher;
