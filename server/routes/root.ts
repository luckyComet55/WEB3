import express, { Express, Router, Request, Response } from "express";

const router: Router = Router().get('/', (req: Request, res: Response) => {
  res.send('Hello!!!')
})

export default router
