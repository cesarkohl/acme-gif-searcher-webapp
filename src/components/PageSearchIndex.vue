<template>
    <div>
        <h1>Search</h1>
        <div class="row">
            <div class="col">
                <form @submit.prevent="searchIndex">
                    <input type="text" v-model="keyword" placeholder="Type the word">
                    <button class="btn btn-primary">Search</button>
                </form>
            </div>
        </div>

        <table class="table table-hover">
            <tbody>
                <tr v-for="result in results" :key="result">
                    <td>
                        <img :src="result" alt="">
                        <a @click.prevent="downloadItem(result)" :href="result">Download</a>
                        <button @click.prevent="copyLink(result)">Copy Link</button>
                        <button @click.prevent="favoriteAdd(result)">Favorite</button>
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
                            alert('Copied')
                        })
                    });
            },
            favoriteAdd(url)
            {
                axios.post(globals().backendRoot + `favorite`, { 'uri': url }, { headers: globals().authenticationHeader })
                    .then(response => {
                        console.log(response.data)
                        alert('Favorite!')
                    });
            },
        }
    }
</script>