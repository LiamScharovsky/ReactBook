import React from 'react'
import { useAuth } from '../Context/authProvider'

export const Sent = () => {
  const { currentUser } = useAuth()
  return (
      <div className="row">
          <div className="col-md-12">

              <h1>Hello, {currentUser.username}</h1>
              <form onSubmit={handleSubmit}>
                  <div className="row">
                      <div className="col-md-7">
                          <div className="form-group">
                              <input
                                  ref={messageBody}
                                  type="text"
                                  className="form-control"
                                  name="messageBody"
                                  placeholder="Write your message" />
                          </div>
                      </div>
                      <div className="col-md-3">
                          <div className="form-group">
                              <input
                                  ref={messageRec}
                                  type="text"
                                  className="form-control"
                                  name="recepient"
                                  placeholder="Who are we messaging?" />
                          </div>
                      </div>
                      <div className="col-md-2">
                          <input type="submit" value="Send" className='btn btn-primary' />
                      </div>
                  </div>
              </form>
              <hr />

              <ul className="list-group">
                  {
                      messageList.length !== 0 ?
                          orderedMessages.map(message => (
                              <li key={message.id} className="list-group-item">
                                  <p> From: {`${message.sender.username}`}</p>
                                  <div>
                                      <p>{message.body}
                                          <small>
                                              <span className='float-right'> {moment(message.date_created).fromNow()} </span>
                                          </small>
                                      </p>
                                  </div>
                              </li>
                          )) :
                          <p> No Messages at the Moment</p>
                  }
              </ul>

          </div>
      </div>
  )
}
