import React, { useEffect, useState } from 'react';
import axios from '../axios'
import { ImageURL } from '../constants/constants';
interface RowProp {
  isSmall: boolean;
  title: string
  url:string
}

const Row: React.FC<RowProp> = ({ isSmall, title ,url}) => {
  const [movies,setMovies] = useState<any>([])

  useEffect(()=>{
    axios.get(url).then(response=>{
        console.log(response.data.results);        
        setMovies(response.data.results)
    })
    
},[url])

  return (
    <div className="text-white  h-[18rem] pt-[1rem] sm:pl-[2.4rem]">
      <div className="font-bold text-lg h-6 mb-2">
        {title}
      </div>

      <div
        className={` overflow-x-auto h-[14rem] pt-2 flex gap-1 w-full`}
        style={{ scrollbarWidth: 'none' }}
      >
        <div className="flex w-max gap-1">
          {movies.map((movie:any, index:any) => (
            <div
              key={index}
              className={`${
                isSmall ? 'h-full w-[14rem] ml-2' : 'h-full ml-2 w-[23rem]'
              }  flex justify-center items-center`}
            >
              <img
                src={`${ImageURL}${movie.backdrop_path}`}
                alt=""
                className="object-cover h-full w-full"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Row;
