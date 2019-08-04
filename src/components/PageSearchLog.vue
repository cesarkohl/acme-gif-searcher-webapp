<template>
    <div>
        <div class="row mt-5">
            <div class="col">
                <h1 class="black"><font-awesome-icon icon="list" class="mr-3 color-blue" />Log</h1>
            </div>
        </div>
        <div class="row mt-5">
            <div class="col">
                <p>You searched for:</p>
                <ul v-for="log in logs" :key="log.keyword" class="row">
                    <li class="col"><strong>{{ log.keyword }}</strong> on {{ log.created_at | moment("dddd, MMMM Do YYYY HH:mm:ss") }}</li>
                </ul>
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
                logs: []
            }
        },
        created() {
            axios
                .get(globals().backendRoot + 'search/getByUserId', { headers: globals().authenticationHeader })
                .then(response => {
                    this.logs = response.data;
                });
        }
    }
</script>