// import './assets/css/dark.css'
import Tutorial from './components/Tutorial.js'
import GlobalStyle from './components/styles/Global.style.js'
import ClickCounter from './components/ClickCounter.js';
import MouseHoverCounter from './components/MouseHoverCounter.js';
import UserList from './components/UserList.js';
import TodoList from './components/TodoList.js';
import './assets/css/main.css'

const App = () => {
  return (
    <>
    <GlobalStyle />
    <h1>Learn with sumit Heigh Order Component</h1>
    <ClickCounter />
    <MouseHoverCounter />
    <div>
    <h1>Higher Order Component</h1>
      <div  className='hoc'>
        <div>
          <UserList />
        </div>
        <div>
          <TodoList />
        </div>
      </div>
    
      #######
    </div>
  
    <Tutorial />
    </>
  );
}

export default App;
