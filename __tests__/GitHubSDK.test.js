import nodeFetch from 'node-fetch';
global.fetch = nodeFetch;
import GitHubSDK from './../src/js/GitHubSDK';

describe('GitHubSDK', () => {

    describe('Create instance', () => {
        it('Should create instance when name and token is correct', () => {
        const name = 'kuba';
        const token = '123xyz';
        const newGH = new GitHubSDK(name, token);

        expect(newGH.name).toBe(name);
        expect(newGH.token).toBe(token);
        });
    });

    describe('Get and check data methods', () => {
        it('Should had set name and token when create instance', () => {
            const name = 'kuba';
            const token = '123xyz';
            const newGH = new GitHubSDK(name, token);
    
            expect(newGH.getName()).toBe(name);
            expect(newGH.getToken()).toBe(token);
        });

        it('Should throw exception when name or token is indefinable', () => {
            function createWrongGitHubSDK() {
                const token = '123xyz';
                new GitHubSDK(token);
            }
    
            expect(createWrongGitHubSDK).toThrow('Data are incorrect');
        });
    });

});