import { packages } from '../data/packages.js';
import { GOOGLE_FORM_URL } from '../data/site.js';

export default function Pricing() {
  return (
    <section className="section section--cream" id="pricing" aria-labelledby="pricing-title">
      <div className="section__inner">
        <h2 id="pricing-title">選一種方式，把故事變成歌</h2>
        <div className="pricing-grid">
          {packages.map((item) => (
            <article className={`price-card ${item.featured ? 'price-card--featured' : ''}`} key={item.name}>
              {item.featured && <span className="badge">最多人詢問</span>}
              <h3>{item.name}</h3>
              <p className="price-card__price">{item.price}</p>
              <p className="price-card__fit">{item.fit}</p>
              <ul>
                {item.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <a className="button button--full" href={GOOGLE_FORM_URL} aria-label={`${item.cta}：${item.name}`}>
                {item.cta}
              </a>
            </article>
          ))}
        </div>
        <p className="section-note">若為商業活動、品牌歌曲、廣告使用、公開發行或大量授權，請另外洽詢報價。</p>
      </div>
    </section>
  );
}
