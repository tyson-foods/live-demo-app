const request = require('supertest');
const { app, server } = require('./index');

afterAll(() => {
  server.close();
});

describe('GET /', () => {
  it('should return status 200', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
  });

  it('should return the message "Hello from Tyson Foods!"', async () => {
    const response = await request(app).get('/');
    expect(response.body.message).toBe('Hello from Tyson Foods!');
  });
});
