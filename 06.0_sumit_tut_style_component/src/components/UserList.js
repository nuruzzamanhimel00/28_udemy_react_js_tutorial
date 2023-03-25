import React, {useState, useEffect} from 'react'

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState('');
    const [searchResults, setSearchResults] = useState([]);


    useEffect(()=>{
        const fetchUser = async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/users');
            const json = await res.json();
            setUsers(json);
            setSearchResults(json);
            console.log(json);
        }

        fetchUser();
    },[]);
    let renderUser = (
        <div style={
            {
                background:'red'
            }
        }>
            No Data found
        </div>
    );
    if(searchResults.length > 0){
        renderUser = searchResults.map( (userData, key) =>
            <div key={key}>
                <strong>
                    {userData.name}
                </strong>
            </div>
        );
    }

    const searchHandler = (e) =>{
        setSearch(e.target.value);
        console.log(search);
        let filterUsers = users.filter( (user) => {
            return user.name.search(e.target.value) >= 0 ;
        } );
        if(filterUsers.length > 0){

            setSearchResults(filterUsers);
        }else{
            setSearchResults(users);
        }
        // console.log(filterUsers);
    }


    return (
     <>
         <div>--:User List:---</div>
         <input type='text' onChange={searchHandler} value={search} />
        {renderUser}
     </>
    );
}

export default UserList;