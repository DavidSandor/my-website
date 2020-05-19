<template>
    <div>
        <div id="contact-form-wrapper">
            <h1>Get in touch</h1>
            <b-form id="contact-form" @submit.prevent>
                <b-form-group id="input-group-name" label-for="input-name">
                    <b-form-input
                        id="input-name"
                        v-model="form.name"
                        required
                        placeholder="Name">
                    </b-form-input>
                </b-form-group>
                <b-form-group
                    id="input-group-email"
                    label-for="input-email"
                    description="I will never share your email address with anyone else. Check my privacy policy here.">
                    <b-form-input
                        id="input-email"
                        v-model="form.email"
                        type="email"
                        required
                        placeholder="Email">
                    </b-form-input>
                </b-form-group>
                <b-form-group id="input-group-topic" label-for="input-topic">
                    <b-form-select
                        id="input-topic"
                        v-model="form.topic"
                        :options="topics"
                        required>
                    </b-form-select>
                </b-form-group>
                <b-form-group id="input-group-desc" label-for="textarea-desc">
                    <b-form-textarea
                        id="textarea-desc"
                        v-model="form.description"
                        placeholder="Describe the thing..."
                        rows="3"
                        ></b-form-textarea>
                </b-form-group>
                <b-button id="submit-contact-form" type="submit" variant="primary">SEND MESSAGE</b-button>
                <div class="clearfix"></div>
            </b-form>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            form: {
                email: '',
                name: '',
                topic: null,
                description: ''
            },
            topics: [
                { 
                    text: '- Select a topic -', 
                    value: null 
                }, 
                'I may have a job for you', 
                'I just want to chat with you'
            ]
        }
    }
}
</script>

<style lang="scss">

#contact-form-wrapper {
    max-width: $screen-md-width - $general-space * 2;
    margin: $general-space auto;
    padding: $general-space;
    background-color: $primary-bg-color;

    @media all and (max-width: $screen-md-width) {
        margin: $general-space;
    }

    & h1 {
        @include main-header();
        margin-bottom: $general-space * 2;
    }
}

#submit-contact-form {
    position: relative;
    margin-top: $general-space;
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

</style>