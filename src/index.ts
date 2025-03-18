import express, { Application } from 'express';

// Router
import poRouter from './routers/po.router';

const PORT = 3000;
const app: Application = express();

app.use(express.json());

app.use("/purchase-orders", poRouter);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});