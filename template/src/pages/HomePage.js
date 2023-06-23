import Component from '../core/Component.js';

export default class Home extends Component {
  template() {
    return `
        <h1>Home Page</h1>
        <section data-component="counter"></section>
        <section data-component="fetch"></section>
    `;
  }
}
