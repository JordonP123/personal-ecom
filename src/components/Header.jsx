import { useState, useEffect } from 'react'

const Header = () => {

    const [dropdown, setDropdown] = useState(true)
    const [width, setWidth] = useState(701)

        if(width < 702 && width > 698){
        window.addEventListener("resize", function(event) {
            setWidth(document.body.clientWidth)
        })
    }

    useEffect(() => {
        if(width < 700){
            setDropdown(false)
        }
        if(width > 700){
            setDropdown(true)
        }
    }, [width])

  return (
    <header className="flex flex-row p-2 shadow-lg">
    
    {dropdown &&  <div className="w-1/3 flex justify-start">
        <p className="px-2 md:px-10 py-3 text-1xl font-thin">Men</p>
        <p className="px-2 md:px-10 py-3 text-1xl font-thin">Women</p>
        <p className="px-2 md:px-10 py-3 text-1xl font-thin">Children</p>
      </div> }
    {!dropdown &&
    <div className="w-1/3 flex justify-start">
        <p>hello</p>
        </div>
    }
      <div className="w-1/3 flex justify-center">
        <p className="text-4xl">Shoes :{')'}</p>
      </div>
      <div className="w-1/3 flex justify-end">
        <i className="fa-regular fa-user py-4 px-4 md:text-2xl md:px-10 md:py-2"></i>
        <i className="fa-solid fa-cart-shopping py-4 px-4 md:text-2xl md:px-10 md:py-2"></i>
      </div>
    </header>
  );
};

export default Header;
