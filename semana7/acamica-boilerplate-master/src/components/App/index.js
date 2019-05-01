import React, {useReducer} from 'react'
import { today, hotelsData } from '../../assets/data'
import { Hero } from '../Hero'
import { Filters } from '../Filters'
import { Hotels } from '../Hotels'
import './index.css'

const App = () => {

    const [state, setState] = useReducer(
        (state, newState) => ({...state, ...newState}),
        {
            filters: {
            dateFrom: today,
            dateTo: new Date(today.valueOf() + 86400000),
            country: undefined,
            price: undefined,
            rooms: undefined
            },
            hotels: hotelsData
        }
    )
    const handleFilterChange = (payload) => {
        setState({
            filters: payload
        })
    }
    
    
    const {filters, hotels} = state    

    const filterHotelsByCountry = hotels.filter(hotel => hotel.country === filters.country || filters.country === undefined || filters.country === 'Todos los países')
    const filterHotelsByPrice = filterHotelsByCountry.filter(hotel => hotel.price == filters.price || filters.price === undefined || filters.price === 'Cualquier precio')
    const filterHotelsByRooms = filterHotelsByPrice.filter(hotel => (filters.rooms - 10 <= hotel.rooms && hotel.rooms <= filters.rooms) || filters.rooms === undefined || filters.rooms === 'Cualquier tamaño')
    const filteredHotels = filterHotelsByRooms.filter(hotel => hotel.availabilityFrom <= filters.dateFrom && hotel.availabilityTo >= filters.dateTo)
    
    

    return (
        <div>
            <Hero filters={ filters } />
            <Filters filters={ filters } onFilterChange={handleFilterChange} />
            <Hotels hotels={filteredHotels}/>
        </div>
    )
    
}
export default App;
