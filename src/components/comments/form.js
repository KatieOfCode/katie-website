// import React from 'react'

// class CommentForm extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       name: '',
//       comment: '',
//     }
//     this.handleSubmit = this.handleSubmit.bind(this)
//     this.handleChange = this.handleChange.bind(this)
//   }
//   async handleSubmit(e) {
//     e.preventDefault()
//     const body = JSON.stringify({ ...this.state })
//     const response = await fetch('http://localhost:8080/comment', {
//       method: 'post',
//       body,
//       headers: {
//         'content-type': 'application/json',
//       },
//     })
//     const data = await response.json()
//     this.setState({ comment: '', name: '' })
//   }
//   handleChange({ target }) {
//     const { name, value } = target
//     this.setState({ [name]: value })
//   }
//   render() {
//     const { name, comment } = this.state
//     return (
//       <form onSubmit={this.handleSubmit} className="comment-form">
//         <input
//           placeholder="Your Name"
//           value={name}
//           name="name"
//           onChange={this.handleChange}
//         />
//         <textarea
//           placeholder="Enter your comment"
//           rows="4"
//           name="comment"
//           value={comment}
//           onChange={this.handleChange}
//         />
//         <div>
//           <button className="button submit-button">Submit</button>
//         </div>
//       </form>
//     )
//   }
// }
// export default CommentForm
