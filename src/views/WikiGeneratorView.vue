<template>
    <v-card class="d-flex justify-center" color="transparent" elevation="0">
        <v-col cols="8">
            <v-row class="d-flex justify-center">
                <v-card-title class="text-h4 font-weight-bold">
                    Random Wikipedia Article Generator
                </v-card-title>
                <div>
                    <v-img src="../../public/wiki-generator-sc.png"></v-img>
                </div>
                <v-card-text class="text-center text-body-2">
                    This project uses python3 and BeautifulSoup to get a random wikipedia article and asks if you would like to view it. 
                    If 'Y', the article will be brought up in the browser. 
                    Termcolor is used to add colors to the displayed terminal text!
                </v-card-text>
                <v-card-actions>
                    <v-btn color="primary" outlined @click="goToSource()">
                        Source
                    </v-btn>
                </v-card-actions>
            </v-row>
        </v-col>
    </v-card>
</template>

<script>
  export default {
    name: 'ProjectsView',

    data: () => ({

    }),

    methods: {
        goToSource() {
            window.open("https://github.com/Sarens24/randomWikiGenerator/blob/main/main.py");
        },
    }

  }
</script>