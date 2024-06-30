// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { CardProps } from '../types';


export default function Card({name, population, region, capital, flag}: CardProps) {
  return (
      <div className="shadow-lg rounded-lg w-5/6 pb-8 mx-auto">
          <img src={flag} alt="image-card" className='rounded-t-lg w-full'/>
        <h3 className="px-6 pt-6 font-bold text-lg">{name}</h3>
        <div className="px-6 py-4">
          <p className="text-gray-700 text-base pb-1">
            <strong>Population: <span className='font-normal'>{population.toLocaleString('en-US')}</span></strong>
          </p>
          <p className="text-gray-700 text-base pb-1">
            <strong>Region: <span className='font-normal'>{region}</span></strong> 
          </p>
          <p className="text-gray-700 text-base pb-1">
            <strong>Capital: <span className='font-normal'>{capital}</span></strong> 
          </p>
        </div>
      </div>
  )
}
