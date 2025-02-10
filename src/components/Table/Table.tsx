import "./Table.scss";
import { properties } from "../../testData"; // Importera din data
import StatusBtn from "../StatusBtn/StatusBtn";
import { CiShare1 } from "react-icons/ci";

const PropertyTable = () => {
  return (
    <div className="table-container">
      <table className="property-table">
        <thead>
          <tr>
            <th>
              <input type="checkbox" name="" id="" />
            </th>
            <th>Date and Time</th>
            <th>Status</th>
            <th>Description</th>
            <th>Name</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {properties.map((property, index) => (
            <tr key={index}>
              <td>
                <input type="checkbox" name="" id="" />
              </td>
              <td>{property.streetAddress}</td>
              <td>
                <div style={{ width: 175 }}>
                  <StatusBtn type="clickable" />
                </div>
              </td>
              <td className="center">
                <p>COMMUNICATION ERROR LA1</p>
              </td>
              <td className="center">
                <p>SYS_LA3COM_LA</p>
              </td>
              <td className="center">
                <a href="#">
                  WebPort <CiShare1 />
                </a>
              </td>
              <td className="center">
                <img src="src\assets\Property 1=clicked.svg" alt="" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PropertyTable;
