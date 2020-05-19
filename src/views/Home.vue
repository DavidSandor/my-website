<template>
<div id="home-wrapper">
    <div id="home-bg"></div>
    <div id="profile-section">
        <div id="profile-img-frame">
            <img src="@/assets/probe7.jpg" alt="sandordavid">
        </div>
        <div id="profile-info">
            <h1>
                <span>DAVID</span>
                <span>SANDOR</span>
                <span>WEBDEVELOPER</span>
            </h1>
            <p>Looking for a webdevelopment and design enthusiast for your project or to extend your super creative team? You have found the right guy!</p>
            <button @click="$router.push('/contact')" class="btn btn-primary">GET STARTED</button>
            <button class="btn btn-outline-primary">DOWNLOAD RESUME</button>
        </div>
    </div>
    <!-- <div id="links-section">
        <div class="main-link">
            <p>#latestwork</p>
        </div>
        <div class="main-link">
            <p>#latestblog</p>
        </div>
        <div class="main-link">
            <p>#me</p>
        </div>
    </div> -->
    <div id="social-section">
        <a href="https://www.linkedin.com/in/d%C3%A1vid-s%C3%A1ndor-697511109/" target="_blank"><fa-icon class="social-icon" name="brands/linkedin" scale="1.8"></fa-icon></a>
        <a href="https://www.facebook.com/david.sandor.188" target="_blank"><fa-icon class="social-icon" name="brands/facebook" scale="1.8"></fa-icon></a>
        <a href="https://github.com/DavidSandor" target="_blank"><fa-icon class="social-icon" name="brands/github" scale="1.8"></fa-icon></a>
    </div>
    <div id="tech-section">
        <img class="tech-icon" src="@/assets/js_icon.svg" alt="javascript">
        <img class="tech-icon" src="@/assets/ts_icon.svg" alt="typescript">
        <img class="tech-icon" src="@/assets/css_icon.svg" alt="css">
        <img class="tech-icon" src="@/assets/html_icon.svg" alt="html">
        <img class="tech-icon" src="@/assets/vue_icon.svg" alt="vue.js">
        <img class="tech-icon" src="@/assets/angular_icon.svg" alt="angular">
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

     @media all and (max-width: $screen-sm-width) {
        min-height: 0;
        height: auto;
    }
}

#home-bg {
    background-image: url('../assets/home_bg.jpg');
    background-size: cover;
    background-position-x: center;
    opacity: 0.1;
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
    align-items: stretch;

    @media all and (max-width: $screen-sm-width) {
        padding: $general-space;
        justify-content: left;
    }

    & img {
        position: relative;
        object-fit: cover;
        width: 250px;
        height: 250px;
        border-radius: 10000px;
        margin-right: $general-space * 2;
        box-shadow: $container-shadow;

        @media all and (max-width: $screen-sm-width) {
            width: 200px;
            height: 200px;
            margin: 0;
            margin-bottom: $general-space * 2;
        }
    }

    & #profile-info {
        padding-left: $general-space * 2;
        border-left: 2px solid #C9C3C3;
        max-width: 500px;

        @media all and (max-width: $screen-sm-width) {
            border: none;
            padding: 0;
        }
    }

    & h1 {
        margin-bottom: $general-space;

        & span {
            display: block;
            line-height: 0.9;

            &:nth-of-type(1) {
                display: inline-block;
                color: $primary-theme-color;
                background-color: $primary-bg-color;
                font-size: 60px;
                padding: 2px;
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
    }

    & p {
        margin-bottom: $general-space * 2;
    }

    & button {
        width: 180px;
        margin-right: $general-space / 2;

         @media all and (max-width: $screen-sm-width) {
            margin-bottom: $general-space / 2;
        }
    }
}

// #links-section {
//     position: absolute;
//     bottom: 120px;
//     width: 100%;
//     display: flex;
//     flex-wrap: wrap;
//     justify-content: center;
//     align-items: center;
//     padding: $general-space;

//     @media all and (max-width: $screen-sm-width) {
//         position: relative;
//         bottom: auto;
//         justify-content: left;
//     }

//     & .main-link {
//         padding: $general-space / 2;
//         text-align: center;
//         margin: 0;
//         margin-right: $general-space / 2;
//         margin-top: $general-space / 2;
//         color: $primary-theme-color;
//         background-color: $primary-bg-color;
//         // box-shadow: $container-shadow;

//         & p {
//             margin: 0;
//             // font-size: 18px;
//             font-weight: 600;
//             // font-style: italic;
//         }
//     }
// }

#social-section {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    right: $general-space;
    top: $general-space;

    & .social-icon {
        margin-bottom: $general-space / 2;
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

    @media all and (max-width: $screen-sm-width) {
        position: relative;
        padding: $general-space;
        height: auto;
        justify-content: left;
    }

    & .tech-icon {
        max-height: 32px;
        max-width: 100px;
        line-height: 150px;
        margin: 0 26px;

        @media all and (max-width: $screen-sm-width) {
            margin: 8px;
        }
    }
}

</style>