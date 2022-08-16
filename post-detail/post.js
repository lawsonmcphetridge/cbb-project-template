import { renderPostDetail } from '../render-utils.js';
import { getPostById } from '../fetch-utils.js';


const params = new URLSearchParams(window.location.search);
const postDetailEl = document.getElementById('post-detail');



async function displayDetailPosts() {
    const post = await getPostById(params.get('id'));
    const postEl = renderPostDetail(post);
    postDetailEl.append(postEl);
}

displayDetailPosts();