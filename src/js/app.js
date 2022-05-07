import './../css/reset.css';
import './../css/base.css';

import data from './data'
import GitHubSDK from './GitHubSDK';

document.addEventListener('DOMContentLoaded', init);

function init() {
    const name = data.name;
    const token = data.token;

    const myGH = new GitHubSDK(name, token);
}