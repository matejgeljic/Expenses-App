import React, { useState } from 'react';
import ExpenseForm from './NewExpense/ExpenseForm';
import Expenses from './Expenses/Expenses';
import Wrapper from './Wrapper';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    quantity: 13,
    date: new Date(2020, 7, 14),
  },
  {
    id: 'e2',
    title: 'New TV',
    amount: 799.49,
    quantity: 1,
    date: new Date(2020, 2, 12),
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    quantity: 4,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk',
    amount: 450,
    quantity: 1,
    date: new Date(2021, 5, 12),
  },
];

let FILTERED_DUMMY_EXPENSES = [];

const Main = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const [newExpenseForm, setNewExpenseForm] = useState(false);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  const showFormHandler = () => {
    setNewExpenseForm(!newExpenseForm);
  };

  const searchByValue = (q) => {
    if (q === 0) {
      return setExpenses(DUMMY_EXPENSES);
    }

    FILTERED_DUMMY_EXPENSES = [];
    DUMMY_EXPENSES.filter((expense) => expense.amount > q).map(
      (filteredExpense) => {
        return FILTERED_DUMMY_EXPENSES.push(filteredExpense);
      }
    );
    setExpenses(FILTERED_DUMMY_EXPENSES);
  };

  const searchByName = (q) => {
    if (q === 'all') {
      return setExpenses(DUMMY_EXPENSES);
    }

    FILTERED_DUMMY_EXPENSES = [];

    DUMMY_EXPENSES.filter((expense) => expense.title === q).map(
      (filteredExpense) => {
        return FILTERED_DUMMY_EXPENSES.push(filteredExpense);
      }
    );
    setExpenses(FILTERED_DUMMY_EXPENSES);
  };

  return (
    <Wrapper>
      <div>
        {!newExpenseForm ? (
          <div className="add-new-expense">
            <button onClick={showFormHandler}>Add New Expense</button>
          </div>
        ) : (
          <ExpenseForm
            onAddExpenseData={addExpenseHandler}
            onNewExpenseForm={showFormHandler}
          />
        )}
        <Expenses
          items={expenses}
          onSearchByValue={searchByValue}
          onSearchByName={searchByName}
        />
      </div>
    </Wrapper>
  );
};

export default Main;
