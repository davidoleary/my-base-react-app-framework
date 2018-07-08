import { ResponseHelper } from './ResponseHelper';


export default doSomething = (req, res) => {
  ResponseHelper.respondWithError(res, 404, "some message")
}