import styles from './about-me.module.scss';
import { useContext } from 'react';
import TranslationContext from '../../context/TranslationContext';
import ThemeContext from '../../context/ThemeContext';
import { default as cn } from 'classnames';

const AboutMe: React.FC = () => {
  const translation = useContext(TranslationContext);
  const { theme } = useContext(ThemeContext);
  return (
    <div
      id="aboutMe"
      className={cn(styles['about-me'], 'padding-container', {
        [styles['about-me_light']]: theme == 'light',
        [styles['about-me_dark']]: theme == 'dark',
      })}
    >
      <h2 className="caption">{translation.aboutMe.caption}</h2>
      <div className={styles['about-me__content']}>
        <div className={styles['about-me__text']}>
          {translation.aboutMe.text.map((paragraph, index) => (
            <p key={index} className={styles['about-me__p']}>
              {paragraph}
            </p>
          ))}
        </div>

        <img
          src={translation.aboutMe.photo.url}
          alt={translation.aboutMe.photo.alt}
          className={styles['about-me__photo']}
        />
      </div>
    </div>
  );
};

export default AboutMe;
