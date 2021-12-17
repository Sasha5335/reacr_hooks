const defaultState = {
   customers: [],
};

export const customerReducer = (state = defaultState, action) => {
   switch (action.type) {
      case 'ADD_MANY_CUSTOMER':
         console.log(action.payload)
         return {...state, customers: [...state.customers, ...action.payload]}
      case 'ADD_CUSTOMER':
         return {...state, customers: [...state.customers, action.payload]}
      case 'REMOVE_CUSTOMER':
         return {...state, customers: state.customers.filter(customer => customer.id !== action.payload)};
      default:
         return state;
   }
};

