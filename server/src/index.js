import express from 'express';

import surveyRouter from './routes/survey.route.js';

const app = express();

app.use('/api', surveyRouter);

app.listen(3000, () => {
  console.log('Server on port 3000');
});