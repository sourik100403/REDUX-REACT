import React from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
// import { depositeMoney } from '../state/action-creators';
import { actionCreators } from '../state/index';
import { useSelector } from 'react-redux'

const Shop = () => {
const dispatch= useDispatch();
 
const balence=useSelector(state=>state.amount)
const {withdrawMoney,depositeMoney}=bindActionCreators(actionCreators,dispatch)
  return (
    <div className='mx-3'>
        <h2>Deposite/Withdraw Money</h2>
      {/* <button className="btn btn-danger mx-1" onClick={()=>{dispatch(actionCreators.withdrawMoney(100))}}>-</button>
      Update Your Balence
      <button className="btn btn-primary mx-1"  onClick={()=>{dispatch(actionCreators.depositeMoney(100))}}>+</button> */}

      <button className="btn btn-danger mx-1" onClick={()=>{withdrawMoney(100)}}>-</button>
      Update Your Balence {balence}
      <button className="btn btn-primary mx-1" onClick={()=>{depositeMoney(100)}}>+</button>
    </div>
  )
}

export default Shop
