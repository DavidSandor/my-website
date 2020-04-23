<template>
<div id="home-wrapper">
    <div id="profile-section" style="background-color: red">
        <img id="profile-picture" src="@/assets/david.png" alt="sandordavid">
        <br>
        <fa-icon name="brands/linkedin"></fa-icon>
        <fa-icon name="brands/facebook"></fa-icon>
        <fa-icon name="brands/github"></fa-icon>
        <br>
        <button>Contact me</button>
        <button>My resume</button>
    </div>
    <div style="background-color: green">
        <div style="background-color: pink">
            <h1>Hey, I am David, I am a webdeveloper!</h1>
        </div>
        <div style="background-color: purple">
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

@import '@/style/_variables.scss';

#home-wrapper {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: flex-start;
}

#profile-section {
    position: sticky;
    top: $navbar-height + 50px;
}

#profile-picture {
    width: 100px;
}

</style>