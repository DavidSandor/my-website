<template>
<div id="home-wrapper">
    <div id="profile-section">
        <img id="profile-picture" src="@/assets/david.png" alt="sandordavid">
        <hr>
        <p>David Sandor</p>
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
        <hr>
        <button class="btn btn-primary">Contact me</button>
        <button class="btn btn-outline-primary">My resume</button>
    </div>
    <div id="info-section">
        <div>
            <h1>Hey, I am David, I am a webdeveloper!</h1>
        </div>
        <div>
            <h2>Check my latest references</h2>
            <h2>Check my latest references</h2>
            <h2>Check my latest references</h2>
            <h2>Check my latest references</h2>
            <h2>Check my latest references</h2>
            <h2>Check my latest references</h2>
            <h2>Check my latest references</h2>
            <h2>Check my latest references</h2>
            <h2>Check my latest references</h2>
            <h2>Check my latest references</h2>
            <h2>Check my latest references</h2>
            <h2>Check my latest references</h2>
            <h2>Check my latest references</h2>
            <h2>Check my latest references</h2>
            <h2>Check my latest references</h2>
            <h2>Check my latest references</h2>
            <h2>Check my latest references</h2>
            <h2>Check my latest references</h2>
            <h2>Check my latest references</h2>
            <h2>Check my latest references</h2>
            <h2>Check my latest references</h2>
            <h2>Check my latest references</h2>
            <h2>Check my latest references</h2>
            <h2>Check my latest references</h2>
            <h2>Check my latest references</h2>
            <h2>Check my latest references</h2>
            <h2>Check my latest references</h2>
            <h2>Check my latest references</h2>
            <h2>Check my latest references</h2>
            <h2>Check my latest references</h2>
            <h2>Check my latest references</h2>
            <h2>Check my latest references</h2>
            <h2>Check my latest references</h2>
            <h2>Check my latest references</h2>
            <h2>Check my latest references</h2>
            <h2>Check my latest references</h2>
            <h2>Check my latest references</h2>
            <h2>Check my latest references</h2>
            <h2>Check my latest references</h2>
            <h2>Check my latest references</h2>
            <h2>Check my latest references</h2>
            <h2>Check my latest references</h2>
            <h2>Check my latest references</h2>
            <h2>Check my latest references</h2>
            <h2>Check my latest references</h2>

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
    position: sticky;
    top: $navbar-height + 20px;
    max-width: 270px;
    text-align: center;
    background-color: white;
    padding: 10px;
    box-shadow: 0 0 10px 5px lightgrey;

    & button {
        margin: 6px;
    }
}

#profile-picture {
    width: 100%;
    border-radius: 10000px;
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
    max-width: 730px;
    padding: 30px;
}

</style>