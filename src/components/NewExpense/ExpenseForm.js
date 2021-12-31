import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {
  //const [enteredTitle, setEnteredTitle] = useState('');
  //const [enteredAmount, setEnteredAmount] = useState('');
  //const [enteredQuantity, setEnteredQuantity] = useState('');
  //const [enteredDate, setEnteredDate] = useState('');

  const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredQuantity: '',
    enteredDate: '',
  });

  const [isTitleValid, setTitleIsValid] = useState(true);
  const [isValueSame, setIsValueSame] = useState(false);

  const titleChangeHandler = (event) => {
    //setEnteredTitle(event.target.value);
    setUserInput({
      ...userInput,
      enteredTitle: event.target.value,
    });
    setUserInput((prevState) => {
      return { ...prevState, enteredTitle: event.target.value };
    });
  };

  const amountChangeHandler = (event) => {
    //setEnteredAmount(event.target.value);
    setUserInput({
      ...userInput,
      enteredAmount: event.target.value,
    });
  };

  const quantityChangeHandler = (event) => {
    //setEnteredQuantity(event.target.value);
    setUserInput({
      ...userInput,
      enteredQuantity: event.target.value,
    });
  };

  const dateChangeHandler = (event) => {
    //setEnteredDate(event.target.value);
    setUserInput({
      ...userInput,
      enteredDate: event.target.value,
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (userInput.enteredTitle.trim().length === 0) {
      setTitleIsValid(false);
      return;
    } else {
      setTitleIsValid(true);
    }

    if (+userInput.enteredAmount === +userInput.enteredQuantity) {
      setIsValueSame(true);
      return;
    } else {
      setIsValueSame(false);
    }

    const expenseData = {
      title: userInput.enteredTitle,
      amount: +userInput.enteredAmount,
      quantity: +userInput.enteredQuantity,
      date: new Date(userInput.enteredDate),
    };

    props.onAddExpenseData(expenseData);
    setUserInput();
    props.onNewExpenseForm();
  };

  return (
    <div className="new-expense">
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            {isTitleValid ? (
              <label>Title</label>
            ) : (
              <label className="new-expense__error">Title Can't be empty</label>
            )}
            <input
              type="text"
              value={userInput.enteredTitle}
              onChange={titleChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              value={userInput.enteredAmount}
              onChange={amountChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Quantity</label>
            <input
              type="number"
              min="1"
              step="1"
              value={userInput.enteredQuantity}
              onChange={quantityChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2022-12-31"
              value={userInput.enteredDate}
              onChange={dateChangeHandler}
            />
          </div>
        </div>
        {isValueSame && (
          <p className="new-expense__error">
            Amount and Quantity can't be same
          </p>
        )}
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
