// Global for entire Application
import React, {Component} from 'react'
import {FormGroup, FormControl, InputGroup, Glyphicon} from 'react-bootstrap'
import Gallery from './gallery.js'

// styling through react bootstrap

class Global extends Component{
   // an event handler on states for incomming data
   constructor(props){
      super(props)
      this.state = {
         query: '',
         items: []
      }
   }

   search(){
      const BaseURL = 'https://www.googleapis.com/books/v1/volumes?q='
      fetch(`${BaseURL}${this.state.query}`, {method: 'GET'})
         .then(response => response.json())
         .then(json => {
            //console.log(json))
            let{items} = json
            this.setState({items})
         })
      console.log('Search', this.state.query)
   }

   render(){
      return(
         <div className="Global">
            <h2>BOOKS EXPLORER</h2>
            <FormGroup>
               <InputGroup>
                  <FormControl
                     type="text"
                     placeholder="Search for Books"
                     onChange={event => this.setState({query: event.target.value})}
                     onKeyPress={event => {
                        if(event.key == 'Enter'){
                           this.search()
                        }
                     }}
                  />
                  <InputGroup.Addon onClick={() => this.search()}>
                     <Glyphicon glyph="search"></Glyphicon>
                  </InputGroup.Addon>
               </InputGroup>
            </FormGroup>
            <Gallery items={this.state.items}/>
         </div>
      )
   }
}

// extending react methods to the application
export default Global
