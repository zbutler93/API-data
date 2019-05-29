import Component from './Component.js';
import AvatarList from './AvatarList.js';

class App extends Component {

    render() {
        const dom = this.renderDOM();
        const main = dom.querySelector('main');

        const avatarList = new AvatarList();
        main.appendChild(avatarList.render());

        return dom;
    }

    renderTemplate() {
        return /*html*/`
            <div>
                <header>
                    <img src="../assets/elements.png">
                    <h1>
                        Avatar
                    </h1>
                </header>

                <main>
                    
                </main>
            </div>
        `;
    }
}

export default App;