import React from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';

import Backdrop from './Backdrop';
import './WishListItemModal.css';

const ModalOverlay = props => {
  const content = (
    <div className="item-tiny-modal" style={props.style}>
        <div className="item-tiny-modal-content">
          {props.children}
        </div>
    </div>
  );
  return ReactDOM.createPortal(content, document.getElementById('item-tiny-modal-hook'));
};

const WishListItemModal = props => {
  return (
    <React.Fragment>
      {props.show && <Backdrop onClick={props.onCancel} />}
      <CSSTransition
        in={props.show}
        mountOnEnter
        unmountOnExit
        timeout={200}
        classNames="modal"
      >
        <ModalOverlay {...props} />
      </CSSTransition>
    </React.Fragment>
  );
};

export default WishListItemModal;
