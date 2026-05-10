import { appPath } from '../utils/paths.js';

export default function VoiceNotice() {
  return (
    <section className="section section--voice" aria-labelledby="voice-title">
      <div className="section__inner voice-box">
        <div>
          <p className="eyebrow">聲音使用聲明</p>
          <h2 id="voice-title">如果想用自己的聲音唱，可以嗎？</h2>
          <p>
            可以，但必須是本人聲音，或已取得聲音本人明確授權。
            本服務不接受模仿名人、藝人、網紅、親友、已故者或任何未授權第三人之聲音。
            若選擇 AI 本人聲音紀念版，委託人需完成聲音授權確認，並承諾提供之聲音素材合法且已取得必要同意。
          </p>
        </div>
        <a className="button button--primary" href={appPath('/voice-consent')} aria-label="查看本人聲音授權聲明">
          查看本人聲音授權聲明
        </a>
      </div>
    </section>
  );
}
