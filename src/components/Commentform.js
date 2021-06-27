import React from 'react'
import { connect } from 'react-redux';
import { sendComments } from '../redux/commentSlice'

class CommentForm extends React.Component {
    state = {
        formInput: {
        username: "",
        body: "",
        post_id: "",
        comments: []
        }
    };
    constructor(props){
        super(props);
        this.handleChange.bind(this);
        this.handleSubmit.bind(this);
    }

    
        
    handleChange = (e) => {
        
        const target = e.target;
        this.setState({
           formInput: {
               ...this.state.formInput,
               [target.name]: target.value,
               post_id:  target.id
           }
        })
    }

    handleSubmit = (e, formInput) => {
        e.preventDefault();
        console.log(this.state)
        alert("A comment was submitted: " + this.state.formInput.body);
        this.props.addComments(formInput)
        this.setState({
            formInput: {
                username: "",
                body: "",
                post_id: ""
            }
        })
    }

        render(){
            return(
                <div>
                   <b><p>Add Comment:</p></b>
                   <form  onSubmit={(e) => this.handleSubmit(e, this.state.formInput)}>
                        <label >Username:</label><br />
                        <input id={this.props.id} type="text" name="username" value={this.state.username} onChange={this.handleChange} /><br />
                        <label>Comment:</label><br />
                        <textarea id={this.props.id} name="body" value={this.state.body} onChange={this.handleChange} /><br />
                        <button type="submit">Submit</button>
                    </form>
                </div>
            )
        }
    
}

const mapDispatchToProps = (dispatch) => {
    return {
        addComment: (comment) => {
            dispatch(sendComments(comment))
        }
    }
}

export default connect(null, mapDispatchToProps)(CommentForm);
