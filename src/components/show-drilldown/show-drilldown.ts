import { Component, Vue } from 'vue-property-decorator';
import bContainer from 'bootstrap-vue/es/components/layout/container';
import bCol from 'bootstrap-vue/es/components/layout/col';
import bRow from 'bootstrap-vue/es/components/layout/row';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';
import './show-drilldown.scss';
import {mapGetters} from 'vuex';


@Component({
  template: require('./show-drilldown.html'),
  components: {
    'b-container': bContainer,
    'b-col': bCol,
    'b-row': bRow
  }
})
export class ShowDrilldownComponent extends Vue {

  constructor () {
    super();
  }

  selectedShow;
  mounted () {
    const id = this.$route.params.id;
    const shows = this.$store.getters.allShows;
    this.selectedShow = shows.map(item => item.show)
      .find(_show => _show.id == id);
    console.log(this.selectedShow );
  }
}
