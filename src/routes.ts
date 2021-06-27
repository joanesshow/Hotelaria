import { Router, Request, Response } from 'express'
import { getHotel, saveHotel } from './hotel/hotel.controller'

const routes = Router()

routes.get('/', (request: Request, response: Response) => {
    return response.json({message:'Ola'})
})

routes.get('/hotel', getHotel)
routes.post('/hotel', saveHotel)
routes.get('/hospede', getHotel)
routes.get('/quarto-hotel', getHotel)
routes.get('/categoria-quarto', getHotel)

export default routes