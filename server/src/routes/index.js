import express from 'express';

import example from './example';

const router = express.Router();

router.use('/v1/example', example);

export default router;
