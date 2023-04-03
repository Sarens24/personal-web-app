<template>
    <v-container class="d-flex justify-center">
        <v-card color="transparent" max-width="60%" elevation="0">
            <v-col>
                <v-row class="d-flex justify-left">
                    <v-card-title class="text-h2">
                        Hi, I'm Seth &
                    </v-card-title>
                </v-row>
                <v-row class="d-flex justify-left">
                    <v-card-title class="text-h2">
                        I'm a fullstack developer
                    </v-card-title>
                </v-row>
                <v-row class="d-flex justify-left">
                    <v-card-text class="text-subtitle-1">
                        I'm a software engineer dedicated to improving my skills through hands-on learning and development work. 
                        I am proficient in desktop development environments and 
                        adept at using HTML5, JavaScript and other programming languages to produce clean code. 
                        I'm a well-organized and collaborative team player with strong communication and analytical abilities.
                    </v-card-text>
                </v-row>
                <v-row class="d-flex justify-left">
                    <v-card-text>
                        <v-btn outlined @click="goToResume()">
                            <v-icon left>
                                mdi-file-account
                            </v-icon>
                            My Resume
                        </v-btn>
                    </v-card-text>
                </v-row>
            </v-col>
        </v-card>
        
    </v-container>
</template>

<script>

  export default {
    name: 'AboutMeView',

    data: () => ({

    }),

    methods: {
        goToResume() {
            window.open("https://drive.google.com/file/d/179VKECWzZUYur3m2LSDXwzS_K19Acpre/view?usp=sharing");
        }
    }

  }
</script>