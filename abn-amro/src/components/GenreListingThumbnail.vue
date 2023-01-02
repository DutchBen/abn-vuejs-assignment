<script lang="ts">
import { defineComponent } from "vue";
import type { PropType } from "vue";
import type { ShowThumbnail } from "../types";

export default defineComponent({
  props: {
    show: {
      type: Object as PropType<ShowThumbnail>,
    },
  },
});
</script>

<style scoped>
.showThumbnail {
  border: thin solid silver;
  width: 100%;
  background-color:#005e5d;
  color: #fff;
  margin: 0 0 10px 0;

  display: flex;
  justify-content: center;
  flex-direction: column;
  justify-items: flex-start;
  margin: 5px;
  padding: 8px;
}
.image {
  width: 100%;
  margin: 5px 0;
  border: thin solid silver;
}
@media (min-width: 480px) {
  .showThumbnail{
    width: 180px;
  }
  .image {
    width: 160px;
    height: 255px;
    align-self: center;
    text-align: center;
  }
}
</style>

<template>
  <div class="showThumbnail">
    <h3>{{ show?.name }}</h3>
    <img v-if="show?.image?.medium" class="image" :src="show?.image?.medium"/>
    <div class="image" v-else>No image</div>
    Rating: {{ show?.rating.average || 'No rating available' }}
  </div>
</template>
