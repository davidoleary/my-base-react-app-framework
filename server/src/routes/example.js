import express from 'express';

import ExampleController from '../controllers/ExampleController';

const router = express.Router();

/**
 * Retrieve individual edition
 */
router.route('/')
  .get(ExampleController.list);

/**
 * Retrieve error response
 */
router.route('/error')
  .get(ExampleController.error);

export default router;
