import { Component, Vue } from 'vue-property-decorator';
import bContainer from 'bootstrap-vue/es/components/layout/container';
import bCol from 'bootstrap-vue/es/components/layout/col';
import bRow from 'bootstrap-vue/es/components/layout/row';

@Component({
  template: require('./about.html'),
  components: {
    'b-container': bContainer,
    'b-col': bCol,
    'b-row': bRow
  }
})
export class AboutComponent extends Vue {
}
