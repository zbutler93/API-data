import Component from './Component.js';

class Header extends Component {
    
    renderTemplate() {
        return /*html*/`
            <header>
                <div>
                    <img src="../assets/elements.png">
                    <h1>
                        Avatar
                    </h1>
                </div>
                <a href="index.html">Home</a>
            </header>
        `;
    }
}

export default Header;