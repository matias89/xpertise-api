import { Router } from 'express';

const router = Router();

router.get('/survey', (req, res) => {
  res.json({ message: 'Hello World' });
});

router.post('/survey', (req, res) => {
  const body = req.body;
  console.log(body);
  res.json({ message: 'ok' });
});

export default router;