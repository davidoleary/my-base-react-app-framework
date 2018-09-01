import wrap from 'express-async-wrap';

import { Response, ErrorResponse } from 'mf-response';

/**
 * Get all
 * @param req
 * @param res
 * @param next
 */
const list = wrap(async (req, res) => {
  res.json(
    new Response()
      .setContent({
        examples: [
          {
            name: 1,
          },
          {
            name: 'John',
            date: new Date().toISOString(),
          },
        ],
      })
      .getResponse(),
  );
});

/**
 * Get error response
 * @param req
 * @param res
 * @param next
 */
const error = wrap(async (req, res) => {
  res.status(400).json(
    new ErrorResponse('Invalid Parameter', 1)
      .setErrors([
        {
          message: 'An example error message',
          code: 1,
        },
      ])
      .getResponse(),
  );
});

export default { list, error };
