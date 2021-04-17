import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header'
import List from './components/List'
function App() {
  const [content, setContent] = useState([])

  useEffect(() => {
    fetch("https://607b592a67e65300175730af.mockapi.io/api/v1/members")
      .then(res => res.json())
      .then(
        (result) => {
          setContent(result)
        })
  }, []
  )

  console.log(content, "getMembersApi")
  return (
    <div className="App">
      <Header />
      <List listResponse={content} />




    </div>
  );
}

export default App;
