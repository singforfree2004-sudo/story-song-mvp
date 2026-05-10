import { useState } from 'react';
import { demos } from '../data/demos.js';

function Cover({ demo }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="demo-card__placeholder" role="img" aria-label={`${demo.title} 封面尚未放入`}>
        <span>封面待放入</span>
      </div>
    );
  }

  return <img src={demo.coverSrc} alt={demo.coverAlt} onError={() => setFailed(true)} loading="lazy" />;
}

export default function DemoPlayer() {
  return (
    <section className="section section--dark" id="demo" aria-labelledby="demo-title">
      <div className="section__inner">
        <div className="section-heading">
          <h2 id="demo-title">先聽聽，故事可以變成什麼樣子</h2>
          <p>以下為示範歌曲，正式委託時會依照你的故事、對象與使用場合客製。</p>
        </div>
        <div className="demo-list">
          {demos.map((demo) => (
            <article className="demo-card" key={demo.title}>
              <div className="demo-card__cover">
                <Cover demo={demo} />
              </div>
              <div className="demo-card__body">
                <h3>{demo.title}</h3>
                <p>{demo.subtitle}</p>
                <dl className="meta-list">
                  <div>
                    <dt>情緒</dt>
                    <dd>{demo.mood}</dd>
                  </div>
                  <div>
                    <dt>曲風</dt>
                    <dd>{demo.style}</dd>
                  </div>
                </dl>
                <audio controls preload="none" src={demo.audioSrc} aria-label={`${demo.title} 試聽播放器`}>
                  你的瀏覽器不支援 HTML5 audio 播放器。
                </audio>
                <details className="lyrics-panel">
                  <summary>查看歌詞</summary>
                  <pre>{demo.lyrics}</pre>
                </details>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
