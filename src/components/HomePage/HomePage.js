import React, {useState, useEffect, useContext, useReducer} from "react";


import Header from "../view/header";
import Footer from "../view/footer";
import SearchBar from "../Search/Search";
import {UserService} from "../../services/UserService";


import Store from "../../Store/store";
import {SET_USERS} from "../../Store/actionTypes";
import reducer from "../../Store/reducers";
import Container from "../Container/Container";
import Forma from "../Forma/Forma";

const HomePage =() => {
    const inicialState = useContext(Store)
    const [state, dispatch] = useReducer(reducer,inicialState);

    console.log(state.users)

    const [view,setView]= useState(localStorage.getItem('view' || 'view_list'))
    // const [users,setUsers]= useState([])
    const [inputValue,setInputValue]= useState('')

    console.log(state)

    useEffect(() => {
        const userService = new UserService();
        userService.search().then(userList => dispatch({
            type: SET_USERS,
            payload: userList
        }))
    }, []);

   const  updateClick = () => {
    const userService = new UserService();
    userService.search()
    .then(userList => dispatch({
        type: SET_USERS,
        payload: userList
    }))
};

   const handleClick = () => {
       setView(view === 'view_grid' ? "view_list" : "view_grid")
       localStorage.setItem('view', view === 'view_grid' ? "view_list" : "view_grid")
    };

   const  handleChange = (event) => setInputValue(event.target.value);



        const filteredUsers = state.users.filter(user => user.name.toLowerCase().includes(inputValue.toLowerCase()));
        return (
            <Store.Provider value={{ state, dispatch}} >
            <div className="App">

                <Header title="Esome People" updateClick={updateClick} handleClick={handleClick} view={view} />
                <Forma/>
                <SearchBar handleChange={handleChange} inputValue={inputValue} />
                <Container view={view} filteredUsers={filteredUsers}/>

                <Footer/>

           </div>
            </Store.Provider>
        );

}



// class HomePage extends Component {
//
//     constructor(props) {
//         super(props);
//
//         const view = localStorage.getItem('view') || 'view_list';
//
//         this.state = {
//             users: [],
//             view,
//             inputValue: '',
//           }
//     }
//
//      componentDidMount() {
//         const userService = new UserService();
//         userService.search().then(userList => this.setState(oldState => ({ ...oldState, users: userList })));
//     }
//
//     updateClick = () => {
//         const userService = new UserService();
//         userService.search()
//         .then(userList => this.setState(oldState => ({ ...oldState, users: userList})));
//     };
//
//     handleClick = () => {
//         this.setState( oldState => ({...oldState, view: oldState.view === 'view_grid' ? "view_list" : "view_grid"}),
//             () => localStorage.setItem('view', this.state.view));
//     };
//
//     handleChange = (event) => {
//         const newInputValue = event.target.value;
//         this.setState({inputValue: newInputValue});
//     }
//
//     render() {
//         const filteredUsers = this.state.users.filter(user => user.name.toLowerCase().includes(this.state.inputValue.toLowerCase()));
//         return (
//             <div className="App">
//
//                 <Header title="Esome People" updateClick={this.updateClick} handleClick={this.handleClick} view={this.state.view} />
//                 <SearchBar handleChange={this.handleChange} inputValue={this.state.inputValue} />
//                   <div className={style.container}>
//                      {this.state.view === 'view_list' ? <List users={filteredUsers} /> : <Grid users={filteredUsers} />}
//
//                 </div>
//
//                 <Footer/>
//
//            </div>
//         );
//     }
// }
//
//
export default HomePage;
