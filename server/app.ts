import express, { Express, Request, Response, NextFunction } from 'express';
import path from 'path';
import createError from 'http-errors';
import dotenv from 'dotenv';
var cookieParser = require('cookie-parser');
import rootRouter from './routes/root'

dotenv.config()

const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', rootRouter);

app.use(function(err: any, req: Request, res: Response, next: NextFunction) {
  throw createError.NotFound('Not Found');
});

app.use(function(err: any, req: Request, res: Response, next: NextFunction) {
  res.locals.message = err.message;
  res.locals.error = err;

  res.status(err.status || 500);
  res.json({ message: err.message});
});

const port = process.env.PORT || 8090

app.listen(port, () => {
  console.log(`App is running on port ${port}`)
})