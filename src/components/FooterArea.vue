<template>
  <footer>
    <div id="footer-contacts-wrapper">
        <div id="footer-contacts">
            <p>Do you need more info?</p>
            <router-link to="/contact">
                <button class="btn btn-primary">Contact me</button>
            </router-link>
            <button class="btn btn-outline-primary">Download resume</button>
        </div>
    </div>
    <div id="footer-social">
        <fa-icon class="social-icon" name="brands/linkedin" scale="1.8"></fa-icon>
        <fa-icon class="social-icon" name="brands/facebook" scale="1.8"></fa-icon>
        <fa-icon class="social-icon" name="brands/github" scale="1.8"></fa-icon>
    </div>
    <div id="copyright">
        <p>This website is built with <i>Vue.js, bootstrap and sass.</i></p>
        <p>&copy; 2020 David Sandor. All rights reserved.</p>
        <div class="clearfix"></div> 
    </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: $footer-height;
    color: $primary-bg-color;
    background: $primary-theme-gradient;

    @media all and (max-width: $screen-sm-width) {
        height: $footer-height-screen-sm
    }
}

#footer-contacts-wrapper {
    background-color: darken(lightgray, 10%);
    padding: $general-space 0;

    & #footer-contacts {
        color: $secondary-theme-color;
        margin: 0 auto;
        max-width: $screen-md-width;
        text-align: center;

        & p {
            display: inline-block;
            margin: 0;
            font-weight: 500;

            @media all and (max-width: $screen-sm-width) {
                display: block;
                margin-bottom: $general-space;
            }
        }

        & button {
            margin-left: $general-space;
            width: 180px;

            @media all and (max-width: $screen-sm-width) {
                margin: 0 auto;
                margin-bottom: 8px;
                display: block;
            }
        }
    }
}

#footer-social {
    padding: $general-space;
    color: $primary-bg-color;
    max-width: $screen-md-width;
    margin: 0 auto;
    text-align: center;

    & .social-icon {
        margin: 0px 12px;
    }
}

#copyright {
    margin: 0 auto;
    line-height: 40px;
    text-align: center;

    & p {
        font-size: 14px;
        line-height: 1.8;
        margin: 0;
    }
}

// Hack for global active link - to be removed
.router-link-exact-active {
    border: none;
}

</style>