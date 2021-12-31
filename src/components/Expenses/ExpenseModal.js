import React from 'react';
import './ExpenseModal.css';
import Card from '../UI/Card';
import ReactDOM from 'react-dom';

const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.onClose} />;
};

const ModalOverlay = (props) => {
  return (
    <Card className="modal">
      <header className="header">
        <h2>You just opened expense {props.title}</h2>
      </header>
      <div className="content">
        <p>You made this expense on {props.date}</p>
        <p>
          You spent ${props.amount} and you bought {props.quantity} items
        </p>
      </div>
      <footer className="actions">
        <button className="button" onClick={props.onClose}>
          Okay
        </button>
      </footer>
    </Card>
  );
};

const ExpensesModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          amount={props.amount}
          quantity={props.quantity}
          date={props.date}
          onClose={props.onClose}
        />,
        document.getElementById('backdrop-root')
      )}
    </React.Fragment>
  );
};

export default ExpensesModal;
