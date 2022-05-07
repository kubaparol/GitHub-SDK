export default class GitHubSDK {
    constructor(name = null, token = null) {
        this.name = name;
        this.token = token;
    }

    getName() {
        return this.name;
    }

    getToken() {
        return this.token;
    }
}