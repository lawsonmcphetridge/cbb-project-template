import { renderPostDetail } from '../render-utils.js';
import { checkAuth, getPostById, deletePostById } from '../fetch-utils.js';


const params = new URLSearchParams(window.location.search);
const postDetailEl = document.getElementById('post-detail');



async function displayDetailPosts() {
    const post = await getPostById(params.get('id'));
    const postEl = renderPostDetail(post);
    postDetailEl.append(postEl);
    const user = checkAuth();

    if (user.id === post.user_id) {
        
        const deleteButtonEl = document.createElement('button');
        deleteButtonEl.classList.add('delete-button');
        deleteButtonEl.textContent = 'delete me';
        
        
        deleteButtonEl.addEventListener('click', async () => {
            await deletePostById(post.id);
            location.replace(`../`);
        });
        
        
        postDetailEl.append(deleteButtonEl);
    }
}








displayDetailPosts();