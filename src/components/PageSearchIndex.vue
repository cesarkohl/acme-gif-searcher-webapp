<template>
    <div>
        <div class="row mt-5">
            <div class="col col-lg-6">
                <h1 class="black"><font-awesome-icon icon="search" class="mr-3 color-green" />Search GIFs</h1>
                <h6 class="float-left">Powered by <a href="https://www.tenor.com" target="_blank">Tenor</a></h6>
            </div>
            <div class="col col-lg-6">
                <form class="form-inline float-right" @submit.prevent="searchIndex">
                    <div class="form-group mx-auto mb-2">
                        <input type="text" class="form-control" v-model="keyword" placeholder="Search for ...">
                    </div>
                    <button class="btn btn-primary mb-2"><font-awesome-icon icon="search" /></button>
                </form>
            </div>
        </div>
        <div class="row mt-5">
            <div v-for="result in results" :key="result" class="ml-3 mb-3 gif-card rounded">
                <img :src="result" height="168" alt="" class="rounded mx-auto d-block">
                <div class="btn-group d-flex" role="group">
                    <button class="btn btn-primary w-100" @click.prevent="downloadItem(result)" :href="result">
                        <font-awesome-icon icon="download" />
                    </button>
                    <button class="btn btn-primary w-100" @click.prevent="copyLink(result)">
                        <font-awesome-icon icon="copy" />
                    </button>
                    <button class="btn btn-primary w-100" @click.prevent="favoriteAdd(result)">
                        <font-awesome-icon icon="star" />
                    </button>
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
                keyword: '',
                results: []
            }
        },
        methods: {
            searchIndex()
            {
                axios.get(globals().backendRoot + `search?keyword=` + this.keyword, { headers: globals().authenticationHeader })
                    .then(response => {
                        this.results = response.data
                    });
            },
            downloadItem (url) {
                axios.get(url, { responseType: 'blob' })
                    .then(({ data }) => {
                        let blob = new Blob([data], { type: 'image/gif' })
                        let link = document.createElement('a')
                        link.href = window.URL.createObjectURL(blob)
                        link.download = this.keyword
                        link.click()
                            .catch(error => {
                                console.error(error)
                            })
                    })
            },
            copyLink(url)
            {
                axios.post(globals().backendRoot + `shorturl`, { 'uri': url }, { headers: globals().authenticationHeader })
                    .then(response => {
                        var uri_code = response.data.uri_code
                        this.$copyText(uri_code).then(function() {
                            alert('Copied to clipboard!')
                        })
                    });
            },
            favoriteAdd(url)
            {
                axios.post(globals().backendRoot + `favorite`, { 'uri': url }, { headers: globals().authenticationHeader })
                    .then(response => {
                        console.log(response.data)
                        alert('Favorited!')
                    });
            },
        }
    }
</script>