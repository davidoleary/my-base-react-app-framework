import { ResponseHelper } from '../../../src/helpers/ResponseHelper';
import sinon from 'sinon';
import doSomething from '../../../src/helpers/useResponseHelperl'
sinon.spy(ResponseHelper, 'respondWithError');


console.log(ResponseHelper);

doSomething({});
