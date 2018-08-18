import 'isomorphic-fetch';
import mongoose from 'mongoose';
import { Mockgoose } from 'mockgoose';
import MockgooseExampleModel from '../../../src/models/mockgoose-example-model';
import conn from '../../../src/helpers/mongodb-connect';

const mockgoose = new Mockgoose(mongoose);

describe('node execute', () => {
  beforeAll(async () => {
    await conn.open();
  });

  beforeEach(async () => {
    mockgoose.helper.reset();

    const first = {
      name: 'user1',
      emailAddress: 'user1@test.com',
    };

    const second = {
      name: 'user2',
      emailAddress: 'user2@test.com',
    };

    await MockgooseExampleModel.insertMany([first, second]);
  });

  afterEach((done) => {
    mockgoose.helper.reset();
    done();
  });

  it('isMocked', (done) => {
    expect(mockgoose.helper.isMocked()).toBe(true);
    done();
  });

  it('can read from mockgoose', async () => {
    try {
      const docs = await MockgooseExampleModel.find({ });
      expect(docs[0].name).toEqual('user1');
      expect(docs[1].name).toEqual('user2');
    } catch (err) {
      throw(err);
    }
  });
});
