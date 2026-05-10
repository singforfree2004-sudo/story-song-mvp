import Footer from '../components/Footer.jsx';
import { appPath } from '../utils/paths.js';

export default function VoiceConsent() {
  return (
    <>
      <main className="legal-page">
        <div className="section__inner section__inner--narrow">
          <a className="back-link" href={appPath('/')}>回首頁</a>
          <h1>本人聲音授權聲明</h1>
          <section className="legal-section">
            <h2>一、本人聲音原則</h2>
            <p>本服務僅接受本人聲音，或已取得聲音本人明確授權之聲音素材。</p>
          </section>
          <section className="legal-section">
            <h2>二、禁止事項</h2>
            <p>委託人不得使用本服務模仿名人、藝人、網紅、親友、已故者或任何未授權第三人之聲音。</p>
          </section>
          <section className="legal-section">
            <h2>三、委託人保證</h2>
            <p>委託人提交聲音素材時，即表示委託人保證：</p>
            <ol>
              <li>該聲音素材為本人聲音，或已取得聲音本人明確授權。</li>
              <li>該聲音素材可用於本次 AI 輔助歌曲製作。</li>
              <li>使用該聲音素材不會侵害任何第三人權利。</li>
              <li>委託人願意承擔因提供不實素材或未授權素材所產生之法律責任。</li>
            </ol>
          </section>
          <section className="legal-section">
            <h2>四、使用範圍</h2>
            <p>聲音素材僅用於本次委託歌曲製作，不會另作其他用途。</p>
          </section>
          <section className="legal-section">
            <h2>五、資料刪除</h2>
            <p>委託完成後，委託人可要求刪除原始聲音素材。本服務將於合理時間內刪除可刪除之檔案。</p>
          </section>
          <section className="legal-section">
            <h2>六、限制說明</h2>
            <p>AI 聲音生成可能無法百分之百重現本人聲音，也可能產生音色、發音、情緒或咬字差異。委託人理解此為 AI 輔助製作之限制。</p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
