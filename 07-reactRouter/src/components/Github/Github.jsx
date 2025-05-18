import React, { useEffect } from 'react'

function Github() {

	useEffect(() => {
		fetch('https://api.github.com/users/nav-github3').then
	}, [])

  return (
	<div className="text-center m-4 bg-grey-600 ext-white p-4 text-3xl ">Github follwers </div>
  )
}

export default Github
