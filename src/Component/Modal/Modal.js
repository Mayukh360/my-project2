import React,{Fragment} from 'react';
import ReactDom from 'react-dom';

 
const Backdrop=(props)=>{
    return( <div onClick={props.onClose} ></div>);
 }

 const ModalOverlay=(props)=>{
    return (<  >
        <div >{props.children}</div>
    </>);
 }
 const portalElement=document.getElementById('overlay');

export default function Modal(props) {
  return (
    <Fragment>
  {ReactDom.createPortal(<Backdrop onClose={props.onHide}/>,portalElement)}
  {ReactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portalElement)}
    </Fragment>
  )
}
