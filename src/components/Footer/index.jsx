import React from "react";
import Button from "@mui/material/Button";

import styles from "./Footer.module.scss";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectIsAuth, logout } from "../../redux/slices/auth";

export const Footer = () => {
  return <div className={styles.root}></div>;
};
