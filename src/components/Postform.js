import React from 'react'
import { connect } from 'react-redux';
import { sendPosts } from '../redux/postSlice';
import Button from '@material-ui/core/Button';

 class Postform extends React.Component {
     state = { 
         formInput: {
         username: "",
         image: "",
         likes: 0 }
        }
     constructor(){
         super();
        this.handleChange.bind(this);
        this.handleSubmit.bind(this);
     }

     


     handleChange = (e) => {
         const target = e.target
         console.log(this)
         this.setState({
             formInput: {
                 ...this.state.formInput,
                 [target.name]: target.value
             }
         })
        }

     handleSubmit = (e) => {
        e.preventDefault();
        this.props.addPost(this.state.formInput)
        alert("Your post was submitted!")
        this.props.history.push("/posts")
    }
    
   render() {
     return (
         <div>
             <h1>Post Form</h1>
             <form onSubmit={e => this.handleSubmit(e)}>
                 <label>Username:</label><br />
                 <input type="text" name="username" value={this.state.formInput.username} onChange={this.handleChange} /><br />
                 <label>Image Source URL:</label><br />
                 <input type="text" name="image" value={this.state.formInput.image} onChange={this.handleChange}/><br />
                 <Button variant="contained" type="submit" color="primary">Submit</Button>
             </form>
         </div>
     )
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        addPost: (post) => {
            dispatch(sendPosts(post))
        }
    }
}
export default connect(null, mapDispatchToProps)(Postform)
