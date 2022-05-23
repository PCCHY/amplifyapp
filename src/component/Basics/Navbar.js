import React from 'react'

const Navbar = ({ onBreakfastClick, menuList }) => {
  return (
    <>
        <nav>
            {
                menuList.map((currEle)=>{
                    return ( <button 
                        onClick={()=>onBreakfastClick(currEle)}>
                        {currEle}
                    </button>
                    );
                })
            }
      </nav>
    </>
  )
}

export default Navbar