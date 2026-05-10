import { addons } from '../data/addons.js';

export default function AddOns() {
  return (
    <section className="section section--cream" aria-labelledby="addons-title">
      <div className="section__inner">
        <h2 id="addons-title">可加購項目</h2>
        <ul className="addon-grid">
          {addons.map((addon) => (
            <li key={addon}>{addon}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
