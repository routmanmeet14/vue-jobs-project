<template>
  <div>
    <Hero title="asdfasdf" subtitle="Hi Manmeet" />
    <HomeCards />
    <JobListings :limit="4" :showButton="true" />
  </div>
</template>

<script lang="ts" setup>
import Hero from "../components/Hero.vue";
import HomeCards from "../components/HomeCards.vue";
import JobListings from "../components/JobListings.vue";
</script>

<style></style>
