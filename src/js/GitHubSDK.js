export default class GitHubSDK {
    constructor(name = null, token = null) {
        if(!name || !token) throw new Error('Data are incorrect');
        this.name = name;
        this.token = token;
        this.url = 'https://api.github.com/'
    }

    getName() {
        return this.name;
    }

    getToken() {
        return this.token;
    }
}