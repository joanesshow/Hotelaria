import { Router, Request, Response } from 'express'
import { getHotel, saveHotel, getHotels, updateHotel } from './hotel/hotel.controller'

const routes = Router()

routes.get('/', (request: Request, response: Response) => {
    return response.json({message:'Ola'})
})

routes.get('/hotel', getHotels)
routes.get('/hotel/:id', getHotel)
routes.post('/hotel', saveHotel)
routes.put('/hotel/:id', updateHotel)



routes.get('/hospede', getHotel)
routes.get('/quarto-hotel', getHotel)
routes.get('/categoria-quarto', getHotel)

export default routes