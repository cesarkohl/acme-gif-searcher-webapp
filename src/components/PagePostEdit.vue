<template>
    <div>
        <h1>Edit Post</h1>
        <form @submit.prevent="updatePost">
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label>Post Title:</label>
                        <input type="text" class="form-control" v-model="post.title">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label>Post Body:</label>
                        <textarea class="form-control" v-model="post.body" rows="5"></textarea>
                    </div>
                </div>
            </div><br />
            <div class="form-group">
                <button class="btn btn-primary">Update</button>
            </div>
        </form>
    </div>
</template>

<script>
    import axios from 'axios'
    import {globals} from '../_helpers'
    export default {
        data() {
            return {
                post: {}
            }
        },
        created() {
            axios.get(globals().backendRoot + `post/${this.$route.params.id}`, { headers: globals().authenticationHeader })
                .then((response) => {
                    this.post = response.data;
                });
        },
        methods: {
            updatePost() {
                axios.put(globals().backendRoot + `post/${this.$route.params.id}`, this.post, { headers: globals().authenticationHeader })
                    .then((response) => {
                        this.$router.push({name: 'post-index'});
                    });
            }
        }
    }
</script>