const Notification = (props) => {
  //  Write your code here.
  const { className, imageUrl, imageDesign, text } = props;
  return (
    <div className={className}>
      <img className={imageDesign} src={imageUrl} />
      <p>{text}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div>
    <h1 className="heading">Notifications</h1>
    <Notification
      className="notification-message-container primary-container"
      imageUrl="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
      imageDesign="image-style"
      text="Information Message"
    />
    <Notification
      className="notification-message-container success-container"
      imageUrl="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
      imageDesign="image-style"
      text="Success Message"
    />
    <Notification
      className="notification-message-container warning-container"
      imageUrl="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
      imageDesign="image-style"
      text="Warning Message"
    />
    <Notification
      className="notification-message-container danger-container"
      imageUrl="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
      imageDesign="image-style"
      text="Danger Message"
    />
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
