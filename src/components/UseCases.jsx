const useCases = [
  ['生日祝福', '把祝福、回憶與感謝變成一首可以送人的歌。'],
  ['婚禮播放', '在婚禮、求婚或紀念日播放一首只屬於你們的歌。'],
  ['告白與和解', '有些話說不出口，就讓歌替你慢慢說。'],
  ['家人紀念', '寫給父母、孩子、手足，保存一段家庭記憶。'],
  ['寵物紀念', '把陪伴、想念與謝謝，留成一首溫柔的歌。'],
  ['畢業與友情', '把一段青春、一個班級或一群朋友的回憶唱出來。'],
];

export default function UseCases() {
  return (
    <section className="section section--cream" aria-labelledby="use-cases-title">
      <div className="section__inner">
        <h2 id="use-cases-title">什麼時候適合做一首專屬歌？</h2>
        <div className="card-grid card-grid--three">
          {useCases.map(([title, description]) => (
            <article className="card use-card" key={title}>
              <span className="card__mark" aria-hidden="true">♪</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
