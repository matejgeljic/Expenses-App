import React from 'react';
import ExpensesList from './ExpensesList';
import Card from '../UI/Card';
import ExpensesChart from './ExpensesChart';
import ExpenseFilter from './ExpenseFilter';

const Expenses = (props) => {
  return (
    <Card className="expenses">
      <ExpensesChart expenses={props.items} />
      <ExpenseFilter
        onSearchByValue={props.onSearchByValue}
        onSearchByName={props.onSearchByName}
        items={props.items}
      />
      <ExpensesList items={props.items} />
    </Card>
  );
};

export default Expenses;
