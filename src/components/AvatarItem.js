import Component from './Component.js';

class AvatarItem extends Component {
    
    renderTemplate() {
        const character = this.props.character;
        if(!character.photoUrl) {
            character.photoUrl = '../../assets/elements.png';
        }

        return /*html*/`
            <li class="avatar-item">
                <h2>${character.name}</h2>
                <img src="${character.photoUrl}" alt="${character.name}">
            </li>
        `;
    }
}

export default AvatarItem;

