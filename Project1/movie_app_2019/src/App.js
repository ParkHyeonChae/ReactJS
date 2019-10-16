import React from 'react';
import axios from "axios";

class App extends React.Component{ 
  state = { 
    isLoading: true,
    movies : []
  };
  getMovies = async () => {
      const {
        data: {
            data : { movies }
        }
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating")
    this.setState({ movies, isLoading: false });
  };
//   componentDidMount(){
//       setTimeout(() => {
//         this.setState({ isLoading: false });
//     }, 6000);
//   }
componentDidMount(){
    this.getMovies();
}
  render (){
    const { isLoading } = this.state;
    return <div>{this.state.isLoading ? "Loading..." : "We are ready"}</div>
  }
}

export default App;
