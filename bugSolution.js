```javascript
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<UsersContainer />}>
          <Route path=":userId/*" element={<UserDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function Home() { return <h1>Home</h1>; }
function About() { return <h1>About</h1>; }
function UsersContainer() { return <h1>Users</h1>; }
function UserDetail() { return <h1>User Detail</h1>; }

export default App;
```