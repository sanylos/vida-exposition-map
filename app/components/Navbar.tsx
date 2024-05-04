import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-xl navbar-dark bg-black position-relative px-xl-5 bg-cyan-900" style={{ height: '5.5rem' }}>
      <div className="flex justify-between items-center h-full w-auto">
        <svg className="ms-10 ps-1" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="143.455px" height="59px" viewBox="56.772 0 143.455 59" enable-background="new 56.772 0 143.455 59" xmlSpace="preserve"><g id="Layer_1_1_"></g><g id="Layer_2"></g><g id="Layer_3"><g>
          <polygon fill="#FFFFFF" points="80.448,16.018 71.226,33.545 70.794,44.762 66.372,36.025 69.068,18.714 59.038,21.087 
			56.772,40.987 67.073,59 80.232,56.088 82.821,27.504 90.695,13.59 		"></polygon>
          <polygon fill="#FFFFFF" points="103.692,10.462 93.823,12.835 89.994,23.891 96.411,52.528 108.114,49.939 100.996,18.175 		"></polygon>
          <path fill="#FFFFFF" d="M127.152,4.908l-0.701,0.162l-14.399,3.452l-1.726,4.908l7.712,34.354l18.174-4.044
			c4.314-0.971,7.011-2.104,9.276-4.1c5.069-4.26,6.85-11.217,4.961-19.522C147.646,7.766,139.232,2.211,127.152,4.908z
			 M136.752,31.604c-1.188,1.24-2.697,1.995-5.124,2.535l-4.26,0.971l-4.207-18.714l4.368-0.971
			c5.879-1.294,9.653,1.294,11.056,7.496C139.395,26.588,138.801,29.446,136.752,31.604z"></path>
          <polygon fill="#FFFFFF" points="153.092,0 155.896,12.134 153.632,39.854 165.119,37.266 165.442,30.201 163.123,10.57 
			179.896,37.59 188.74,38.453 166.359,1.402 		"></polygon>
          <polygon fill="#FFFFFF" points="189.117,25.833 193.486,26.372 190.035,11.973 186.961,3.613 177.9,2.643 181.189,11.379 		"></polygon>
          <polygon fill="#FFFFFF" points="196.561,29.446 187.77,28.475 191.707,38.775 200.228,39.585 		"></polygon>
        </g>
        </g>
        </svg>
        <span className='me-10 text-xl font-medium text-white'>
          MAPA EXPOZICE
        </span>
      </div>
    </nav>
  )
}

export default Navbar