import request from 'supertest';
import { server } from '../index';

describe('stockDataRoutes endpoint', () => {
  it('should return stock data', async () => {
    const response = await request(server).get('/get-data');
    expect(response.status).toBe(200);
  });
});

afterAll((done) => {
  server.close(done);
});