
import axios from "axios";

const github=axios.create({
    baseURL:process.env.REACT_APP_GITHUB_URL,
    // headers:{}
})

export const searchUsers = async (text) => {
    
    const params = new URLSearchParams({
      q: text,
    });

    const response = await github.get(`/search/users?${params}`)
    return response.data.items
  };


 export const searchSingleUser = async (login) => {
   
    const response = await fetch(
      `${process.env.REACT_APP_GITHUB_URL}/users/${login}`,
      {}
    );
    if (response.status === 404) {
      window.location = "/notfound";
    } else {
      const data = await response.json();
      return data
    }
  };

  export const getRepos = async (login) => {
    
    const params = new URLSearchParams({
      sort: 'created',
      per_page:10
    });
    const response = await fetch(
      `${process.env.REACT_APP_GITHUB_URL}/users/${login}/repos?${params}`,
      {}
    );
    
    if (response.status === 404) {
      window.location = "/notfound";
    } else {
      const data = await response.json();
      return data
    }
  };

  export const getUserAndRepos= async(login)=>{
    const params = new URLSearchParams({
        sort: 'created',
        per_page:10
      });

    const [user,repos]=await Promise.all([
        github.get(`${process.env.REACT_APP_GITHUB_URL}/users/${login}`),
        github.get(`${process.env.REACT_APP_GITHUB_URL}/users/${login}/repos?${params}`)

    ])

    return {user:user.data,repos:repos.data}
  }