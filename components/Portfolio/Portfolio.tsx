import styles from './portfolio.module.scss';
import { useContext } from 'react';
import TranslationContext from '../../context/TranslationContext';
import ThemeContext from '../../context/ThemeContext';
import { default as cn } from 'classnames';

const Portfolio = () => {
  const translation = useContext(TranslationContext);
  const { theme } = useContext(ThemeContext);
  return (
    <div
      id="portfolio"
      className={cn(styles.portfolio, "padding-container", {
        [styles.portfolio_light]: theme == 'light',
        [styles.portfolio_dark]: theme == 'dark',
      })}
    >
      <h2 className="caption">
        {translation.portfolio.caption}
      </h2>
      <div className={styles.portfolio__content}>
        {translation.portfolio.portfolioList.map((portfolioItem) => (
          <div
            key={portfolioItem.title}
            className={cn(styles.portfolio__item, {
              [styles.portfolio__item_light]: theme == 'light',
              [styles.portfolio__item_dark]: theme == 'dark',
            })}
          >
            <a href={portfolioItem.link} target="_blank">
              <img
                className={styles['portfolio__item-image']}
                src={portfolioItem.imageURL}
                alt={portfolioItem.title}
              />
            </a>
            <div className={styles['portfolio__item-body']}>
              <h3 className={styles['portfolio__item-title']}>
                {portfolioItem.title}
              </h3>
              <p className={styles['portfolio__item-description']}>
                {portfolioItem.description}
              </p>
              <div className={styles['portfolio__item-technologies']}>
                {portfolioItem.technologies.map((technology) => (
                  <span
                    key={technology}
                    className={cn(styles['portfolio__item-technologie'], {
                      [styles['portfolio__item-technologie_light']]:
                        theme == 'light',
                      [styles['portfolio__item-technologie_dark']]:
                        theme == 'dark',
                    })}
                  >
                    {technology}
                  </span>
                ))}
              </div>
              <a
                className={cn(styles['portfolio__item-sources'], {
                  [styles['portfolio__item-sources_light']]: theme == 'light',
                  [styles['portfolio__item-sources_dark']]: theme == 'dark',
                })}
                href={portfolioItem.sources.link}
                target="_blank"
              >
                <img
                  src={portfolioItem.sources.imageURL}
                  alt={portfolioItem.sources.sourceCodeImageAlt}
                />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
