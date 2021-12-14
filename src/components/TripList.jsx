import { useState } from 'react'
import { useFetch } from '../hooks/useFetch'

function TripList() {
  const [url, setUrl] = useState('http://localhost:3001/trips')
  const { data: trips, isPending, error } = useFetch(url)

  return (
    <>
      <h1 className='text-4xl mb-8'>Trip List</h1>
      { isPending && <div className="my-4 text-xl text-yellow-500 text-center">Loading...</div> }
      { error && <div className="bg-red-100 rounded-lg text-center px-4 py-1 mb-4 ">{error}</div> }
      <div className="mb-4">
        <button onClick={() => setUrl('http://localhost:3001/trips?loc=europe')} className="btn mr-2">Europe</button>
        <button onClick={() => setUrl('http://localhost:3001/trips?loc=america')} className="btn mr-2">America</button>
        <button onClick={() => setUrl('http://localhost:3001/trips')} className="btn">All</button>
      </div>
      <ul className='flex flex-col w-96'>
        {trips && trips.map((trip) => (
          <li key={trip.id} className="border mb-4 last:mb-0 px-4 py-8 rounded-xl bg-cyan-400 shadow-xl shadow-cyan-400/25">
            <h2 className="font-bold text-2xl mb-2">{trip.title}</h2>
            <p className="text-lg font-semibold">{trip.price}</p>
          </li>
        ))}
      </ul>
    </>
  )
}

export default TripList