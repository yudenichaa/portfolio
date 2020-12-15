import styles from './language-switcher.module.scss';
import { useCallback, useState, useContext } from 'react';
import { locales } from '../../locales.json';
import { useRouter } from 'next/router';
import TranslationContext from '../../context/TranslationContext';

const LanguageSwitcher: React.FC = () => {
  const router = useRouter();
  const translation = useContext(TranslationContext);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const onLanguageSwitcherClick = useCallback(
    () => setIsDropdownOpen((isDropdownOpen) => !isDropdownOpen),
    []
  );

  const onLocaleChange = useCallback(
    (locale) => {
      if (locale != router.locale) {
        router.push('/', '/', { locale });
      }
    },
    [router]
  );

  return (
    <div className={styles['language-switcher']}>
      <img
        className={styles['language-switcher__translate-icon']}
        src="/images/language_switcher/translate.svg"
        alt={translation.languageSwitcher.iconAlt}
      />
      <div
        onClick={onLanguageSwitcherClick}
        className={styles['language-switcher__language']}
        style={{
          borderBottomLeftRadius: isDropdownOpen ? '0' : '0.5rem',
          borderBottomRightRadius: isDropdownOpen ? '0' : '0.5rem',
          borderBottom: isDropdownOpen
            ? '0.075rem solid #d6d6d6'
            : '0.075rem solid #afafaf',
          transitionDelay: isDropdownOpen ? '0s' : '0.1s',
        }}
      >
        {locales[router.locale]}
        <div className={styles['language-switcher__arrow']} />
        <div className={styles['language-switcher__dropdown-container']}>
          <div
            style={{
              transform: isDropdownOpen ? 'translateY(0)' : 'translateY(-100%)',
              transitionDelay: isDropdownOpen ? '0.05s' : '0s',
            }}
            className={styles['language-switcher__dropdown']}
          >
            {Object.entries(locales).map(([localeName, humanLocaleName]) => (
              <div
                onClick={() => onLocaleChange(localeName)}
                key={localeName}
                className={styles['language-switcher__dropdown-option']}
              >
                {humanLocaleName}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
