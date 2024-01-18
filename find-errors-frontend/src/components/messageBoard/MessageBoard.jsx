import { useEffect, useState } from "react";
import style from "./MessageBoard.module.scss";
import { InputField } from "../input/InputField";

export const MessageBoard = ({ user }) => {
  const [messages, setMessages] = useState(null);
  const [error, setError] = useState(null);

  const submitMessage = (e) => {
    e.preventDefault()
    let url = "http://localhost:8081/message/create";
    let body = new URLSearchParams();
    body.append("message", e.target.message.value);
    let options = {
      method: "POST",
      body: body,
      headers: { Authorization: `Bearers ${user.accessToken}` },
    };

    fetch(url, options)
      .then((res) => res.json())
      .then(() => getMessages())
      .catch((err) => console.error(err));
  };

  const getMessages = () => {
    console.log(user.accessToken);
    const newOptions = {
      headers: { Authorization: `Bearer ${user.accessToken}` }
    }
    fetch("http://localhost:8081/messages", newOptions)
      .then((res) => res.json())
      .then((data) => (data.length > 0 ? setMessages(data) : setError(data)));
  };

  useEffect(() => {
    getMessages();
  }, []);

  return (
    <div className={style.messageBoardStyle}>
      <form onSubmit={(e) => submitMessage(e)}>
        <InputField
          type="textfield"
          placeholder="enter a new message"
          name="message"
        />
        <InputField type="submit" name="Submit" />
      </form>
      <section>
        <h4>Your messages:</h4>
        {error && <b>{error.message}</b>}
        {messages?.map((msg, i) => {
          return <p key={i}>{msg.message}</p>;
        })}
      </section>
    </div>
  );
};
