import React, {useEffect} from 'react'
import './footer.css'

const Footer = () => {

  useEffect(() => { 
     console.log("footer inside baby - 1");
  }, [])

  console.log("footer outside baby - 2");

  return (
    <div className="footer">Footer</div>
  )
}

export default Footer