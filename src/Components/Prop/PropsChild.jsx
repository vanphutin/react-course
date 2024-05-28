const PropsChild = (props) => {
  console.log(props);
  return (
    <div>
      <b style={{ fontSize: "20px" }}>
        <div>Truyền qua props</div>
      </b>
      <p>My name is {props.name}</p>
      <p>Age {props.count}</p>
      <button onClick={() => props.handleAlter()}>View</button>

      <span>{props.children}</span>
    </div>
  );
};
export default PropsChild;
