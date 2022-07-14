<template>
  <v-app>
    <v-app-bar
      elevation="0"
      app
      color="transparent"
    >
      <v-btn
        text
        @click="goToHome()"
      >
        Seth Arens
      </v-btn>
      <v-divider
        vertical
        color="black"
      />
      <v-btn text @click="goToProjects()">
        Projects
      </v-btn>
      <v-divider
        vertical
        color="black"
      />
      <v-btn text @click="goToAboutMe()">
        About Me
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn icon href="https://github.com/Sarens24" target="_blank">
        <v-icon color="black">mdi-github</v-icon>
      </v-btn>
      <v-btn icon href="https://linkedin.com/in/seth-arens-b9ab2b206" target="_blank">
        <v-icon color="black">mdi-linkedin</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),

  methods: {
    goToHome() {
      this.$router.push('/');
    },
    goToProjects() {
      this.$router.push('/projects');
    },
    goToAboutMe() {
      this.$router.push('/aboutMe');
    }
  }
};
</script>

<style>
#app {
  background-color: floralwhite;
  background-size: cover;
  background-position: 0px -200px; 
}
</style>
