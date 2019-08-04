<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-pink">
            <router-link :to="{name: 'home'}" class="navbar-brand">Acme Gif Searcher</router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" v-if="logged">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent" v-if="logged">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <router-link :to="{name: 'search-index'}" class="nav-link">
                            <font-awesome-icon icon="search" />
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{name: 'favorite-index'}" class="nav-link">
                            <font-awesome-icon icon="star" />
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{name: 'search-log'}" class="nav-link">
                            <font-awesome-icon icon="list" />
                        </router-link>
                    </li>
                </ul>
                <ul class="navbar-nav pull-right">
                    <li class="nav-item">
                        <router-link :to="{name: 'login'}" class="nav-link">
                            <font-awesome-icon icon="sign-out-alt" />
                        </router-link>
                    </li>
                </ul>
            </div>
        </nav>
        <div class="container-fluid h-100">
            <div class="row">
                <div class="col-lg-12">
                    <div v-if="alert.message" :class="`alert ${alert.type}`" class="mt-3">{{alert.message}}</div>
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
    data() {
        return {
            logged: localStorage.getItem('user')
        }
    },
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