import React from 'react'

const MenuCard = ({ data }) => {
    
    return( 
    <>
    {data.map((currEle)=>{
        //destructuring
        const {id, image, name, category, price, description} = currEle;
        return (
        
            <div className="card-container" key={id}>
                <div className="card">
                    <div className="card-body">
                        <span className="card-number subtle">{id}</span>
                        <span className="card-author subtle">{category}</span>
                        <h2 className="card-title">{name}</h2>
                        <span className="card-description subtle">{description}</span>
                        <div className="card-read" >Read</div>
                    </div>
                    {/* <img src={images} alt="images" className="card-media" /> */}
                    <span className="class-order">Order Now</span>
                </div>
            </div>
         );
    })
}
    </>);
};

export default MenuCard