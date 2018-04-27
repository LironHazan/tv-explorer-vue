import { Component, Vue } from 'vue-property-decorator';
import bContainer from 'bootstrap-vue/es/components/layout/container';
import bCol from 'bootstrap-vue/es/components/layout/col';
import bRow from 'bootstrap-vue/es/components/layout/row';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';
import axios, { AxiosResponse } from 'axios';
import './show-drilldown.scss';
import {mapGetters} from 'vuex';


@Component({
  template: require('./show-drilldown.html'),
  components: {
    'b-container': bContainer,
    'b-col': bCol,
    'b-row': bRow
  },
  data: () => {
    return {
      searchPlaceholder: 'SEARCH SHOW!'
    };
  },
  computed: {
    ...mapGetters(['allShows'])
  },
})
export class ShowDrilldownComponent extends Vue {

  constructor () {
    super();
  }
}
