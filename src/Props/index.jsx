import { useState } from "react";

// const Container = (props) => {
//   console.log("container", props);
//   return <div>{props.children}</div>;
// };

// const Element = (props) => {
//   console.log("element", props);
//   return (
//     <div>
//       {props.text}
//       {props.children}
//     </div>
//   );
// };

const Container = (props) => {
  return <div>{props.children}</div>;
};

const TitleBox = (props) => {
  return <div>{props.children}</div>;
};

const ContentBox = (props) => {
  return <div>{props.children}</div>;
};

const Props = () => {
  const [state, setState] = useState({
    name: "코카콜라",
    count: 10,
  });

  const handleClick = () => {
    setState((prev) => ({ ...prev, count: prev.count + 1 }));
  };
  return (
    <div>
      <Container>
        <TitleBox>
          <h1>{state.name}</h1>
        </TitleBox>
        <ContentBox>
          <div>
            <p>
              count: <span>{state.count}</span>
            </p>
          </div>
          <div>
            <button onClick={handleClick}>클릭</button>
          </div>
        </ContentBox>
      </Container>
    </div>
  );
};

export default Props;
