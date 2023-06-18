import './MessageContainer.css';

const MessageContainer = ({ message }) => {
  return (
    <section className='message-container' >
      <div className='message-container__text'>
        {message}
      </div>
    </section>
  );
}

export default MessageContainer;
