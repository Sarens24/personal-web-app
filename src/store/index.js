import Vuex from 'vuex'
import Vue from 'vue'
import { auth } from '../services/user_service'
import { getAll } from '../services/book_service'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: {},
        masterList: [],
        isAdmin: false,
        isSignedIn: false,
    },

    getters: {
        userInfo(state, getters) {
            return state.user
        },

        bookList(state, getters) {
            return state.masterList
        },

        isAdmin(state, getters) {
            return state.isAdmin
        },

        isSignedIn(state, getters) {
            return state.isSignedIn
        }
    },

    actions: {
        getUser(context) {
            return new Promise((resolve, reject) => {
                auth().then((data) => {
                    resolve()
                })
            })
        },

        getBookList(context, token) {
            return new Promise((resolve, reject) => {
                getAll(token).then((data) => {
                    resolve()
                })
            })
        }
    },

    mutations: {
        setUser(state, user) {
            state.user = user
        },

        setBooks(state, books) {
            state.masterList = books
        },

        setAdmin(state, isAdmin) {
            state.isAdmin = isAdmin
        },

        setSignedIn(state, isSignedIn) {
            state.isSignedIn = isSignedIn
        }
    }
})