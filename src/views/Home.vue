<template>
 <div>
    <Suspense>
      <template #default>
        <movie-list></movie-list>
      </template>
      <template #fallback>
        <p>Loading...</p>
      </template>
    </Suspense>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MovieList from "@/components/MovieList.vue";

export default defineComponent({
  name: "Home",
  components: {
    MovieList
  }
});
</script>
