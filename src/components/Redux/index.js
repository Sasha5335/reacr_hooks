import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCustomers } from './acyncActions/customers';
import styles from './Redux.module.css';

function Redux() {
  const dispatch = useDispatch();
  const cach = useSelector((state) => state.cash.cash);
  const customers = useSelector((state) => state.customers.customers);

  const addCash = (cash) => {
    dispatch({ type: 'ADD_CASH', payload: cash });
  };

  const getCash = (cash) => {
    dispatch({ type: 'GET_CASH', payload: cash });
  };

  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now(),
    };
    dispatch({ type: 'ADD_CUSTOMER', payload: customer });
  };

  const addManyCustomers = () => {
    dispatch(fetchCustomers());
  };

  const removeCustomer = (customer) => {
    dispatch({ type: 'REMOVE_CUSTOMER', payload: customer.id });
  };

  return (
    <div className={styles.reduxApp}>
      <h1>{cach}</h1>
      <div>
        <button
          onClick={() => {
            addCash(Number(prompt()));
          }}
          type="button"
          className="btn m-2 btn btn-secondary"
        >
          Пополнить счет
        </button>
        <button
          onClick={() => {
            getCash(Number(prompt()));
          }}
          type="button"
          className="btn m-2 btn btn-secondary"
        >
          Снять со счета
        </button>
      </div>

      <div>
        <button
          onClick={() => {
            addCustomer(prompt());
          }}
          type="button"
          className="btn m-2 btn btn-secondary"
        >
          Добавить клиента
        </button>
        <button
          onClick={() => {
            addManyCustomers();
          }}
          type="button"
          className="btn m-2 btn btn-secondary"
        >
          Получить клиентов из базы
        </button>

        {customers.length > 0 ? (
          <div>
            {customers.map((customer, i) => (
              <div
                key={i}
                onClick={() => removeCustomer(customer)}
                className="p-2 mb-2 rounded-3 border border-secondary text-white "
              >
                {customer.name}
              </div>
            ))}
          </div>
        ) : (
          <p>Клиенты отсутствуют</p>
        )}
      </div>
    </div>
  );
}

export default Redux;
