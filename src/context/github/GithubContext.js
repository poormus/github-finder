import { type } from "@testing-library/user-event/dist/type";
import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  //   const [users, setUsers] = useState([]);
  //   const [loading, setLoading] = useState(true);

  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  // const fetchUsers = async () => {
  //   setLoading();
  //   const response = await fetch(
  //     `${process.env.REACT_APP_GITHUB_URL}/users`,
  //     {}
  //   );
  //   const data = await response.json();

  //   dispatch({
  //     type: "GET_USERS",
  //     payload: data,
  //   });
  //   // setUsers(data);
  //   // setLoading(false);
  // };

  // const searchUsers = async (text) => {
  //   setLoading();

  //   const params = new URLSearchParams({
  //     q: text,
  //   });
  //   const response = await fetch(
  //     `${process.env.REACT_APP_GITHUB_URL}/search/users?${params}`,
  //     {}
  //   );
  //   const { items } = await response.json();
  //   console.log(items);
  //   dispatch({
  //     type: "SEARCH_USERS",
  //     payload: items,
  //   });
  // };

  // const searchSingleUser = async (login) => {
  //   setLoading();
  //   const response = await fetch(
  //     `${process.env.REACT_APP_GITHUB_URL}/users/${login}`,
  //     {}
  //   );
  //   if (response.status === 404) {
  //     window.location = "/notfound";
  //   } else {
  //     const data = await response.json();
  //     dispatch({
  //       type: "GET_USER_AND_REPOS",
  //       payload: data,
  //     });
  //   }
  // };

  // const getRepos = async (login) => {
  //   setLoading();

  //   const params = new URLSearchParams({
  //     sort: 'created',
  //     per_page:10
  //   });
  //   const response = await fetch(
  //     `${process.env.REACT_APP_GITHUB_URL}/users/${login}/repos?${params}`,
  //     {}
  //   );
    
  //   if (response.status === 404) {
  //     window.location = "/notfound";
  //   } else {
  //     const data = await response.json();
  //     dispatch({
  //       type: "GET_REPOS",
  //       payload: data,
  //     });
  //   }
  // };

  // const clearUsers = () => {
  //   dispatch({ type: "CLEAR_USERS" });
  // };

  // const setLoading = () => {
  //   dispatch({ type: "SET_LOADING" });
  // };

  return (
    <GithubContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
