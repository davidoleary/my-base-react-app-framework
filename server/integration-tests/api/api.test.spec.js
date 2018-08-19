import request from 'supertest';
import app from '../../src/app';

describe('integration', () => {
  let runningApp;
  beforeEach((done) => {
    runningApp = request(app);
    done();
  });

  describe('example', () => {
    it('get the route response', async () => {
      const response = await runningApp.get('/test');
      expect(response.body).toMatchObject({ test: 'test' });
    });
  });
});
