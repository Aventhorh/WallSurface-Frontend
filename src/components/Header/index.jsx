import React from "react";
import Button from "@mui/material/Button";

import styles from "./Header.module.scss";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectIsAuth, logout } from "../../redux/slices/auth";

export const Header = () => {
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();

  const onClickLogout = () => {
    if (window.confirm("Вы действительно хотите выйти?")) {
      dispatch(logout());
      window.localStorage.setItem("token", "");
    }
  };

  return (
    <div className={styles.root}>
      <Container maxWidth="lg">
        <div className={styles.inner}>
          <Link className={styles.logo} to="/">
            <div>WallSurface</div>
          </Link>

          <div className={styles.buttons}>
            {isAuth ? (
              <>
                <Link className={styles.button} to="/add-post">
                  <div>Добавить стену</div>
                </Link>
                <div className={styles.button} onClick={onClickLogout}>
                  Выйти
                </div>
              </>
            ) : (
              <div style={{ display: "flex" }}>
                <Link className={styles.button} to="/login">
                  <div>Войти</div>
                </Link>
                <Link className={styles.button} to="/register">
                  <div>Создать аккаунт</div>
                </Link>
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};
