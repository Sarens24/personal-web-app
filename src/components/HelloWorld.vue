<template>
  <v-container class="d-flex justify-center text-center">
    <v-card elevation="0" class="rounded-lg pt-6 mt-6" color="transparent">
      <v-card-title class="text-h1 text-center">Seth Arens</v-card-title>
      <v-card-text class="text-subtitle-1 text-center">I'm a computer science student & fullstack developer</v-card-text>
      <v-btn
        color="secondary"
        text
        @click="goToProjects()"
      >
        See My Projects
      </v-btn>
    </v-card>
  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',

    data: () => ({

    }),

    methods: {
      goToProjects() {
        this.$router.push('/projects');
      }
    }
  }
</script>