<template>


  <v-container fluid>
    <v-layout row wrap>
     <v-carousel :show-arrows="false">
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>

      <v-flex xs12 class="text-xs-center" mt-3>
        <p>This is a user's home page</p>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  data () {
      return {
        items: [
          {
            src: 'https://bit.ly/3i3hDgV',
          },
          {
            src: 'https://bit.ly/3tQJlD6',
          },
          {
            src: 'https://bit.ly/3i3hDgV',
          },
          {
            src: 'https://bit.ly/3tQJlD6',
          },
        ],
      }
    },
};
</script>
