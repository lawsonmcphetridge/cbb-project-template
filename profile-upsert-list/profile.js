
import { checkAuth, saveProfile, getProfileById } from '../fetch-utils.js';


const formEl = document.getElementById('profile-form');
const profileNameInput = formEl.querySelector('[name=profile-name]');
const profileBioInput = formEl.querySelector('[name=profile-bio]');


const user = checkAuth();

const userProfile = {
    name: '',
    bio: ''
};

formEl.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(formEl);

    userProfile.name = data.get('profile-name');
    userProfile.bio = data.get('profile-bio');

    await saveProfile(userProfile);


    formEl.reset();
});




async function displayProfile() {
    const response = await getProfileById(user.id);
    if (response) {
        profileNameInput.value = response.name;
        profileBioInput.value = response.bio;
    }
}

displayProfile();





