import Component from './Component.js';

class Header extends Component {
    renderTemplate() {
        return /*html*/`
            <header>
                <img src="../assets/elements.png">
                <h1>
                    Avatar
                </h1>
            </header>
        `;
    }
}

export default Header;