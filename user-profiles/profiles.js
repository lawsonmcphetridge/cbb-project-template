import { getAllProfiles } from '../fetch-utils.js';
import { renderProfile } from '../render-utils.js';

// loop through all of the users and call render to make the elements for all of them
const profilesEl = document.getElementById('all-users');


async function displayAllUsers() {
    const users = await getAllProfiles();
    for (let user of users) {
        profilesEl.append(renderProfile(user));
    }
}


displayAllUsers();