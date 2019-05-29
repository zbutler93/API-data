import Component from './Component.js';
import AvatarList from './AvatarList.js';
import Header from './Header.js';

class App extends Component {

    render() {
        const dom = this.renderDOM();
        const main = dom.querySelector('main');

        const header = new Header();
        dom.insertBefore(header.render(), main);

        const avatarList = new AvatarList();
        main.appendChild(avatarList.render());

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