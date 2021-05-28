import React from 'react';
import { formatMoneyHelper, setGrossYieldHelper } from "../constants/helpers";
import {
    Link,
} from "react-router-dom";

const tableHeader = [
    {
        name: "Address",
        id: "1"
    },
    {
        name: "Price",
        id: "2"
    },
    {
        name: "Year Built",
        id: "3"
    },
    {
        name: "Monthly Rent",
        id: "4"
    },
    {
        name: "Gross Yield",
        id: "5"
    },
]

export default function ListView({ data }) {
    return (
        <div className="list-container">
            <table className="table-view">
                <tbody>
                    <tr>
                        {tableHeader.map(header =>
                            <th width={"10%"} key={header.id}>
                                <span>{header.name}</span>
                            </th>
                        )}
                    </tr>
                {data.map(property => !!property.financial &&
                    <tr key={property.id}>
                        <td>
                            <Link to={`/${property.id}`}>
                                <img alt={property.id} className="property-image" src={property.mainImageUrl} />
                            </Link>
                            <div className="property-address-text">
                                <Link to={`/${property.id}`}>{property.address.address1}</Link>
                            </div>
                        </td>
                        <td>{formatMoneyHelper(property.financial.listPrice)}</td>
                        <td>{property.physical.yearBuilt}</td>
                        <td>{formatMoneyHelper(property.financial.monthlyRent)}</td>
                        <td>{setGrossYieldHelper(property.financial.monthlyRent, property.financial.listPrice)}</td>
                    </tr>
                )}
                </tbody>
            </table>
           
        </div>
    )
}
