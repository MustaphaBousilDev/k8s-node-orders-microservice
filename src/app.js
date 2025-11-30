const express = require('express');
const app = express();
app.use(express.json());

let orders = []; 
app.get('/health', (req, res) => res.send({ status: 'ok' }));
app.get('/orders', (req, res) => res.json(orders));
app.post('/orders', (req, res) => {
  const id = orders.length + 1;
  const order = { id, ...req.body, createdAt: new Date().toISOString() };
  orders.push(order);
  res.status(201).json(order);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Orders service listening on ${PORT}`));