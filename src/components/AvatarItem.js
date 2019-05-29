import Component from './Component.js';

class AvatarItem extends Component {
    renderTemplate() {
        const avatar = this.props.avatar;
        return /*html*/`
            <li class="avatar-item">
                <h2>${avatar.name}</h2>
                <img src="${avatar.photoUrl}" alt="${avatar.name}">
            </li>
        `;
    }
}

export default AvatarItem;

