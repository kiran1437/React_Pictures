import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar'
import ImageList from './imageList';

class App extends React.Component {
    state = {images: []};

    onSearchSubmit = (term) =>{
        unsplash.get('/search/photos',{
            params: {query: term}
           
        }).then( response =>{
            
            this.setState({images: response.data.results});
        

        });

    }

    render(){
        return(
            <div className = 'ui container' style={{margin:"10px"}}>
                <SearchBar  onSearchCallback={this.onSearchSubmit}/>
                <ImageList images= {this.state.images} />
            </div>
        );
    }
   
};

export default App;