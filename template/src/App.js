import Component from './core/Component.js';
import createPages from './pages/index.js';
export default class App extends Component {
  setup() {
    this.$state = {
      routes: [],
    };
  }

  template() {
    return `
    <header>
      <a href="#/">Home</a>
      <a href="#/counter">Counter</a>
      <a href="#/fetch">Fetch</a>
    </header>
    <main></main>
    `;
  }

  mounted() {
    const $main = this.$target.querySelector('main');
    const pages = createPages($main);

    //라우트 페이지 설정
    this.$state.routes.push({ fragment: '#/', component: pages.home });
    this.$state.routes.push({
      fragment: '#/counter',
      component: pages.counter,
    });
    this.$state.routes.push({ fragment: '#/fetch', component: pages.fetch });

    //현재 URL 체크
    const checkRoutes = () => {
      const currentRoute = this.$state.routes.find((route) => {
        return route.fragment === window.location.hash;
      });

      if (!currentRoute) {
        //redirect to home
        window.location.href = './#';
        this.$state.routes[0].component();
        return;
      }

      currentRoute.component();
    };

    //URL 변경 이벤트
    window.addEventListener('hashchange', checkRoutes);

    if (!window.location.hash) {
      window.location.hash = '#/';
    }

    //초기 렌더링
    checkRoutes();
  }
}
