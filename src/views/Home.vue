<template>
<div id="home-wrapper">
    <div id="home-bg"></div>
    <div id="profile-section">
        <img src="@/assets/david.png" alt="sandordavid">
        <div id="profile-info">
            <h1>
                <span>DAVID</span>
                <span>SANDOR</span>
                <span>THE WEBDEVELOPER</span>
            </h1>
            <router-link to="/contact">
                <button class="btn btn-primary">CONTACT ME</button>
            </router-link>
            <button class="btn btn-outline-primary">DOWNLOAD RESUME</button>
        </div>
    </div>
    <div id="links-section">
        <div class="main-link">
            <p>check out my works...</p>
        </div>
        <div class="main-link">
            <p>about me in a nutshell...</p>
        </div>
    </div>
    <div id="social-section">
        <a href="https://www.linkedin.com/in/d%C3%A1vid-s%C3%A1ndor-697511109/" target="_blank"><fa-icon class="social-icon" name="brands/linkedin" scale="1.8"></fa-icon></a>
        <a href="https://www.facebook.com/david.sandor.188" target="_blank"><fa-icon class="social-icon" name="brands/facebook" scale="1.8"></fa-icon></a>
        <a href="https://github.com/DavidSandor" target="_blank"><fa-icon class="social-icon" name="brands/github" scale="1.8"></fa-icon></a>
    </div>
    <div id="tech-section">
        <img class="tech-icon" src="@/assets/js_icon.svg" alt="javascript">
        <img class="tech-icon" src="@/assets/css_icon.svg" alt="css">
        <img class="tech-icon" src="@/assets/html_icon.svg" alt="html">
        <img class="tech-icon" src="@/assets/vue_icon.svg" alt="vue.js">
        <img class="tech-icon" src="@/assets/bs_icon.svg" alt="bootstrap">
        <img class="tech-icon" src="@/assets/jquery_icon.svg" alt="jquery">
        <img class="tech-icon" src="@/assets/sass_icon.svg" alt="sass">
        <img class="tech-icon" src="@/assets/cs_icon.svg" alt="csharp">
        <img class="tech-icon" src="@/assets/git_icon.svg" alt="git">
        <img class="tech-icon" src="@/assets/npm_icon.svg" alt="git">
    </div> 
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

#home-wrapper {
    position: relative;
    height: calc(100vh - #{$navbar-height});
    min-height: 700px - $navbar-height;
    width: 100%;
}

#home-bg {
    background-image: url('../assets/home_bg.jpg');
    background-size: cover;
    opacity: 0.08;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
}

#profile-section {
    position: relative;
    padding-top: 10vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;

    & img {
        max-width: 270px;
        border-radius: 10000px;
        box-shadow: $container-shadow;
        margin-right: $general-space * 2;
        margin-top: 5px;
    }

    & #profile-info {
        align-self: stretch;
        padding-left: $general-space * 2;
        padding-top: 0;
        border-left: 2px solid #C9C3C3;
    }

    & h1 {
        margin-bottom: 50px;
    }

    & h1 span {
        display: block;
        line-height: 0.9;

        &:nth-of-type(1) {
            color: $primary-theme-color;
            font-size: 60px;
        }

        &:nth-of-type(2) {
            color: black;
            font-size: 60px;
        }

        &:nth-of-type(3) {
            color: #767676;
            font-size: 40px;

        }
    }

    & button {
        width: 180px;
        display: block;
        margin-bottom: 5px;
    }
}

#links-section {
    position: absolute;
    bottom: 120px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: $general-space;

    & .main-link {
        padding: $general-space / 2;
        text-align: center;
        margin: 0 $general-space / 2;
        color: $primary-theme-color;

        & p {
            margin: 0;
            font-size: 18px;
            font-weight: 600;
        }
    }
}

#social-section {
    position: absolute;
    right: 0;
    top: 0;
    padding: $general-space;

    & .social-icon {
        margin: 0 5px;
        color: black;
    }
}

#tech-section {
    background-color: $primary-bg-color;
    width: 100%;
    position: absolute;
    bottom: 0;
    height: 120px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    & .tech-icon {
        height: 32px;
        line-height: 150px;
        margin: 0 26px;
    }
}

</style>