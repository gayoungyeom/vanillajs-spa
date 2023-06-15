import Component from './core/Component.js';
import CounterPage from './pages/CounterPage.js';
import FetchPage from './pages/FetchPage.js';

export default class App extends Component {
  template() {
    return `
      <main>
        <section data-component="counter"></section>
        <section data-component="fetch"></section>
      </main>
    `;
  }

  mounted() {
    const $counter = this.$target.querySelector('[data-component="counter"]');
    new CounterPage($counter);

    const $fetch = this.$target.querySelector('[data-component="fetch"]');
    new FetchPage($fetch);
  }
}
