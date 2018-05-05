import { Component, Vue, Watch } from 'vue-property-decorator';
import bCollapse from 'bootstrap-vue/es/components/collapse/collapse';
import bNavItem from 'bootstrap-vue/es/components/nav/nav-item';
import bNavbar from 'bootstrap-vue/es/components/navbar/navbar';
import bNavbarToggle from 'bootstrap-vue/es/components/navbar/navbar-toggle';
import bNavbarBrand from 'bootstrap-vue/es/components/navbar/navbar-brand';
import bNavbarNav from 'bootstrap-vue/es/components/navbar/navbar-nav';
import { Link } from './link';
import 'rxjs/add/observable/fromPromise';

@Component({
  template: require('./navbar.html'),
  components: {
    'b-collapse': bCollapse,
    'b-nav-item': bNavItem,
    'b-navbar': bNavbar,
    'b-navbar-toggle': bNavbarToggle,
    'b-navbar-brand': bNavbarBrand,
    'b-navbar-nav': bNavbarNav
  },
  data: () => {
    return {
      headerTitle: 'TV Explorer: The Vue Way !'
    };
  },
})
export class NavbarComponent extends Vue {
  object: { default: string } = { default: 'Default object property!' };
  links: Link[] = [
    new Link('Search', '/'),
    new Link('About', '/about'),
  ];


  @Watch('$route.path')
  pathChanged () {
    console.log('Changed current path to: ' + this.$route.path);
  }

  mounted () {
    this.$nextTick(() => console.log(this.object.default));
  }
}
