<template>
  <footer>
      <div id="footer-content-wrapper">
        <div id="footer-contacts">
            <div>
                <router-link to="/contact">
                    <button class="btn btn-secondary">Contact me</button>
                </router-link>
                <button class="btn btn-outline-secondary">Download resume</button>
            </div>  
            <div>
                <fa-icon class="social-icon" name="brands/linkedin" scale="1.6"></fa-icon>
                <fa-icon class="social-icon" name="brands/facebook" scale="1.6"></fa-icon>
                <fa-icon class="social-icon" name="brands/github" scale="1.6"></fa-icon>
            </div>     
        </div>
        <div id="copyright">
            <p>This website is built with <i>Vue.js, bootstrap and sass.</i></p>
            <p>&copy; 2020 David Sandor. All rights reserved.</p>
            <div class="clearfix"></div>
        </div>
      </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    #footer-content-wrapper {
        color: $secondary-theme-color;
        position: relative;
        height: 100%;
        max-width: $screen-md-width;
        margin: 0 auto;
        padding-top: $general-space;

        & p {
            margin: 0;
        }

        & button {
            display: block;
            width: 200px;
            margin-bottom: 8px;
        }
    }

    #footer-contacts {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;

        @media all and (max-width: $screen-md-width + $general-space) {
            display: block;
            text-align: center;
            & button {
                margin-left: auto;
                margin-right: auto;
             }
        }

        @media all and (max-width: $screen-xs-width) {
            padding: 0 $general-space;
            
            & button {
                width: 100%;
            }
        }
    }

    .social-icon {
        margin: 6px;
    }

    #copyright {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 40px;
        line-height: 40px;
        border-top: 1px solid $secondary-theme-color;

        & p {
            font-size: 14px;
            line-height: 1.8;
        }

        & p:first-of-type {
            float: left;
        }

        & p:last-of-type{
            float: right;
        }

        @media all and (max-width: $screen-md-width + $general-space) {
            height: auto;
            line-height: auto;
            padding: 0 $general-space;
            
            & p {
                float: none!important;
                text-align: center;
            }
        }
    }
</style>