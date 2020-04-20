<template>
    <div class="yamap-wpapper">
        <yandex-map
            v-if="coords.length"
            :settings="settings"
            :coords="coords"
            :zoom="zoom"
        >
            <ymap-marker
                :coords="coords"
                marker-id="123"
                hint-content="some hint"
            />
        </yandex-map>
    </div>
</template>

<script>
import { yandexMap, ymapMarker } from 'vue-yandex-maps';
import { mapState } from 'vuex';

export default {
    components: {
        yandexMap,
        ymapMarker,
    },
    data() {
        return {
            settings: {
                apiKey: '010c2a8d-94f3-4eaf-b5d6-0027939b0145',
                lang: 'ru_RU',
                coordorder: 'latlong',
                version: '2.1',
            },
            zoom: 5,
        };
    },
    computed: {
        ...mapState({
            coords: 'coords',
        }),
    },
};
</script>

<style lang="stylus">
    .yamap-wpapper {
        width 500px
        height 500px
        .ymap-container {
            height 500px
        }
    }
</style>>
