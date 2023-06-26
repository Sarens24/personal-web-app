<template>
    <v-container class="pt-6 mt-6">
        <v-card color="transparent" class="rounded-lg" elevation="0" v-if="first && !isSignedIn">
            <v-card-title>
                <v-spacer></v-spacer>
                    Sign In
                <v-spacer></v-spacer>
            </v-card-title>
            <v-card-text class="text-center">
                <v-text-field
                    v-model="username"
                    placeholder="Username"
                ></v-text-field>
                <v-text-field
                    v-model="password"
                    type="password"
                    placeholder="Password"
                ></v-text-field>
            </v-card-text>
            <v-card-actions class="d-flex justify-center">
                <v-col cols="2">
                    <v-row>
                        <v-spacer></v-spacer>
                        <v-btn color="secondary" text @click="signIn();getList()">
                            Enter
                        </v-btn>
                        <v-spacer></v-spacer>
                    </v-row>
                    <v-row>
                        <v-spacer></v-spacer>
                        <v-btn color="secondary" text @click="getList();first=false">
                            Continue as Guest
                        </v-btn>
                        <v-spacer></v-spacer>
                    </v-row>
                </v-col>
            </v-card-actions>
        </v-card>
        <v-card class="rounded-lg" v-if="isSignedIn || !first">
            <v-card-title>
                Book Ratings
                <v-spacer></v-spacer>
                <v-btn elevation="0" color="secondary" @click="newBookDialog=true;" v-if="isAdmin">
                    New Book
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn elevation="0" color="primary" @click="newUserDialog=true;" v-if="isAdmin">
                    Create User
                </v-btn>
            </v-card-title>
            <v-data-table
                :headers="headers"
                :items="masterList"
                sort-by="rating"
                :sort-desc=true
            >
                <template v-slot:item.actions="{ item }">
                    <v-btn icon>
                        <v-icon v-if="item.notes"
                            small
                            class="mr-2"
                            @click="selectedBook=item;notesDialog=true"
                        >
                            mdi-thought-bubble-outline
                        </v-icon>
                    </v-btn>
                </template>
            </v-data-table>
            <v-dialog v-model="notesDialog" max-width="500px">
                <v-card>
                    <v-card-title class="text-h5">{{ selectedBook.title }}</v-card-title>
                    <v-card-text>
                        {{ selectedBook.notes }}
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" text @click="notesDialog=false">Cancel</v-btn>
                        <v-spacer></v-spacer>
                    </v-card-actions>
                </v-card>
            </v-dialog>
            <v-dialog v-model="newBookDialog" max-width="500px">
                <v-card>
                    <v-card-title class="text-h5">Add New Book</v-card-title>
                    <v-card-text>
                        <v-text-field
                            v-model="addedBook.title"
                            label="Title"
                            required
                        ></v-text-field>
                        <v-text-field
                            v-model="addedBook.author"
                            label="Author"
                            required
                        ></v-text-field>
                        <v-text-field
                            v-model="addedBook.genre"
                            label="Genre"
                            required
                        ></v-text-field>
                        <v-text-field
                            v-model="addedBook.rating"
                            label="Rating"
                            required
                        ></v-text-field>
                        <v-textarea
                            v-model="addedBook.notes"
                            label="Notes"
                            required
                        ></v-textarea>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" text @click="newBook();newBookDialog=false">Save</v-btn>
                        <v-spacer></v-spacer>
                    </v-card-actions>
                </v-card>
            </v-dialog>
            <v-dialog v-model="newUserDialog" max-width="500px">
                <v-card>
                    <v-card-title class="text-h5">Create New User</v-card-title>
                    <v-card-text>
                        <v-text-field
                            v-model="newUser.username"
                            label="Username"
                            required
                        ></v-text-field>
                        <v-text-field
                            v-model="newUser.password"
                            label="Password"
                            required
                        ></v-text-field>
                        <v-checkbox
                            v-model="newUser.isAdmin"
                            label="isAdmin"
                        >

                        </v-checkbox>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" text @click="addUser();newUserDialog=false">Create</v-btn>
                        <v-spacer></v-spacer>
                    </v-card-actions>
                </v-card>
            </v-dialog>

        </v-card>
    </v-container>
</template>

<script>
    import store from '../store/index'
    import { addBook, getAll } from '../services/book_service'
    import { signIn, createUser } from '../services/user_service'

    export default {
        name: 'ProjectsView',

        data: () => ({

            headers: [
            {
                text: 'Title',
                align: 'start',
                value: 'title',
            },
            { text: 'Author', value: 'author' },
            { text: 'Genre', value: 'genre' },
            { text: 'Rating', value: 'rating' },
            { text: 'Notes', value: 'actions' }
            ],

            selectedBook: {},
            newUser: {},
            addedBook: {},
            username: "",
            password: "",
            notesDialog: false,
            newBookDialog: false,
            newUserDialog: false,
            first: true

        }),

        mounted() {

        },

        computed: {
            user() {
                return store.getters.userInfo
            },

            masterList() {
                return store.getters.bookList
            },

            isAdmin() {
                return store.getters.isAdmin
            },

            isSignedIn() {
                return store.getters.isSignedIn
            }
        },

        methods: {
            addUser() {
                console.log(this.newUser)
                createUser(this.user.access_token, this.newUser)  
            },

            newBook() {
                addBook(this.addedBook)
                this.selectedBook = {}
            },

            getList() {
                getAll(this.user.access_token)
            },

            signIn() {
                signIn(this.user.access_token, this.username, this.password)
            }
        }

    }
</script>