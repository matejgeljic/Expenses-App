import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import React from 'react';
import { useState } from 'react/cjs/react.development';
import ExpensesModal from './ExpenseModal';
import Wrapper from '../Wrapper';

function ExpenseItem(props) {
  const [dialogOpen, setDialogOpen] = useState(false);

  const openDialogHandler = () => {
    setDialogOpen(true);
  };

  const closeDialogHandler = () => {
    setDialogOpen(false);
  };

  let amountValue;

  if (props.amount <= 100) {
    amountValue = 'low';
  } else if (props.amount > 100 && props.amount < 500) {
    amountValue = 'medium';
  } else {
    amountValue = 'high';
  }

  return (
    <Wrapper>
      {dialogOpen && (
        <ExpensesModal
          title={props.title}
          amount={props.amount}
          quantity={props.quantity}
          date={props.date.toLocaleDateString()}
          onClose={closeDialogHandler}
        />
      )}
      <li>
        <Card className={`expense-item ${amountValue}-value`}>
          <ExpenseDate date={props.date} />
          <div className="expense-item__description">
            <h2 onClick={openDialogHandler}>
              {props.title} x {props.quantity}
            </h2>
            <div className="expense-item__price">$ {props.amount}</div>
          </div>
        </Card>
      </li>
    </Wrapper>
  );
}

export default ExpenseItem;
