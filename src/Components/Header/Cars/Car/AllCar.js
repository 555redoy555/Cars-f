import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Link } from 'react-router-dom';

const AllCar = ({ car }) => {
     const { _id, name, price, img, description } = car;
     return (
          <div>
               <div className="">

                    <div className="col hover-card ">

                         <div className="card    ">
                              <img src={img} className="card-img-top img-fluid  " alt="..." />
                              <div className="card-body">
                                   <h5 className="card-title">{name}</h5>
                                   <p className="card-text text-primary ">{description}</p>
                                   <h2 className="text-primary mb-3 " >
                                        {price}
                                   </h2>
                                   <Link to={`/order/${_id}`} ><Button className="btn btn-warning" >Book</Button></Link>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default AllCar;