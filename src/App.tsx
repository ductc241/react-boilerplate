import { useEffect } from 'react';
import Login from '@modules/Authentication';

function App() {
  useEffect(() => {
    const getData = () => {
      fetch('/api/get-profile')
        .then(res => res.json())
        .then(data => console.log(data));
    };

    getData();
  }, []);

  return <Login />;
}

export default App;
