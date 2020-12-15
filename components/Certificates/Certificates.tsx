import styles from './certificates.module.scss';
import { useContext } from 'react';
import TranslationContext from '../../context/TranslationContext';
import ThemeContext from '../../context/ThemeContext';
import { default as cn } from 'classnames';

const Certificates: React.FC = () => {
  const translation = useContext(TranslationContext);
  const { theme } = useContext(ThemeContext);
  return (
    <div
      id="certificates"
      className={cn(styles.certificates, "padding-container", {
        [styles.certificates_light]: theme == 'light',
        [styles.certificates_dark]: theme == 'dark',
      })}
    >
      <h2 className="caption">
        {translation.certificates.caption}
      </h2>
      <div className={styles.certificates__content}>
        {translation.certificates.certificatesList.map((certificate) => (
          <div
            key={certificate.title}
            className={cn(styles.certificates__certificate, {
              [styles.certificates__certificate_light]: theme == 'light',
              [styles.certificates__certificate_dark]: theme == 'dark',
            })}
          >
            <a href={certificate.link} target="_blank">
              <img
                className={styles.certificates__image}
                src={certificate.imageURL}
                alt={`Certificate: ${certificate.title}`}
              />
            </a>
            <div className={styles['certificates__certificate-body']}>
              <h3 className={styles.certificates__title}>
                {certificate.title}
              </h3>
              <p className={styles.certificates__description}>
                {certificate.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
