<template>
    <div>
        <h1>Favorites</h1>

        <table class="table table-hover">
            <thead>
            <tr>
                <th>Link</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(favorite, favorite_key) in favorites" :key="favorite.id">
                <td>
                    <img :src="favorite.shorturl.uri" alt="">
                    <a :href="favorite.shorturl.uri_code" target="_blank">Link</a>
                    <button @click.prevent="favoriteDelete(favorite_key, favorite.id)">Delete</button>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import axios from 'axios'
    import {globals} from '../_helpers'
    export default {
        data() {
            return {
                favorites: []
            }
        },
        created() {
            axios
                .get(globals().backendRoot + 'favorite/getByUserId', { headers: globals().authenticationHeader })
                .then(response => {
                    this.favorites = response.data;
                });
        },
        methods: {
            favoriteDelete(key, id)
            {
                axios.delete(globals().backendRoot + `favorite/` + id, { headers: globals().authenticationHeader })
                    .then(response => {
                        console.log(response.data)
                        this.favorites.splice(key, 1);
                        alert('Deleted!')
                    });
            },
        }
    }
</script>