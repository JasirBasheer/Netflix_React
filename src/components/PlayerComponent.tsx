import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";


const PlayerComponent = () => {
  const navigate = useNavigate();
  const { id } = useParams()
  console.log(id);

  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    type: ""
  });

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNjVlZWUzMzI5MmJjMmM3MGYwYTk3MGI1MTliNWIwMSIsIm5iZiI6MTczMDEyNjc0My44NDQ2NzEsInN1YiI6IjY0NzBkOTk0NTQzN2Y1MDEyNjNhYzE3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.w7x7blGSOycIQE_nfkc-sXOOGXYeDqHQjR5zsuqRIdQ'
    }
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
      .then(res => res.json())
      .then(res => {
        if (res.results && res.results.length > 0) {
          setApiData(res.results[0]);
        }
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="bg-cover bg-center">

      <FaArrowLeft
      className='ml-12 mt-11 cursor-pointer'
        onClick={() => { navigate('/') }}
      />
      {apiData.key && (
        <div className="flex items-center justify-center h-screen ">
          <iframe
            width='80%'
            height='80%'
            src={`https://www.youtube.com/embed/${apiData.key}?autoplay=1`}
            title='trailer'
            allowFullScreen
          ></iframe>
        </div>
      )}
    
    </div>
  );
};

export default PlayerComponent;
