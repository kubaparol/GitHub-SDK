import nodeFetch from 'node-fetch';
global.fetch = nodeFetch;
import GitHubSDK from './../docs/js/GitHubSDK';
import data from './../docs/js/data';

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
        it('Should return object when data has been downloaded', async () => {
            const name = data.name;
            const token = data.token;
            const newGH = new GitHubSDK(name, token);
            const resp = await newGH.getUserData();

            expect(typeof resp).toBe('object');
        });

        describe('getUserLogin()', () => {
            it('Should return string with user login when data has been downloaded', async () => {
                const name = data.name;
                const token = data.token;
                const newGH = new GitHubSDK(name, token);
                const resp = await newGH.getUserLogin();

                expect(typeof resp).toBe('string');
            });
        });

        describe('getUserName()', () => {
            it('Should return string with user name when data has been downloaded', async () => {
                const name = data.name;
                const token = data.token;
                const newGH = new GitHubSDK(name, token);
                const resp = await newGH.getUserName();

                expect(typeof resp).toBe('string');
            });
        });

        describe('getUserAvatarUrl()', () => {
            it('Should return string with user avatar url when data has been downloaded', async () => {
                const name = data.name;
                const token = data.token;
                const newGH = new GitHubSDK(name, token);
                const resp = await newGH.getUserAvatarUrl();

                expect(typeof resp).toBe('string');
            });

            it('Should return string with user avatar url which includes \'avatars.githubusercontent.com\'', async () => {
                const name = data.name;
                const token = data.token;
                const newGH = new GitHubSDK(name, token);
                const resp = await newGH.getUserAvatarUrl();

                expect(resp.includes('avatars.githubusercontent.com')).toBe(true);
            });
        });

        describe('getUserReposUrl()', () => {
            it('Should return string with user repos url when data has been downloaded', async () => {
                const name = data.name;
                const token = data.token;
                const newGH = new GitHubSDK(name, token);
                const resp = await newGH.getUserReposUrl();

                expect(typeof resp).toBe('string');
            });

            it('Should return string with user repos url which includes \'api.github.com/users/\'', async () => {
                const name = data.name;
                const token = data.token;
                const newGH = new GitHubSDK(name, token);
                const resp = await newGH.getUserReposUrl();

                expect(resp.includes('api.github.com/users/')).toBe(true);
            })
        });
    });
});