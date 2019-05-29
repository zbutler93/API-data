import Component from './Component.js';
import AvatarItem from './AvatarItem.js';

class AvatarList extends Component {

    render() {
        const list = this.renderDOM();

        const avatarItem = new AvatarItem();
        list.appendChild(avatarItem.render());
        
        return list;
    }

    renderTemplate() {
        return /*html*/`
            <ul class="avatar-list">
                
            </ul>
        `;
    }
}

export default AvatarList;