import Component from './Component.js';

class Search extends Component {

    render() {
        const form = this.renderDOM();
        const input = form.querySelector('input');

        form.addEventListener('submit', event => {
            event.preventDefault();
            const searchParams = new URLSearchParams();
            searchParams.set('name', input.value);
            window.location.hash = searchParams.toString();
        });

        function inputChangeFromHash() {
            const params = window.location.hash.slice(1);
            const searchParams = new URLSearchParams(params);
            const name = searchParams.get('name');
            input.value = name;
        }

        inputChangeFromHash();

        window.addEventListener('hashchange', () => {
            inputChangeFromHash();
        });

        return form;
    }

    renderTemplate() {
        return /*html*/`
            <form class="search-form">
                <input name="name">
                <button>🔍</button>
            </form>
        `;
    }
}

export default Search;