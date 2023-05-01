import React,{Fragment} from 'react';
import HeaderCart from './HeaderCart';

export default function Header(props) {
  return (
    <Fragment>
    <div >
      <h1>Medicine Shop</h1>
      <HeaderCart onShow={props.onShow} />
    </div>

    
  </Fragment>
  )
}
