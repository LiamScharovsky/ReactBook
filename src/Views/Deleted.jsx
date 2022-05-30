import React from 'react'

export const Deleted = () => {
  return (
    <div className='row'>
      <h1>Deleted Messages</h1>
      <div className="col-md-12">
        <ul className="list-group">
          {/* {
                      messageList.length !== 0 ?
                          messageList.map(message => (
                              <li key={message.id} className="list-group-item">
                                  <p>{`${message.username}`}</p>
                                  <div>
                                      <p>{message.body}
                                          <small>
                                              <span className='float-right'> {moment(new Date(message.dateCreated)).fromNow()} </span>
                                          </small>
                                      </p>
                                  </div>
                              </li>
                          )) :
                          <p> No Messages at the Moment</p>
                  } */}

        </ul>
      </div>
    </div>

  )
}
