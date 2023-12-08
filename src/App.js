import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ToDoList from './ToDoList';
import CounterApp from './CounterApp'; 
import CalculatorApp from './CalculatorApp';

function App() {
  return (
    <Router>
      <div>
        {/* ナビゲーションリンク */}
        <nav>
          <ul>
            <li>
              <Link to="/">ToDoリスト</Link>
            </li>
            <li>
              <Link to="/counter">カウンターアプリ</Link>
            </li>
            <li>
              <Link to="/calculator">電卓アプリ</Link>
            </li>
          </ul>
        </nav>

        {/* ルートの設定 */}
        <Routes>
          <Route path="/counter" element={<CounterApp />} />
          <Route path="/" element={<ToDoList />} />
          <Route path="/calculator" element={<CalculatorApp/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
