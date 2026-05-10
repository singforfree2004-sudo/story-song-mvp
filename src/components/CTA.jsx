import { GOOGLE_FORM_URL } from '../data/site.js';

export default function CTA() {
  return (
    <section className="section cta" aria-labelledby="cta-title">
      <div className="section__inner section__inner--narrow">
        <h2 id="cta-title">準備好把故事變成一首歌了嗎？</h2>
        <p>填寫表單後，我們會確認你的需求、方案與付款方式。</p>
        <a className="button button--primary" href={GOOGLE_FORM_URL} aria-label="開始填寫委託表單">
          開始填寫委託表單
        </a>
      </div>
    </section>
  );
}
