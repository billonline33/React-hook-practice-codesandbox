import { useEffect, useState } from "react";

const saveToLocalStorage = (key: string, val: any) => {
  localStorage.setItem(key, val);
};

const retrieveLocalStorage = (key: any, initialValue: any) => {
  const savedValue = localStorage.getItem(key);
  if (!!savedValue) {
    return savedValue;
  } else {
    return initialValue;
  }
};

const useLocalStorage = (key: string, initialValue: string | null) => {
  const [name, setName] = useState(retrieveLocalStorage(key, initialValue));

  useEffect(() => {
    saveToLocalStorage(key, name);
  }, [name]);

  return [name, setName];
};

export default useLocalStorage;
