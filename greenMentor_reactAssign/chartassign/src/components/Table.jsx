import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { gettingDataSuccess } from '../redux/actions';



export function Tablechart() {
    const data = useSelector((state)=> state.data);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(gettingDataSuccess());
    },[dispatch]);
     
    const getCellStyle = (value) => {
        return value && parseFloat(value) < 0 ? { color: 'green' } : { color: 'red' };
      };
  return (
    <div id='tablebox'>
        <table>

       <thead>
                    <tr>
                      <th>MONTH</th>
                      <th>EMISSION</th>
                      <th>REVENUE/EMISSION RATIO</th>
                      <th>YOY R/E CHANGE</th>
                    </tr>

       </thead>

              <tbody>
                    {
                      data.filter((data) => data.year == '2023').map((data) => {
                        return <tr>
                          <td>{data.month}</td>
                          <td>{data.emissions}</td>
                          <td>{data.r_e}</td>  
                          <td style={getCellStyle(data.yoy_r_e_change)}>{data.yoy_r_e_change}</td>
                        </tr>
                      })
                    }
                  </tbody>
            </table>
    </div>
  )
}

export default Tablechart;