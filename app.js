import express from 'express';
import morgan from 'morgan';
import { router as tourRouter } from './Routes/tourRoutes.js'
import { router as userRouter } from './Routes/userRoutes.js'
export const app = express();

app.use(morgan('dev'))

app.use(express.json())


app.use('/api/v1/tours', tourRouter)
app.use('/api/v1/users', userRouter)

