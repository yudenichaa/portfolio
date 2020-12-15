import styles from './experience.module.scss';
import { useContext } from 'react';
import TranslationContext from '../../context/TranslationContext';
import ThemeContext from '../../context/ThemeContext';
import { default as cn } from 'classnames';

const Experience: React.FC = () => {
  const translation = useContext(TranslationContext);
  const { theme } = useContext(ThemeContext);
  return (
    <div
      id="experience"
      className={cn(styles.experience, 'padding-container', {
        [styles.experience_light]: theme == 'light',
        [styles.experience_dark]: theme == 'dark',
      })}
    >
      <h2 className="caption">{translation.experience.caption}</h2>
      <div className={styles.experience__container}>
        <div className={styles.experience__line} />
        <div className={styles.experience__content}>
          {translation.experience.experienceList.map((experienceItem) => (
            <div
              key={experienceItem.title}
              className={cn(styles.experience__item, {
                [styles.experience__item_light]: theme == 'light',
                [styles.experience__item_dark]: theme == 'dark',
              })}
            >
              <h3 className={styles['experience__item-title']}>
                {experienceItem.title}
              </h3>
              <p className={styles['experience__item-period']}>
                {experienceItem.period}
              </p>
              <p className={styles['experience__item-description']}>
                {experienceItem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
