<template>
    <div>
        <div class="row mt-5">
            <div class="col col-lg-8">
                <h1 class="black">Hi, {{account.user.name}} <font-awesome-icon icon="glass-cheers" class="ml-2 mr-3 color-orange" />!</h1>
                <p class="mt-4">I'm Cesar, the developer of this application. The stack used here is:</p>
                <ul>
                    <li><strong>Front-end:</strong> Vue JS 3.9 / Bootstrap 4 / jQuery / Popper JS / CSS 3 / HTML 5</li>
                    <li>
                        <strong>Back-end:</strong></li>
                        <ul>
                            <li>Laravel 5.4: Passport, Migrations, Factories, Accessors, PHPUnit and more</li>
                            <li>PHP 7.4</li>
                            <li>MySQL</li>
                        </ul>
                </ul>
                <p>Here you will be able to:</p>
                <ul>
                    <li><strong>Search</strong> GIFs</li>
                    <li><strong>Download</strong> any GIFs</li>
                    <li><strong>Save</strong> your favorite GIFs</li>
                    <li><strong>Share</strong> GIFs with your friends</li>
                    <li><strong>Log</strong> of your GIF keyword searches</li>
                </ul>
                <p>Enjoy it!</p>
            </div>
            <div class="col col-lg-4">
                <h3>About Cesar Kohl <font-awesome-icon icon="search" class="ml-1 color-blue" /></h3>
                <p class="mt-4"><strong>I also like:</strong><br />Docker, Design Patterns, Composer, Grunt, DevOps, TDD, Pug, React Native, CakePHP, CodeIgniter, Flutter, AWS, Postman, Restful API, PhpStorm... so far!</p>
                <p><strong>Links:</strong></p>
                <ul>
                    <li><a href="https://resume.io/r/IwD7qM7iJ" target="_blank">Resume</a></li>
                    <li><a href="https://www.linkedin.com/in/cesarkohl/" target="_blank">LinkedIn</a></li>
                    <li><a href="https://github.com/cesarkohl" target="_blank">Medium</a></li>
                    <li><a href="http://medium.com/@cesarkohl" target="_blank">Github</a></li>
                </ul>
            </div>
        </div>
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