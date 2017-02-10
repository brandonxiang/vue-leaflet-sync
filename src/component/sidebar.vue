

<template>

<ul class="list-unstyled">
    <li v-for="item in displayItems">
        <a class="btn btn-default btn-block" href="#" @click="setItemId(item.id)">
          {{item.name}}
        </a>
    </li>
</ul>

</template>

<script>
import { mapMutations } from 'vuex';

export default {
  data() {
    return {
      displayItems: this.$store.state.displayItems,
    };
  },
  methods: mapMutations([
    'setItemId',
  ]),
};

</script>
