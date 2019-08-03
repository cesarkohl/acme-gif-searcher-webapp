<template>
    <div>
        <h1>Log</h1>

        <table class="table table-hover">
            <thead>
                    <tr>
                        <th>Keyword</th>
                        <th>Date</th>
                    </tr>
            </thead>
            <tbody>
                <tr v-for="log in logs" :key="log.keyword">
                    <td>{{ log.keyword }}</td>
                    <td>{{ log.created_at }}</td>
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