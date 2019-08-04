<template>
    <div class="row">
        <div class="col">
            <div class="row mt-5">
                <div class="col">
                    <h1 class="black"><font-awesome-icon icon="star" class="mr-3 color-orange" />Favorite GIFs</h1>
                </div>
            </div>
            <div class="row mt-5">
                <div class="ml-3 mb-3" v-for="(favorite, favorite_key) in favorites" :key="favorite.id">
                    <img :src="favorite.shorturl.uri" height="168" alt="" class="rounded">
                    <div class="btn-group d-flex" role="group">
                        <a class="btn btn-primary w-100" :href="favorite.shorturl.uri_code" target="_blank">
                            <font-awesome-icon icon="external-link-alt" />
                        </a>
                        <button class="btn btn-primary w-100" @click.prevent="favoriteDelete(favorite_key, favorite.id)">
                            <font-awesome-icon icon="trash" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
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