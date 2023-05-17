import { rest } from 'msw';

export const handlers = [
  rest.post('https://domain/user/api/get-profile', (req, res, ctx) => {
    return res(
      ctx.delay(1200),
      ctx.status(401),
      ctx.json({
        name: 'Ta Cong Duc',
        age: 22,
        country: 'Viet Nam',
      }),
    );
  }),
];
