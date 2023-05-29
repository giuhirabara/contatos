const initialState = {
    contacts: [],
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_CONTACT':
        return {
          ...state,
          contacts: [...state.contacts, action.payload],
        };
      case 'REMOVE_CONTACT':
        return {
          ...state,
          contacts: state.contacts.filter(
            (contact) => contact.id !== action.payload
          ),
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  