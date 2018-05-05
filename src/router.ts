import Vue from 'vue';
import VueRouter, { Location, Route, RouteConfig } from 'vue-router';
import { makeHot, reload } from './util/hot-reload';
import {ShowDrilldownComponent} from './components/show-drilldown/show-drilldown';

const homeComponent = () => import('./components/home').then(({ HomeComponent }) => HomeComponent);
const aboutComponent = () => import('./components/about').then(({ AboutComponent }) => AboutComponent);
const showDrilldownComponent = () => import('./components/show-drilldown').then(({ ShowDrilldownComponent }) => ShowDrilldownComponent);
// const homeComponent = () => import(/* webpackChunkName: 'home' */'./components/home').then(({ HomeComponent }) => HomeComponent)
// const aboutComponent = () => import(/* webpackChunkName: 'about' */'./components/about').then(({ AboutComponent }) => AboutComponent)
// const listComponent = () => import(/* webpackChunkName: 'list' */'./components/list').then(({ ListComponent }) => ListComponent)
if (process.env.ENV === 'development' && module.hot) {
  const homeModuleId = './components/home';
  const aboutModuleId = './components/about';
  const listModuleId = './components/list';
  const showDrilldownModuleId = './components/show-drilldown';

  // first arguments for `module.hot.accept` and `require` methods have to be static strings
  // see https://github.com/webpack/webpack/issues/5668
  makeHot(homeModuleId, homeComponent,
    module.hot.accept('./components/home', () => reload(homeModuleId, (require('./components/home') as any).HomeComponent)));

  makeHot(aboutModuleId, aboutComponent,
    module.hot.accept('./components/about', () => reload(aboutModuleId, (require('./components/about') as any).AboutComponent)));

  makeHot(showDrilldownModuleId, showDrilldownComponent,
    module.hot.accept('./components/list', () => reload(showDrilldownModuleId, (require('./components/show-drilldown') as any).ShowDrilldownComponent)));
}

Vue.use(VueRouter);

export const createRoutes: () => RouteConfig[] = () => [
  {
    path: '/',
    component: homeComponent,
  },
  {
    path: '/show/:id',
    component: ShowDrilldownComponent,
  },
  {
    path: '/about',
    component: aboutComponent
  }
];

export const createRouter = () => new VueRouter({ mode: 'history', routes: createRoutes() });
