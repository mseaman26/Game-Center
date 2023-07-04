import React, {useEffect, useState, useRef} from "react";

const Nerdle = () => {

  const nerdleIframe = useRef(null)

  useEffect(() => {
      // Receive the message from the iframe
      const handleMessage = (event) => {
          console.log(event)
        if (event.data.height) {
          // Adjust the height of the iframe
    
          if (nerdleIframe.current) {
              console.log('iframe')
            nerdleIframe.current.style.height = `${event.data.height}px`;
          }
        }
        if(event.data.nerdleNumber){
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
    }, []);

  return(
      <iframe ref={nerdleIframe} src="https://mseaman26.github.io/Mike-s-Nerdle/" title="External Page" />
  )
}
export default Nerdle