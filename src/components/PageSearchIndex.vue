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
                        <button v-clipboard="result">{{result}}</button>
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
                keyword: 'test',
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
                        link.download = 'image.gif'
                        link.click()
                            .catch(error => {
                                console.error(error)
                            })
                    })
            }
        }
    }
</script>