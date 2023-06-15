import Component from '../core/Component.js';

export default class List extends Component {
  template() {
    const { dummyList } = this.$props;
    return `
      <ul>
        ${dummyList
          .map(({ id, title }) => `<li key=${id}>${title}</li>`)
          .join('')}
      </ul>
    `;
  }
}
