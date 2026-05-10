import { GOOGLE_FORM_URL } from '../data/site.js';

export default function Hero() {
  return (
    <section className="hero section" aria-labelledby="hero-title">
      <div className="hero__glow" aria-hidden="true" />
      <div className="section__inner hero__grid">
        <div className="hero__content">
          <p className="eyebrow">故事成歌｜Song Your Story</p>
          <h1 id="hero-title">把你說不出口的話，寫成一首中文歌。</h1>
          <p className="hero__subtitle">
            生日、婚禮、告白、家人、寵物與人生紀念，都可以變成一首專屬歌曲。
          </p>
          <div className="hero__actions" aria-label="主要操作">
            <a className="button button--primary" href={GOOGLE_FORM_URL} aria-label="開始製作我的歌，前往委託表單">
              開始製作我的歌
            </a>
            <a className="button button--secondary" href="#demo" aria-label="先聽 Demo，前往試聽區">
              先聽 Demo
            </a>
          </div>
          <p className="hero__note">
            本服務為 AI 輔助之客製歌曲製作服務，由真人進行故事整理、歌詞企劃、曲風設定與成品篩選。
          </p>
        </div>
        <div className="hero__panel" aria-label="服務重點摘要">
          <span className="hero__disc" aria-hidden="true" />
          <p>一段回憶</p>
          <strong>一首只送給他的歌</strong>
          <small>客製歌詞、曲風設定、Demo 試聽、雲端交付</small>
        </div>
      </div>
    </section>
  );
}
