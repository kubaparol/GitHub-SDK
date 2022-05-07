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

    async getUserData() {
        const options = {
            method: 'GET',
            headers: {
                Accept: 'application/vnd.github.v3+json',
                Authorization: `token ${this.token}`,
            },
        }
        const url = `${this.url}users/${this.name}`;
        
        return this._fetch(url, options, 'Error downloading user data');
    }

    _fetch(url, options, error) {
        return fetch(url, options)
            .then(resp => {
                if(resp.ok) return resp.json();
                return Promise.reject(resp);
            })
            .then(data => {
                return data;
            })
            .catch(err => {
                throw new Error(err, error);
            })
    }
}