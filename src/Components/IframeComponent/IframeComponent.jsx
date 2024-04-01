import React, { useState, useRef, useEffect } from 'react';
import './IframeComponent.css'


const IframeComponent = ({ width = 600, height = 450, src }) => {
  const [expanded, setExpanded] = useState(false);
  const chatbotRef = useRef(null);

  const toggleChatbot = () => {
    setExpanded(prevExpanded => !prevExpanded);
  };

  // Cerrar el chatbot si hace clic fuera del iframe
  useEffect(() => {
    const handleClickOutside = event => {
      if (chatbotRef.current && !chatbotRef.current.contains(event.target)) {
        setExpanded(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div
      className={`chatbot-container ${expanded ? 'expanded' : ''}`}
      style={{ maxWidth: `${width}px` }}
      ref={chatbotRef}
    >
      <button onClick={toggleChatbot}>{expanded ? 'Minimizar' : 'Expandir'} Chatbot</button>
      <iframe
        title="chatbot"
        width={width}
        height={expanded ? height : 0}
        loading="lazy"
        allowFullScreen
        src="https://webchat.botframework.com/embed/chattucafe-bot?s=iaSDfK37Ehw.Xscv5XMi25UnXpc-_0FjH3p8TdUqbP_EfQNFwRoK6dA" 
        style={{ transition: 'height 0.5s' }}
      ></iframe>
    </div>
  );
};

export default IframeComponent;






// import React from 'react';

// const IframeComponent = () => {
//   return (
//     <div>
//       <h2>Ejemplo de Iframe</h2>
//       <iframe
//         title="chatbot"
//         width="600"
//         height="450"
//         loading="lazy"
//         allowfullscreen
//         src="https://webchat.botframework.com/embed/chattucafe-bot?s=iaSDfK37Ehw.Xscv5XMi25UnXpc-_0FjH3p8TdUqbP_EfQNFwRoK6dA"
//       ></iframe>
//     </div>
//   );
// };

// export default IframeComponent;

