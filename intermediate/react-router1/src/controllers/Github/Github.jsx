import React, { useEffect, useState } from 'react';

function Github() {
  const [data, setData] = useState({}); // initialize as an object

  useEffect(() => {
    fetch('https://api.github.com/users/snipeet03')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setData(data);
      });
  }, []); // run only once on mount

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      Github followers: {data.followers}
      <img src={data.avatar_url}alt="Github" width={300}/>
    </div>
  );

}
export default Github;




