import React from 'react'
import './index.css'

const DataTable = (props) => {
  const {x} = props

  return (
    <div className={x?"shrink-table-container":"table-container"}>
        <p className="referrer-style">Referrer</p>
        <table className={x?"shrink-table":"table"}>
        <tr className="table-head-style">
          <th>Location</th>
          <th>Views</th>
          <th>Sales</th>
          <th>Conversion</th>
          <th>Total</th>
        </tr>
        <tr className="table-data-style">
          <td>google.com</td>
          <td>3746</td>
          <td>752</td>
          <td>43%</td>
          <td>$19,291</td>
        </tr>
        <tr className="table-data-style">
          <td>facebook.com</td>
          <td>8126</td>
          <td>728</td>
          <td>32%</td>
          <td>$17,638</td>
        </tr>
        <tr className="table-data-style">
          <td>twitter.com</td>
          <td>8836</td>
          <td>694</td>
          <td>28%</td>
          <td>$16,218</td>
        </tr>
        <tr className="table-data-style">
          <td>Direct,email,IM</td>
          <td>1173</td>
          <td>645</td>
          <td>24%</td>
          <td>$14,421</td>
        </tr>
        <tr className="table-data-style">
          <td>linkedin.com</td>
          <td>2739</td>
          <td>539</td>
          <td>20%</td>
          <td>$12,370</td>
        </tr>
        <tr className="table-data-style">
          <td>instagram.com</td>
          <td>2739</td>
          <td>539</td>
          <td>20%</td>
          <td>$12,370</td>
        </tr>
       
        
      </table>
      <p className="style-showmore">Show More</p>
    </div>
  )
}

export default DataTable