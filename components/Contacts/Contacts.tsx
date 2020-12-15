import styles from './contacts.module.scss';
import { useContext } from 'react';
import TranslationContext from '../../context/TranslationContext';
import ThemeContext from '../../context/ThemeContext';
import { default as cn } from 'classnames';

const Contacts: React.FC = () => {
  const translation = useContext(TranslationContext);
  const { theme } = useContext(ThemeContext);
  return (
    <div
      id="contacts"
      className={cn(styles.contacts, "padding-container", {
        [styles.contacts_light]: theme == 'light',
        [styles.contacts_dark]: theme == 'dark',
      })}
    >
      {translation.contacts.map((contact) => (
        <a
          key={contact.text}
          href={contact.link}
          target="_blank"
          className={cn(styles['contacts__contact'], {
            [styles['contacts__contact_light']]: theme == 'light',
            [styles['contacts__contact_dark']]: theme == 'dark',
          })}
        >
          <img
            className={styles['contacts__contact-icon']}
            src={contact.image.url}
            alt={contact.image.alt}
          />
          <p className={styles['contacts__contact-text']}>{contact.text}</p>
        </a>
      ))}
    </div>
  );
};

export default Contacts;
