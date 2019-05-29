import AvatarItem from '../src/components/AvatarItem.js';

const test = QUnit.test;

test('renders template from data', function(assert) {
    //Arrange
    const avatar = {
        _id: '5cdf0769b6e02a467e3e766b',
        photoUrl: 'https://vignette.wikia.nocookie.net/avatar/images/5/51/46th_Earth_King.png/revision/latest?cb=20130627160441',
        name: '46th Earth King'
    };

    //Act 
    const avatarItem = new AvatarItem({ avatar });
    const rendered = avatarItem.renderTemplate();
    //Assert
    assert.htmlEqual(rendered, /*html*/`
        <li class="avatar-item">
            <h2>46th Earth King</h2>
            <img src="https://vignette.wikia.nocookie.net/avatar/images/5/51/46th_Earth_King.png/revision/latest?cb=20130627160441" alt="46th Earth King">
        </li>
    `);
});