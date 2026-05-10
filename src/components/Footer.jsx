import { CONTACT_EMAIL, LINE_ID } from '../data/site.js';
import { appPath } from '../utils/paths.js';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="section__inner site-footer__inner">
        <div>
          <strong>故事成歌｜Song Your Story</strong>
          <p>客製中文歌曲製作服務</p>
        </div>
        <nav aria-label="頁尾連結">
          <a href={appPath('/terms')}>服務條款</a>
          <a href={appPath('/voice-consent')}>本人聲音授權聲明</a>
          <a href={`mailto:${CONTACT_EMAIL}`}>聯絡我們：{CONTACT_EMAIL}</a>
          <span>LINE：{LINE_ID}</span>
        </nav>
      </div>
    </footer>
  );
}
