import React from 'react';
import SNEAKERS from "./SNEAKERS";

function Product(props) {
    const data = SNEAKERS;
    const lowerCaseName = props.name.toLowerCase();

    if (lowerCaseName  === "all") {
        return (
            <>
                {data.map((sneaker, index) => (
                    <div key={index} className="col card mt-5 text-center m-2" style={{ width: '18rem' }}>
                        <img src={sneaker.imageUrl} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{sneaker.brand}</h5>
                            <p className="card-text">{sneaker.colorway}</p>
                            <p className="card-text">{sneaker.model}</p>
                        </div>  
                    </div>
                ))}
            </>
        );
    } else {
        const filteredSneakers = data.filter(sneaker => sneaker.model.toLowerCase() === lowerCaseName);
        
        return (
            <>
                {filteredSneakers.map((sneaker, index) => (
                    <div key={index} className="col-6 card mt-5 m-2 text-center" style={{ width: '200px' }}>
                        <img src={sneaker.imageUrl} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{sneaker.brand}</h5>
                            <p className="card-text">{sneaker.colorway}</p>
                            <p className="card-text">{sneaker.model}</p>
                        </div>
                    </div>
                ))}
            </>
        );
    }
}

export default Product;