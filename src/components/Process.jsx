const steps = [
  ['填寫表單', '告訴我們這首歌要送給誰、想說什麼、使用場合與喜歡的風格。'],
  ['確認需求', '我們會確認方案、時程、修改次數與付款方式。'],
  ['完成付款', '付款完成後才正式排入製作流程。'],
  ['製作歌曲', '依照你的故事進行歌詞整理、曲風設定、AI 輔助製作與版本篩選。'],
  ['修改確認', '依方案提供 1 至 2 次修改，確認最終版本。'],
  ['雲端交付', '交付 MP3、WAV、歌詞、伴奏版或其他加購項目。'],
];

export default function Process() {
  return (
    <section className="section" aria-labelledby="process-title">
      <div className="section__inner">
        <h2 id="process-title">製作流程很簡單</h2>
        <ol className="process-list">
          {steps.map(([title, description], index) => (
            <li key={title}>
              <span className="process-list__number">{index + 1}</span>
              <div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
