import React, {useEffect, useState, useRef} from "react";
import {nerdleResultApi} from '../utils/api/userApi'
import Auth from '../utils/auth'
import { useAuthContext } from '../utils/authContext';

const Nerdle = () => {

  const { currentUser } = useAuthContext()
  console.log('nerdle current uster', currentUser)
  const nerdleIframe = useRef(null)

  useEffect(() => {
      // Receive the message from the iframe
      const handleMessage = (event) => {
        if (event.data.height) {
          // Adjust the height of the iframe
    
          if (nerdleIframe.current) {
            nerdleIframe.current.style.height = `${event.data.height}px`;
          }
        }
        if(event.data.nerdleNumber){
          console.log('current user', currentUser)
          nerdleResultApi({
            username: currentUser,
            nerdleNumber: event.data.nerdleNumber,
            result: event.data.result
          })
          console.log('nerdle number from iframe: ', event.data.nerdleNumber)
        }
        if(event.data.result){
          console.log('retult from iframe: ', event.data.result)
        }
      };
  
      window.addEventListener('message', handleMessage);
  
      return () => {
        window.removeEventListener('message', handleMessage);
      };
    }, [currentUser]);

  return(
      <iframe ref={nerdleIframe} src="https://mseaman26.github.io/Mike-s-Nerdle/" title="External Page" />
  )
}
export default Nerdle