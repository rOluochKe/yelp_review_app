import React, { useContext, useEffect } from 'react'

import { useParams } from 'react-router-dom'
import { RestaurantsContext } from '../context/RestaurantsContext'
import RestaurantFinder from '../apis/RestaurantFinder'

const RestaurantDetailPage = () => {
  const { id } = useParams()

  const { selectedRestaurant, setSelectedRestaurant } =
    useContext(RestaurantsContext)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await RestaurantFinder.get(`/${id}`)
        // console.log(response)

        setSelectedRestaurant(response.data.data)
      } catch (err) {
        console.log(err)
      }
    }

    fetchData()
  }, [])

  return (
    <div>
      {selectedRestaurant && (
        <>
          <h1 className='text-center display-1'>
            {selectedRestaurant.restaurant.name}
          </h1>
          <div className='text-center'>Rating</div>
          <div className='mt-3'>Reviews</div>
          Add Review
        </>
      )}
    </div>
  )
}

export default RestaurantDetailPage
