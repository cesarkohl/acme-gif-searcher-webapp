<template>
    <div>
        <h1>Hi, {{account.user.name}}!</h1>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    computed: {
        ...mapState({
            account: state => state.account,
        })
    }
};
</script>