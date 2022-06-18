import React from "react";
import { useRef } from "react";

const CokeCreateRef = () => {
  return <div>CokeCreateRef</div>;
};

const CokeUseRef = () => {
  return <div>CokeUseRef</div>;
};

const Ref = () => {
  const myRef = React.createRef();
  const myUseRef = useRef(null);
  const myTag = React.createRef();
  const myTagRef = useRef(null);

  return (
    <div>
      Ref
      <CokeCreateRef ref={myRef} /> {/* 불가능 */}
      <CokeUseRef ref={myUseRef} /> {/* 불가능 */}
      <div ref={myTag}>HTML tag</div> {/* 가능 */}
      <div ref={myTagRef}>HTML tag</div> {/* 가능 */}
    </div>
  );
};

export default Ref;
