

<template>
<b-button-group vertical="true">  
  <b-button  v-for="item in displayItems" href="#" @click="setItemId(item.id)">{{item.name}}</b-button>  
</b-button-group>

</template>

<script>
import { mapMutations } from 'vuex';

export default {
  data() {
    return {
      displayItems: this.$store.state.displayItems,
      vertical: true,
    };
  },
  methods: mapMutations([
    'setItemId',
  ]),
};

</script>
