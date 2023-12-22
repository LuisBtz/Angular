import React from 'react';
import styled from 'styled-components';
import addToMailchimp from "gatsby-plugin-mailchimp"

// markup
class Newsletter extends React.Component {

    constructor() {
      super()
      this.state = {
        message: "Newsletter",
        name: "",
        email: "",
        result: null,
      }
    }
  
    handleSubmit = e => {
      e.preventDefault()
      addToMailchimp(this.state.email, {
        FNAME: this.state.name,
      }) // listFields are optional if you are only capturing the email address.
        .then(data => {
  
          this.setState({ message: data.msg })
          // I recommend setting data to React state
          // but you can do whatever you want (including ignoring this `then()` altogether)
          console.log(data)
        })
        .catch(() => {
          // unnecessary because Mailchimp only ever
          // returns a 200 status code
          // see below for how to handle errors
        })
      this.setState({ email: "", name: "" })
    }
  
    handleEmailChange = event => {
      this.setState({ email: event.target.value })
    }
  
    handleNameChange = event => {
      this.setState({ name: event.target.value })
    }
  
    render() {
            return(
        <NewsletterWrapper>
            <p><span>> </span> 
            <div
                    dangerouslySetInnerHTML={{__html: this.state.message}}
                />
            </p>
            <form onSubmit={this.handleSubmit}>
                <input 
                    placeholder='Email' 
                    name='email' 
                    type="email"
                    value={this.state.email}
                    onChange={this.handleEmailChange}
                    name="EMAIL"
                    id="mce-EMAIL"
                    className="subscribe-email"
                    required
                />
                <button className="btn_sent" type="submit"><span>></span> Subscribe</button>
            </form>
        </NewsletterWrapper>

)
}
}


const NewsletterWrapper = styled.div`
p {
    margin-bottom: 20px;
    display: flex;
    span {
        margin-right: 20px;
    }
}
form {
    margin-bottom: 20px;
    position: relative;
    border-bottom: solid 1px white;
    input {
        padding: 5px 0;
        background: none;
        border: none;
        outline: none;
        width: 100%;
        color: var(--white);
    }
    button {
        position: absolute;
        right: 0;
        top: 5px;
        background-color: var(--pink);
        span {
            margin-right: 20px;
        }
    }
}

`

export default Newsletter