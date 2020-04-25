<template>
<div id="home-wrapper">
    <div id="profile-section">
        <img id="profile-picture" src="@/assets/david.png" alt="sandordavid">
        <hr>
        <p id="profile-name">David Sandor</p>
        <hr>
        <button class="btn btn-primary">Contact me</button>
        <button class="btn btn-outline-primary">Download resume</button>
        <hr>
        <fa-icon class="social-icon" name="brands/linkedin" scale="2"></fa-icon>
        <fa-icon class="social-icon" name="brands/facebook" scale="2"></fa-icon>
        <fa-icon class="social-icon" name="brands/github" scale="2"></fa-icon>
        <hr>
        <img class="tech-icon" src="@/assets/js_icon.svg" alt="javascript">
        <img class="tech-icon" src="@/assets/css_icon.svg" alt="css">
        <img class="tech-icon" src="@/assets/html_icon.svg" alt="html">
        <img class="tech-icon" src="@/assets/vue_icon.svg" alt="vue.js">
        <img class="tech-icon" src="@/assets/bs_icon.svg" alt="bootstrap">
        <img class="tech-icon" src="@/assets/jquery_icon.svg" alt="jquery">
        <img class="tech-icon" src="@/assets/sass_icon.svg" alt="sass">
        <img class="tech-icon" src="@/assets/git_icon.svg" alt="git">
        <img class="tech-icon" src="@/assets/cs_icon.svg" alt="csharp">
    </div>
    <div id="info-section">
        <div class="info-block">
            <h1>Hey, I am David! I am a webdeveloper!</h1>
        </div>
        <div class="info-block">
            <h2>Check out my latest references</h2>
            <hr>
            <p>Reference 1</p>
            <p>Reference 2</p>
            <p>Reference 3</p>
            <p>Reference 4</p>
            <hr>
            <button class="btn btn-outline-primary more-button">Show more</button>
            <div class="clearfix"></div>
        </div>
        <div class="info-block">
            <h2>Follow my blog</h2>
            <hr>
            <p>Blog post 1</p>
            <p>Blog post 2</p>
            <p>Blog post 3</p>
            <p>Blog post 4</p>
            <hr>
            <button class="btn btn-outline-primary more-button">Show more</button>
            <div class="clearfix"></div>
        </div>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

#home-wrapper {
    display: flex;
    justify-content: center;
    align-items: flex-start;

    @media all and (max-width: $screen-sm-width) {
        flex-wrap: wrap;
    }
}

#profile-section {
    @include container;
    max-width: 270px;
    text-align: center;
    background-color: $primary-bg-color;
    margin-bottom: $general-space;
        
    @media all and (max-width: $screen-sm-width) {
        max-width: none;
        width: 100%;
    }

    & button {
        margin: 6px 0;
        width: 100%;

        @media all and (max-width: $screen-sm-width) {
            width: 65%;
        }

        @media all and (max-width: $screen-xs-width) {
            width: 100%
        }
    }

}

#profile-picture {
    width: 100%;
    border-radius: 10000px;

    @media all and (max-width: $screen-sm-width) {
        width: 50%;
    }

    @media all and (max-width: $screen-xs-width) {
        width: 70%;
    }
}

#profile-name {
    font-weight: 600;
    font-size: 18px;
}

.social-icon {
    margin: 6px;
    color: $primary-theme-color;
}

.tech-icon {
    height: 28px;
    margin: 6px;
    opacity: 0.7;
}

#info-section {
    max-width: 710px;
    margin-left: $general-space;

    @media all and (max-width: $screen-sm-width) {
        margin-left: 0;
    }

    & .info-block {
        @include container;
        background-color: $primary-bg-color;
        margin-bottom: $general-space;

        &:first-of-type {
            @include h1-container
        }

        & .more-button {
            float: right;

            @media all and (max-width: $screen-sm-width) {
                float: none!important;
                display: block;
                margin: 0 auto;
            }

            @media all and (max-width: $screen-xs-width) {
                float: none!important;
                width: 100%;
            }
        }
    }
}

</style>