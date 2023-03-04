import React, {useState, useEffect} from 'react'

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [search, setSearch] = useState('');
    const [searchResults, setSearchResults] = useState([]);


    useEffect(()=>{
        const fetchUser = async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/todos');
            const json = await res.json();
            setTodos(json.slice(0,10));
            setSearchResults(json.slice(0,10));
            // console.log(json);
        }

        fetchUser();
    },[]);
    let renderTodos = (
        <div style={
            {
                background:'red'
            }
        }>
            No Data found
        </div>
    );
    if(searchResults.length > 0){
        renderTodos = searchResults.map( (todoData, key) =>
            <div key={key}>
                <strong>
                    {todoData.title}
                </strong>
            </div>
        );
    }

    const searchHandler = (e) =>{
        setSearch(e.target.value);
        // console.log(search);
        let filterTodos = todos.filter( (todo) => {
            return todo.title.search(e.target.value) >= 0 ;
        } );
        if(filterTodos.length > 0){

            setSearchResults(filterTodos);
        }else{
            setSearchResults(todos);
        }
        // console.log(filterTodos);
    }


    return (
     <>
         <div>--:Todo List:---</div>
         <input type='text' onChange={searchHandler} value={search} />
        {renderTodos}
     </>
    );
}

export default TodoList;