<template>
    <div class="jumbotron">
        <div class="container">
            <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link :to="{name: 'home'}" class="nav-link">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{name: 'post-index'}" class="nav-link">Posts</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{name: 'search-index'}" class="nav-link">Search</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{name: 'search-log'}" class="nav-link">Log</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{name: 'login'}" class="nav-link">Logout</router-link>
                    </li>
                </ul>
            </nav><br />
            <div class="row">
                <div class="col-sm-6 offset-sm-3">
                    <div v-if="alert.message" :class="`alert ${alert.type}`">{{alert.message}}</div>
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    name: 'app',
    computed: {
        ...mapState({
            alert: state => state.alert
        })
    },
    methods: {
        ...mapActions({
            clearAlert: 'alert/clear' 
        })
    },
    watch: {
        $route (to, from){
            // clear alert on location change
            this.clearAlert();
        }
    } 
};
</script>