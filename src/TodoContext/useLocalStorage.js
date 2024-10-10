import React from 'react';

function useLocalStorage(itemName, initialValue) { //custom hook
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
  
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem);
        }
  
      setLoading(false);
  
      } catch (error) {
        // setError(error);
        setError(true);
        setLoading(false);
      }
    }, 2000);
  }, []);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  return {
    item, 
    saveItem, 
    loading, 
    error
  };
}

export { useLocalStorage }

// localStorage.removeItem('TODOS_V1');

// const defaultTodos = [
//   { text: 'tarea uno', completed: true },
//   { text: 'tarea dos', completed: false },
//   { text: 'tarea tres', completed: false },
//   { text: 'tarea CUATRO', completed: false },
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));