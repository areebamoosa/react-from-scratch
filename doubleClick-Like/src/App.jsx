// Mini Project # 19 : Double Click to Like
// * Display an image.
// * When the user double-clicks the image, show a heart ❤️ (like Instagram).
import { useState } from 'react';
import apple from './Img/apple.jpg';

import './App.css';

function App() {
  const [liked, setLiked] = useState(false);

  const handleDoubleClick = () => {
    setLiked(!liked);
  };

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <img
        src={apple}
        alt="apple"
        onDoubleClick={handleDoubleClick}
        style={{ width: '300px', height: '300px' }} />

      {liked && (<span style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        fontSize: '3rem',
        pointerEvents: 'none',
      }}
      > ❤️ </span>
      )}
    </div>
  );
}

export default App;