const request = require('supertest');
const app = require('./server'); // You'll need to export app from server.js

// Update backend/server.js to export app
// Add this at the end of server.js:
// module.exports = app;

describe('Backend API Tests', () => {
  it('should return hello message', async () => {
    const res = await request(app)
      .get('/api/hello')
      .expect(200);
    
    expect(res.body.message).toContain('Hello from Dockerized Backend');
  });

  it('should increment visitors', async () => {
    const res1 = await request(app).get('/api/visitors');
    const res2 = await request(app).get('/api/visitors');
    
    expect(res2.body.visitors).toBeGreaterThan(res1.body.visitors);
  });
});