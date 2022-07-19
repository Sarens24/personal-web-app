<template>
  <div class="currencyExchange">
    <v-container class="pa-0 d-flex justify-center">
      <v-card min-width="70%" elevation="0" color="transparent">
        <v-card-title class="d-flex justify-center text-h3 pt-6 mt-6">Conversion Rate Calculator</v-card-title>
        <v-col
          class="d-flex pb-0 justify-center"
          cols="12"
          sm="12"
        >
          <v-col cols="5">
            <v-select
              class="pt-2"
              v-model="fromCurrency"
              :items="currencies"
              placeholder="From"
              outlined
              @change="clicked=false"
            ></v-select>
          </v-col>
          <v-col class="pt-6 d-flex justify-center">
            <v-btn icon @click="swapCurrencies()">
              <v-icon>mdi-swap-horizontal</v-icon>
            </v-btn>
          </v-col>
          <v-col cols="5">
            <v-select
              class="pt-2"
              v-model="toCurrency"
              :items="currencies"
              placeholder="To"
              outlined
              @change="clicked=false"
            ></v-select>
          </v-col>
        </v-col>
        <v-col class="d-flex justify-center pt-0 ">
          <v-btn
            block
            large
            depressed
            color="primary"
            @click="submit(); "
          >
            Convert
          </v-btn>
        </v-col>
        <div class="d-flex justify-content">
          <v-card-text class="text-center font-weight-bold" v-if="clicked">
            1 {{ fromCurrency }} =  
            <br/>
            <h1 class="font-weight-bold pt-4">{{ result }} {{ toCurrency }}</h1>
          </v-card-text>
        </div>
        <v-col>
          <v-btn
            outlined
            color="primary"
            @click="goToSource()"
          >
            Source
          </v-btn>
        </v-col>

      </v-card>
    </v-container>
  </div>
</template>

<script>

import { getRate, getCurrencies } from './currencyScript.js'

export default {
  name: 'CurrencyExchangeView',

  data: () => ({
    loader: null,
    loading: false,
    clicked: false,
    currencies: [],
    result: '',
    toCurrency: '',
    fromCurrency: '',
    tempTo: '',
    tempFrom: '',
    quantity: '',
    currencyRequest: {},
    rateRequest: {},
    tableCurrencies: [],
    url: null
  }),

  mounted() {
    getCurrencies().then(response => {
      this.currencies = Object.keys(response.conversion_rates)
    })
  },

  methods:  {
    async submit() {

        this.result = await getRate(this.toCurrency, this.fromCurrency);
        this.result = this.result.conversion_rate
        if (!this.result)
          this.result = "NOT AVAILABLE"
        this.clicked=true;

    },

    goToSource() {
      window.open("https://github.com/Sarens24/personal-web-app/tree/master/src/views/currencyExchange");
    },

    async swapCurrencies() {

      let temp = this.toCurrency
      this.toCurrency = this.fromCurrency
      this.fromCurrency = temp;

      let click = this.clicked;
      this.clicked = false;
  
      this.result = await getRate(this.toCurrency, this.fromCurrency);
      this.result = this.result.conversion_rate
      if (!this.result)
        this.result = "NOT AVAILABLE"

      if (click)
        this.clicked = true;

    }
  }

};

</script>