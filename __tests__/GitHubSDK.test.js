import nodeFetch from 'node-fetch';
global.fetch = nodeFetch;
import GitHubSDK from './../src/js/GitHubSDK';

describe('GitHubSDK', () => {
    it('Should had set name and token when create instance', () => {
        const name = 'kuba';
        const token = '123xyz';
        const newGH = new GitHubSDK(name, token);

        expect(newGH.getName()).toBe(name);
        expect(newGH.getToken()).toBe(token);
    })
})