<template>
    <div class="map-settings-form">
        <div class="map-settings-form__input">
            <label for="xcoord">Укажите координату x: </label>
            <input
                id="xcoord"
                type="text"
                v-model="mapSettings.coords.x"
            >
        </div>
        <div class="map-settings-form__input">
            <label for="ycoord">Укажите координату y: </label>
            <input
                id="ycoord"
                type="text"
                v-model="mapSettings.coords.y"
            >
        </div>
        <div class="map-settings-form__submit">
            <div
                class="form-btn"
                @click="submitForm"
            >Найти точку на карте!</div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            mapSettings: {
                coords: {
                    x: null,
                    y: null,
                },
            },
        };
    },
    methods: {
        submitForm() {
            this.$store.dispatch('setCoords', this.mapSettings.coords);
        },
    },
};
</script>

<style lang="stylus">
    .map-settings-form {
        &__submit {
            padding-top 30px
        }
    }
    .form-btn {
        display flex
        align-items center
        justify-content center
        max-width 200px
        height 50px
        border solid 1px #222
        border-radius 5px
        cursor pointer
    }
</style>>
