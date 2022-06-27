<template>
    <v-container class="d-flex justify-center">
        <v-col cols="12"> 
            <v-row>
                <v-col cols="4">
                </v-col>
                <v-col cols="4" class="text-center">
                    <v-hover>
                        <template v-slot="{ hover }">
                            <v-card class="rounded-lg" hover color="transparent">
                                <v-img
                                    height="250"
                                    src="../../public/login-view.png"
                                >
                                </v-img>
                                <v-fade-transition>
                                    <v-overlay
                                        v-if="hover"
                                        absolute
                                    >
                                        <v-btn @click="loginOverlay=!loginOverlay">See more info</v-btn>
                                    </v-overlay>
                                </v-fade-transition>
                            </v-card>
                        </template>
                    </v-hover>
                    <h3 class="pt-2">Sign In</h3>
                </v-col>
                <v-col cols="4" class="text-center"> 
                    <v-hover>
                        <template v-slot="{ hover }">
                            <v-card class="rounded-lg" hover color="transparent">
                                <v-img
                                    height="250"
                                    src="../../public/order-view.png"
                                >
                                </v-img>
                                <v-fade-transition>
                                    <v-overlay
                                        v-if="hover"
                                        absolute
                                    >
                                        <v-btn @click="orderOverlay=!orderOverlay">See more info</v-btn>
                                    </v-overlay>
                                </v-fade-transition>
                            </v-card>
                        </template>
                    </v-hover>
                    <h3 class="pt-2">Order Wizard</h3>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="4">
                </v-col>
                <v-col cols="4" class="text-center">
                    <v-hover>
                        <template v-slot="{ hover }">
                            <v-card class="rounded-lg" hover color="transparent">
                                <v-img
                                    height="250"
                                    src="../../public/production-view.png"
                                >
                                </v-img>
                                <v-fade-transition>
                                    <v-overlay
                                        v-if="hover"
                                        absolute
                                    >
                                        <v-btn @click="productionOverlay=!productionOverlay">See more info</v-btn>
                                    </v-overlay>
                                </v-fade-transition>
                            </v-card>
                        </template>
                    </v-hover>
                    <h3 class="pt-2">Production Status</h3>
                </v-col>
                <v-col cols="4" class="text-center">
                    <v-hover>
                        <template v-slot="{ hover }">
                            <v-card class="rounded-lg" hover color="transparent">
                                <v-img
                                    height="250"
                                    src="../../public/calendar-view.png"
                                >
                                </v-img>
                                <v-fade-transition>
                                    <v-overlay
                                        v-if="hover"
                                        absolute
                                    >
                                        <v-btn @click="calendarOverlay=!calendarOverlay">See more info</v-btn>
                                    </v-overlay>
                                </v-fade-transition>
                            </v-card>
                        </template>
                    </v-hover>
                    <h3 class="pt-2">Calendar View</h3>
                </v-col>
            </v-row>
            <v-row class="pt-4">
                <v-col cols="4"></v-col>
                <h5>*The code for this project is private</h5>
            </v-row>
        </v-col>
        <v-overlay v-if="loginOverlay">
            <v-card color="white" width="550">
                <v-col>
                    <v-row>
                        <v-img height="300" width="550" src="../../public/login-view.png"></v-img>
                    </v-row>
                    <v-row class="d-flex justify-center text-center">
                        <v-card-title class="black--text">Sign In</v-card-title>
                        <v-card-text class="black--text">Implemented user authentication and password reset functionality using sql database storage</v-card-text>
                    </v-row>
                    <v-row class="d-flex justify-end">
                        <v-btn text color="black" @click="loginOverlay=!loginOverlay">Close</v-btn>
                    </v-row>
                </v-col>
            </v-card>
        </v-overlay>
        <v-overlay v-if="orderOverlay">
            <v-card color="white" width="550">
                <v-col>
                    <v-row>
                        <v-img contain height="300" width="550" src="../../public/order-view.png"></v-img>
                    </v-row>
                    <v-row class="d-flex justify-center text-center">
                        <v-card-title class="black--text">Order Wizard</v-card-title>
                        <v-card-text class="black--text">Implemented an order wizard to customize spas and place orders</v-card-text>
                    </v-row>
                    <v-row class="d-flex justify-end">
                        <v-btn text color="black" @click="orderOverlay=!orderOverlay">Close</v-btn>
                    </v-row>
                </v-col>
            </v-card>
        </v-overlay>
        <v-overlay v-if="productionOverlay">
            <v-card color="white" width="550">
                <v-col>
                    <v-row>
                        <v-img contain height="300" width="550" src="../../public/production-view.png"></v-img>
                    </v-row>
                    <v-row class="d-flex justify-center text-center">
                        <v-card-title class="black--text">Production Status</v-card-title>
                        <v-card-text class="black--text">Tracked and displayed the progress of each spa in the production process while allowing administrators to move product through each phase</v-card-text>
                    </v-row>
                    <v-row class="d-flex justify-end">
                        <v-btn text color="black" @click="productionOverlay=!productionOverlay">Close</v-btn>
                    </v-row>
                </v-col>
            </v-card>
        </v-overlay>
        <v-overlay v-if="calendarOverlay">
            <v-card color="white" width="550">
                <v-col>
                    <v-row>
                        <v-img contain height="300" width="550" src="../../public/calendar-view.png"></v-img>
                    </v-row>
                    <v-row class="d-flex justify-center text-center">
                        <v-card-title class="black--text">Calendar View</v-card-title>
                        <v-card-text class="black--text">Displayed which spas were scheduled to enter production in a calendar view, allowing administrators to edit production start dates</v-card-text>
                    </v-row>
                    <v-row class="d-flex justify-end">
                        <v-btn text color="black" @click="calendarOverlay=!calendarOverlay">Close</v-btn>
                    </v-row>
                </v-col>
            </v-card>
        </v-overlay>
    </v-container>
</template>

<script>
  export default {
    name: 'AspenSpasView',

    data: () => ({
        loginOverlay: false,
        orderOverlay: false,
        productionOverlay: false,
        calendarOverlay: false
    }),

    methods: {

    }

  }
</script>