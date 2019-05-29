const URL = 'https://last-airbender-api.herokuapp.com/api/v1/characters';

const api = {
    getAvatar() {
        return fetch(URL)
            .then(response => response.json());
    }
};

export default api;