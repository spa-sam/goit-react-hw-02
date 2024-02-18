import css from './Notification.module.css';

export const Notification = ({ children }) => {
  return <p className={css.notification}>{children}</p>;
};

export default Notification;
