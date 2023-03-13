import supertest from 'supertest';
import app from '../index';

const request = supertest(app);

describe('Index.ts - Entry point of app', () => {
    it('expects the root endpoint / to return status of 200', async () => {
        const response = await request.get('/');
        expect(response.status).toEqual(200)
    })
})
