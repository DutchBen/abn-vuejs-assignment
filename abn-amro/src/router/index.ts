import { createRouter, createWebHistory } from "vue-router";
import GenreListingView from "../views/GenreListingView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "genre-listing",
      component: GenreListingView,
    }
  ],
});

export default router;
