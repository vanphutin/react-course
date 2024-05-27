const PropsChild = (props) => {
  return (
    <div>
      <hr />
      <b style={{ fontSize: "20px" }}>
        <div>Truyền qua props</div>
      </b>
      <p>My name is {props.name}</p>
      <p>Value {props.count}</p>
      <button onClick={() => props.handleAlter()}>alter</button>
    </div>
  );
};
export default PropsChild;
