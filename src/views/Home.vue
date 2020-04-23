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
            <h1>Hey, I am David, I am a webdeveloper!</h1>
        </div>
        <div class="info-block">
            <h2>Check my latest references</h2>
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

<style lang="scss">

#home-wrapper {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: flex-start;
}

#profile-section {
    max-width: 270px;
    text-align: center;
    background-color: $primary-bg-color;
    padding: 20px;

    & button {
        margin: 6px 0;
        width: 100%;
    }
}

#profile-picture {
    width: 100%;
    border-radius: 10000px;
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
    margin-left: 20px;

    & .info-block {
        padding: 20px;
        background-color: $primary-bg-color;
        margin-bottom: 20px;

        &:first-of-type {
            @include h1-block
        }

        & .more-button {
            float: right;
        }
    }
}

</style>