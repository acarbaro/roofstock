import React from 'react'
import {
    Link,
} from "react-router-dom";
import { formatMoneyHelper, setGrossYieldHelper } from "../constants/helpers";

export default function GridView({ data }) {
    return (
        <div className="grid-container">
            {data && !!data.length && 
                data.map(property => !!property.financial && (
                    <div className="card" key={property.id}>
                        <Link to={`/${property.id}`}>
                            <div className="card-image" style={{ backgroundImage:  `url(${property.mainImageUrl})`}}>
                                <div className="card-image-overlay"> 
                                    <h3 className="card-financial-text">{`${formatMoneyHelper(property.financial.listPrice)}`}</h3>
                                    {property.physical && <span className="card-physical-text">
                                        {property.physical.bedRooms} bd; {property.physical.bathRooms} ba |
                                        {` ${property.physical.squareFeet}`} sqft |
                                        Built in {property.physical.yearBuilt}</span>
                                    }
                                </div>
                            </div>
                        </Link>
                        <div className="card-row-container">
                            <span className="card-row-title">Monthly Rent</span>
                            <div>
                                <h4 className="card-row-text">{formatMoneyHelper(property.financial.monthlyRent)}</h4>
                            </div>
                        </div>
                        <div className="card-row-container">
                            <span className="card-row-title">Monthly Rent</span>
                            <div>
                                <h4 className="card-row-text">{setGrossYieldHelper(property.financial.monthlyRent, property.financial.listPrice)}</h4>
                            </div>
                        </div>
                        <div className="card-row-container no-border">
                            <span className="card-row-title">{property.address.address1}</span>
                            <div>
                                <h5 className="card-row-text">{`${property.address.city}, ${property.address.state} ${property.address.zip}`}</h5>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
