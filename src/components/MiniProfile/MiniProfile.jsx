import { Avatar, ListItemText, Skeleton } from "@mui/material";
import React from "react";
import reactMarkdown from "react-markdown";
import { useSelector } from "react-redux";
import styles from "./MiniProfile.module.scss";
export const MiniProfile = ({ item }) => {
  const { posts } = useSelector((state) => state.posts);
  const { data } = useSelector((state) => state.auth);
  const [userData, setUserData] = React.useState([]);
  console.log(userData);
  const getId = () => {
    if (data !== null) {
      const end = posts.items.filter((item) => {
        return item.user._id === data.user._id;
      });
      setUserData(end);
    }
  };

  React.useEffect(() => {
    getId();
  }, [setUserData, userData, data]);

  return (
    <div className={styles.root}>
      {item === null ? (
        <Skeleton variant="circular" width={100} height={100} />
      ) : (
        <div className={styles.avatar}>
          <Avatar
            alt={item.user.fullName}
            src={item.user.avatarUrl}
            sx={{ width: 100, height: 100 }}
          />
        </div>
      )}
      {item === null ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Skeleton variant="text" height={50} width={190} />
          <Skeleton variant="text" height={50} width={190} />
        </div>
      ) : (
        <h2 className={styles.name}>{item.user.fullName}</h2>
      )}
      {data === null ? (
        <div style={{ marginTop: 40 }}>
          <Skeleton variant="text" height={25} width={190} />
          <Skeleton variant="text" height={18} width={190} />
        </div>
      ) : (
        <div>
          <h3 className={styles.info}>Создано постов: {userData.length}</h3>
          <h3 className={styles.info}>Стандартный профиль</h3>
        </div>
      )}
    </div>
  );
};
