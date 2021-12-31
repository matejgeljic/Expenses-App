import React from 'react';
import './ExpensesFilter.css';

const ExpenseFilter = (props) => {
  const searchByValue = (e) => {
    props.onSearchByValue(e.target.value);
  };

  const searchByName = (e) => {
    props.onSearchByName(e.target.value);
  };

  return (
    <div className="select__container">
      <label htmlFor="amount">Search by amout</label>
      <select name="amount" onChange={searchByValue}>
        <option value={0}>Clear Filters</option>
        <option value={50}>Over $50</option>
        <option value={100}>Over $100</option>
        <option value={500}>Over $500</option>
      </select>

      <label htmlFor="name">Search by name</label>
      <select name="name" onChange={searchByName}>
        <option value="all">Clear Filters</option>
        {props.items.map((item) => (
          <option key={item.id} value={item.title}>
            {item.title}
          </option>
        ))}
        ;
      </select>
    </div>
  );
};

export default ExpenseFilter;
