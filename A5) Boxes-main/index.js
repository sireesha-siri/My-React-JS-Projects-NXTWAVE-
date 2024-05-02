const Box = (props) => {
  //  Write your code here.
  const { className, text } = props;
  return <p className={className}>{text}</p>;
};

const element = (
  //  Write your code here.
  <div>
    <h1 className="heading">Boxes</h1>
    <div className="boxes-container">
      <Box className="box box1" text="Small" />
      <Box className="box box2" text="Medium" />
      <Box className="box box3" text="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
