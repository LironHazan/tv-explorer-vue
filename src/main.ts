import Vue from 'vue';
import { makeHot, reload } from './util/hot-reload';
import { createRouter } from './router';
import VueRx from 'vue-rx';
import { Observable } from 'rxjs/Observable';
import store from './store';

const navbarComponent = () => import('./components/navbar').then(({ NavbarComponent }) => NavbarComponent);

import './sass/main.scss';

if (process.env.ENV === 'development' && module.hot) {
  const navbarModuleId = './components/navbar';

  // first arguments for `module.hot.accept` and `require` methods have to be static strings
  // see https://github.com/webpack/webpack/issues/5668
  makeHot(navbarModuleId, navbarComponent,
    module.hot.accept('./components/navbar', () => reload(navbarModuleId, (require('./components/navbar') as any).NavbarComponent)))
}

Vue.use(VueRx, {
  Observable
});

// tslint:disable-next-line:no-unused-expression
new Vue({
  el: '#app-main',
  router: createRouter(),
  store,
  components: {
    'navbar': navbarComponent
  }
});
