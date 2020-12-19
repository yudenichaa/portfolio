import styles from './skills.module.scss';
import { useContext } from 'react';
import TranslationContext from '../../context/TranslationContext';
import ThemeContext from '../../context/ThemeContext';
import { default as cn } from 'classnames';

const Skills: React.FC = () => {
  const translation = useContext(TranslationContext);
  const { theme } = useContext(ThemeContext);
  return (
    <div
      id="skills"
      className={cn(styles.skills, 'padding-container', {
        [styles.skills_light]: theme == 'light',
        [styles.skills_dark]: theme == 'dark',
      })}
    >
      <h2 className="caption">{translation.skills.caption}</h2>
      <div className={styles.skills__content}>
        {translation.skills.skillsList.map((skill) => (
          <div
            key={skill}
            className={cn(styles.skills__skill, {
              [styles.skills__skill_light]: theme == 'light',
              [styles.skills__skill_dark]: theme == 'dark',
            })}
          >
            <p className={styles['skills__skill-text']}>{skill}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
