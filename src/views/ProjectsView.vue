<template>
    <v-container>
        <v-col cols="12"> 
            <v-row>
                <!-- <v-col cols="6" class="text-center">
                    <v-card @click="goToExchange()" hover class="rounded-lg d-flex" color="transparent">
                        <v-img
                            height="250"
                            src="../../public/currency-exchange.jpeg"
                        >
                        </v-img>
                    </v-card>
                    <h3 class="pt-2">Currency Exchange</h3>
                </v-col> -->
                <v-col cols="6" class="text-center">
                    <v-card @click="goToWiki()" hover class="rounded-lg">
                        <v-img
                            height="250"
                            contain
                            src="../../public/wiki-logo.webp"
                        >
                        </v-img>
                    </v-card>
                    <h3 class="pt-2">Wikipedia Article Generator</h3>
                </v-col>
                <v-col cols="6" class="text-center"> 
                    <v-card @click="goToSnake()" hover class="rounded-lg" color="transparent">
                        <v-img
                            height="250"
                            src="../../public/snake-game.png"
                        >
                        </v-img>
                    </v-card>
                    <h3 class="pt-2">Snake Game</h3>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" class="text-center">
                    <v-card @click="goToAspen()" hover class="rounded-lg">
                        <v-img
                            height="250"
                            contain
                            src="../../public/aspen-logo.png"
                        >
                        </v-img>
                    </v-card>
                    <h3 class="pt-2">Aspen Spas</h3>
                </v-col>
            </v-row>
        </v-col>
    </v-container>
</template>

<script>
  export default {
    name: 'ProjectsView',

    data: () => ({

    }),

    methods: {
        goToExchange() {
            this.$router.push('/currencyExchange');
        },        
        goToSnake() {
            this.$router.push('/snakeGame');
        },        
        goToAspen() {
            this.$router.push('/aspenSpas');
        },
        goToWiki() {
            this.$router.push('/wikiGenerator');
        }
    }

  }
</script>