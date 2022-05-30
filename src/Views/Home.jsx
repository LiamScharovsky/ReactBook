import React, { useEffect, useState, useRef } from 'react'
import moment from 'moment';
import { db } from '../firebase/firebaseConfig';
import { collection, doc, getDocs, orderBy, query } from 'firebase/firestore';
import { AuthContext, useAuth } from '../Context/AuthProvider';
 

export const Home = () => {
    const messageBody = useRef('');
    const messageRec = useRef('');
    const [messageList, setMesageList] = useState([]);
    const [orderedMessages, setOrderedMessages] = useState([])
    const { currentUser } = useAuth( )


    const retreiveMessage = async () => {
        
        const querySnapshot = await getDocs(collection( db, 'messages' ))
        
        let filteredMessageList = []
        querySnapshot.forEach( doc => {
            filteredMessageList.push({...doc.data(), id:doc.id})
            setMesageList (filteredMessageList)

            let sortedMessages = filteredMessageList.sort( ( a,b ) => b.dateCreated-a.dateCreated)
            setOrderedMessages (sortedMessages)

        })

        let q = query (collection(db, 'messages'), orderBy('dateCreated') )
        
        setMesageList(filteredMessageList);
    }
    const handleSubmit = (e) => {
        e.preventDefault()

        let dataToSend = {
            body: messageBody.current.value,
            username: messageRec.current.value
        }
        fetch('http://localhost:5000/api/v1/posts',{
            method: 'POST',
            cors: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( dataToSend )
        } )
        .then( res => res.json() )  
        .then( data => {
            let newMessage = [...messageList, data]
            setMessageList( newMessage )
            setOrderedMessages ([data, ...messageList])
        } )

        console.log( messageBody.current.value )
        console.log( messageRec.current.value )
        messageBody.current.value  = ''
        messageRec.current.value  = ''
    }
    useEffect(() => {
        retreiveMessage()
    }, [])

    
  return (
      <div className="row">
          <div className="col-md-12">

              <h1>Hello, {currentUser.username}</h1>
              <form onSubmit={ handleSubmit  }>
                  <div className="row">
                      <div className="col-md-7">
                          <div className="form-group">
                              <input 
                                  ref= { messageBody }
                                  type="text"
                                  className="form-control"
                                  name="messageBody"
                                  placeholder="Write your message" />
                          </div>
                      </div>
                      <div className="col-md-3">
                          <div className="form-group">
                              <input 
                                  ref = { messageRec }
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
