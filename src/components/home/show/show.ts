import { Component, Vue } from 'vue-property-decorator';

@Component({
  template: `
  <div>
      <router-link to="/show/:id"><h3 class="show-title">{{show.show.name}}</h3></router-link>
      <div><img :src="show.show.image.medium" alt=""/></div>
      <div> {{show.show.summary}}></div>
  </div>`,
  data: () => {
    return {
      searchPlaceholder: 'SEARCH SHOW!'
    };
  },
  props: {
    show: Object
  }
})
export class ShowComponent extends Vue {}
