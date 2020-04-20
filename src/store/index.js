export default {
    namespaced: true,
    state() {
        return {
            coords: [],
            test: '',
        };
    },
    mutations: {
        'm:setCoords'(state, coords) {
            state.coords = Object.keys(coords).map((key) => coords[key]);
        },
    },
    actions: {
        'setCoords'({ commit }, coords) {
            return fetch('/api/coords', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                },
                body: JSON.stringify(coords),
            }).then(() => {
                alert('Координаты успешно сохранены!');
                commit('m:setCoords', coords);
            }).catch((err) => {
                console.info('Что-то пошло не так', err);
            });
        },
    },
};
