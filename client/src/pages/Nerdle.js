import React, {useEffect} from "react";

const Nerdle = () => {

    useEffect(() => {
        // Receive the message from the iframe
        const handleMessage = (event) => {
          if (event.data.height) {
            // Adjust the height of the iframe
            const iframe = document.getElementById('nerdleIframe');
            if (iframe) {
              iframe.style.height = `${event.data.height}px`;
            }
          }
        };
    
        window.addEventListener('message', handleMessage);
    
        return () => {
          window.removeEventListener('message', handleMessage);
        };
      }, []);

    return(
        <iframe id='nerdleIframe' src="https://mseaman26.github.io/Mike-s-Nerdle/" title="External Page" />
    )
}
export default Nerdle