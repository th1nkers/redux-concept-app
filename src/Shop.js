import React from 'react'
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import {actionCreators} from './state/index';


const Shop = () => {
  const dispatch = useDispatch();
  const {withdrawMoney, depositMoney} = bindActionCreators(actionCreators, dispatch)
  return (
    <div>
        <h3 className="mt-3">Deposit/Withdraw Money</h3>
        {/* <button className="btn btn-primary" onClick={()=>{dispatch(actionCreators.withdrawMoney(100))}}>-</button>
        Update Balance
        <button className="btn btn-primary" onClick={()=>{dispatch(actionCreators.depositMoney(100))}}>+</button> */}
        <button className="btn btn-primary" onClick={()=>{withdrawMoney(100)}}>-</button>
        Update Balance
        <button className="btn btn-primary" onClick={()=>{depositMoney(100)}}>+</button>
        </div>
  )
}

export default Shop