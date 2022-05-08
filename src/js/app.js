import './../css/base.css';

import data from './data'
import GitHubSDK from './GitHubSDK';

document.addEventListener('DOMContentLoaded', init);

function init() {

    const formEl = document.querySelector('form');
    formEl.addEventListener('submit', checkData);

}


function checkData(e) {
    e.preventDefault();
    
    const nameForm = e.target.elements['inputName'];
    const tokenForm = e.target.elements['inputToken'];
    const errors = [];
    
    if(nameForm.value === '') errors.push('The name can\'t be empty!');
    if(tokenForm.value === '') errors.push('The token can\'t be empty!');
    
    const ulEl = document.querySelector('.search-form__alerts');
    ulEl.innerHTML = '';
    
    if(errors.length > 0) {
        errors.forEach(err => addAlert(ulEl, err));
    } else {
        const name = nameForm.value;
        const token = tokenForm.value;
        
        const myGH = new GitHubSDK(name, token);

        createUserProfile(myGH);
        createProjectsList(myGH);
        clearForm(nameForm, tokenForm);

    };
}


function createUserProfile(instance) {
    const userAvatar = document.querySelector('.user__avatar');
    const userName = document.querySelector('.user__name');
    const userLogin = document.querySelector('.user__login');
            
    instance.getUserAvatarUrl().then(resp => {
        userAvatar.setAttribute('src', resp);
        userAvatar.style.display = 'block';
    });
    
    instance.getUserName().then(resp => userName.textContent = resp);
    instance.getUserLogin().then(resp => userLogin.textContent = resp);
}


function createProjectsList(instance) {
    instance.getUserReposUrl().then(res => {
        getReposFromUrl(res);
    });
}


function getReposFromUrl(url) {
    return fetch(url)
        .then(resp => {
            if(resp.ok) return resp.json();
            return Promise.reject(resp);
        })
        .then(resp => resp.forEach(repo => {
            createNewLiAndSetData(repo.name, repo.description, repo.html_url, repo.homepage);
        }))
        .catch(err => console.error(err))
}


function createNewLiAndSetData(name, description, htmlUrl, homepage) {
    const listEl = document.querySelector('.list');
    const itemPrototype = document.querySelector('.list__item--prototype');
    const itemEl = itemPrototype.cloneNode(true);
    itemEl.classList.remove('list__item--prototype');
    const repoName = itemEl.querySelector('.header__name');
    const repoDescription = itemEl.querySelector('.item__description');
    const goToRepoLink = itemEl.querySelector('.button__link--go-to-repo');
    const deployAppLink = itemEl.querySelector('.button__link--deploy-app');
                        
    repoName.textContent = name;
    repoDescription.textContent = description;
    goToRepoLink.setAttribute('href', htmlUrl);
    deployAppLink.setAttribute('href', homepage);
    listEl.appendChild(itemEl);
}


function addAlert(element, text) {
    const alertEl = document.createElement('li');
    alertEl.classList.add('alerts__item');
    alertEl.textContent = text;
    element.appendChild(alertEl);
}


function clearForm(input1, input2) {
    input1.value = '';
    input2.value = '';
} 