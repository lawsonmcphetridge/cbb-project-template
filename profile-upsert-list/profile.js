const formEl = document.getElementById('profile-form');

const userProfile = {
    name: '',
    bio: ''
};

formEl.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(formEl);

    userProfile.name = data.get('profile-name');
    userProfile.bio = data.get('profile-bio');

    console.log(userProfile);

    formEl.reset();
});