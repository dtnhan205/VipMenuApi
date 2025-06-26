const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const featureRouter = require('./routers/featureRouter');
const cors = require('cors');

app.use(express.json());
app.use(cors()); 
app.use('/api', featureRouter);

app.listen(port, () => {
  console.log(`Server chạy tại http://localhost:${port}`);
});