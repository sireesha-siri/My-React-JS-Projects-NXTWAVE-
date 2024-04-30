const Button = (props) => {
  //  Write your code here.
  const { className, buttonText } = props;
  return <button className={className}>{buttonText}</button>;
};

const element = (
  //  Write your code here.
  <div>
    <h1 className="heading">Social Buttons</h1>
    <Button className="button-style like-button" buttonText="Like" />
    <Button className="button-style comment-button" buttonText="Comment" />
    <Button className="button-style share-button" buttonText="Share" />
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
