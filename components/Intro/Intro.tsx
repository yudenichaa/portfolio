import styles from './intro.module.scss';
import { useContext } from 'react';
import TranslationContext from '../../context/TranslationContext';
import ThemeContext from '../../context/ThemeContext';
import { default as cn } from 'classnames';

const Intro: React.FC = () => {
  const translation = useContext(TranslationContext);
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={cn(styles.intro, {
        [styles.intro_light]: theme == 'light',
        [styles.intro_dark]: theme == 'dark',
      })}
    >
      <div className={styles.intro__content}>
        <div className={styles['intro__name-container']}>
          <h1 className={styles.intro__name}>{translation.intro.name}</h1>
        </div>
        <hr
          className={cn(styles.intro__line, {
            [styles.intro__line_light]: theme == 'light',
            [styles.intro__line_dark]: theme == 'dark',
          })}
        />
        <div className={styles['intro__proffesion-container']}>
          <h2 className={styles.intro__profession}>
            {translation.intro.proffesion}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Intro;
