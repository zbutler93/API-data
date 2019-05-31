import Component from './Component.js';
import AvatarList from './AvatarList.js';
import Header from './Header.js';
import avatarApi from '../services/avatar-api.js';
import Loading from './Loading.js';

class App extends Component {

    render() {
        const dom = this.renderDOM();
        const main = dom.querySelector('main');

        const header = new Header();
        dom.insertBefore(header.render(), main);

        const avatarList = new AvatarList({ characters: [] });
        main.appendChild(avatarList.render());

        const loading = new Loading({ loading: true });
        main.appendChild(loading.render());
        
        function loadCharacters() {
            const params = window.location.hash.slice(1);
            const searchParams = new URLSearchParams(params);
            const search = searchParams.toString();
            
            avatarApi.getCharacters(search)
                .then(characters => {
                    avatarList.update({ characters });
                })
                .finally(() => {
                    loading.update({ loading: false });
                });
        }

        loadCharacters();

        window.addEventListener('hashchange', () => {
            loadCharacters();
        });

        return dom;
    }

    renderTemplate() {
        return /*html*/`
            <div>
                <main> 
                </main>
            </div>
        `;
    }
}

export default App;