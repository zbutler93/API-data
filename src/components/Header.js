import Component from './Component.js';
import Search from './Search.js';

class Header extends Component {

    render() {
        const dom = this.renderDOM();
        const search = new Search();
        dom.appendChild(search.render());

        return dom;
    }
    
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