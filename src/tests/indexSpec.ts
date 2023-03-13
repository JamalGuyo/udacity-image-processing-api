import supertest from 'supertest';
import app from '../index';

const request = supertest(app);

describe('Test api endpoints', () => {
    it('gets / endpoint', async () => {
        const response = await request.get('/');
        expect(response.status).toEqual(200)
    })

    it('gets /api endpoint', async() => {
        const response = await request.get('/api');
        expect(response.status).toBe(200);
    })

    it('gets /api/images endpoint', async() => {
        const response = await request.get('/api/images')
        expect(response.status).toBe(200);
    })
})
