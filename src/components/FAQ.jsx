import { faqs } from '../data/faqs.js';

export default function FAQ() {
  return (
    <section className="section" aria-labelledby="faq-title">
      <div className="section__inner section__inner--narrow">
        <h2 id="faq-title">常見問題</h2>
        <div className="faq-list">
          {faqs.map((faq) => (
            <details className="faq-item" key={faq.question}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
