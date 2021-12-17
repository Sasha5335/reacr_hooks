import { useState, useEffect, useRef } from 'react';

function UseRef() {
  const ref = useRef();
  const [isHovering, setHovering] = useState(false);

  const on = () => setHovering(true);
  const off = () => setHovering(false);

  useEffect(() => {
    if (!ref.current) {
      return;
    }
    const node = ref.current;
    node.addEventListener('mousemove', on);
    node.addEventListener('mouseleave', off);
    return function () {
      node.removeEventListener('mousemove', on);
      node.removeEventListener('mouseleave', off);
    };
  }, []);

  return (
    <div className="mt-5">
      <h1>UseRef</h1>

      <div
        ref={ref}
        style={{
          width: '200px',
          height: '200px',
          background: !isHovering ? 'red' : 'green',
          cursor: 'pointer',
        }}
      ></div>
    </div>
  );
}

export default UseRef;
