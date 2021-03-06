import { Component, Vue } from 'vue-property-decorator';
import bContainer from 'bootstrap-vue/es/components/layout/container';
import bCol from 'bootstrap-vue/es/components/layout/col';
import bRow from 'bootstrap-vue/es/components/layout/row';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';
import axios, { AxiosResponse } from 'axios';
import './home.scss';
import {mapGetters} from 'vuex';
import {ShowComponent} from "./show/show";


@Component({
  template: require('./home.html'),
  components: {
    'b-container': bContainer,
    'b-col': bCol,
    'b-row': bRow,
    'show': ShowComponent
  },
  data: () => {
    return {
      searchPlaceholder: 'SEARCH SHOW!'
    };
  },
  computed: {
    ...mapGetters(['allShows'])
  },
  methods: {
    search: function (event) {
      const api = `http://api.tvmaze.com/search/shows?q=:${event.target.value}/`;
      Observable.fromPromise(axios.get(api))
        .subscribe(items => {
          this.$store.commit('setShows', items.data);
        }, err => console.log(err));
    }
  }
})
export class HomeComponent extends Vue {

  constructor () {
    super();
  }
}
