import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';

interface RowProp {
  isSmall: boolean;
  title: string;
  url: string;
}

const Row: React.FC<RowProp> = ({ isSmall, title, url }) => {
  const [movies, setMovies] = useState<any>([]);

  useEffect(() => {
    axios.get(url).then(response => {
      console.log(response.data.results);
      setMovies(response.data.results);
    });
  }, [url]);

  return (
    <div className="text-white h-[18rem] pt-[1rem] sm:pl-[2.4rem]">
      <div className="font-bold text-lg h-6 mb-2">
        {title}
      </div>

      <div
        className={`${isSmall ? 'h-[11rem]' : 'h-[14rem]'} overflow-x-auto pt-2 flex gap-1 w-full`}
        style={{ scrollbarWidth: 'none' }}
      >
        <div className="flex w-max gap-1">
          {movies.map((movie: any, index: any) => (
              <Card key={index} isSmall={isSmall} movie={movie} index={index}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Row;