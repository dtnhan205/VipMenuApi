const express = require('express');
const app = express();
const port = 3000;
const featureRouter = require('./routers/featureRouter');

app.use(express.json());

app.use('/api', featureRouter);

app.listen(port, () => {
  console.log(`Server chạy tại http://localhost:${port}`);
});