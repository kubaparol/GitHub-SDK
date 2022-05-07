import nodeFetch from 'node-fetch';
global.fetch = nodeFetch;
import GitHubSDK from './../src/js/GitHubSDK';
import data from './../src/js/data';

describe('GitHubSDK', () => {

    describe('Create instance', () => {
        it('Should create instance when name and token is correct', () => {
        const name = data.name;
        const token = data.token;
        const newGH = new GitHubSDK(name, token);

        expect(newGH.name).toBe(name);
        expect(newGH.token).toBe(token);
        });
    });

    describe('Get and check data methods', () => {
        it('Should had set name and token when create instance', () => {
            const name = data.name;
            const token = data.token;
            const newGH = new GitHubSDK(name, token);
    
            expect(newGH.getName()).toBe(name);
            expect(newGH.getToken()).toBe(token);
        });

        it('Should throw exception when name or token is indefinable', () => {
            function createWrongGitHubSDK() {
                const token = data.token;
                new GitHubSDK(token);
            }
    
            expect(createWrongGitHubSDK).toThrow('Data are incorrect');
        });
    });

    describe('getUserData()', () => {
        it('Should return object when data has been downloaded', () => {
            const name = data.name;
            const token = data.token;
            const newGH = new GitHubSDK(name, token);
            const promise = newGH.getUserData();

            return promise.then(resp => expect(typeof resp).toBe('object'));
        });
    });
});