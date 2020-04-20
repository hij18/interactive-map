<template>
    <div class="interactive-map">
        <div class="interactive-map__form">
            <user-form />
        </div>

        <map-wrapper />
    </div>
</template>

<script>
import UserForm from '../components/user-form/index.vue';
import MapWrapper from '../components/map-wrapper/index.vue';

export default {
    components: {
        MapWrapper,
        UserForm,
    },
};
</script>

<style lang="stylus">
    .interactive-map {
        display flex
        &__form {
            width 50%
            display flex
        }
        &__map {
            width 50%
        }
    }
</style>>
