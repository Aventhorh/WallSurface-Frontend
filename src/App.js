import { Route, Routes } from "react-router-dom";
import Container from "@mui/material/Container";
import { useDispatch } from "react-redux";
import { Header } from "./components";
import { Home, FullPost, Registration, AddPost, Login } from "./pages";
import React from "react";
import { fetchAuthMe } from "./redux/slices/auth";
import styles from "./App.module.scss";
import { Footer } from "./components/Footer";

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchAuthMe());
  }, [dispatch]);

  return (
    <section className={styles.root}>
      <Header />
      <Container maxWidth="lg">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts/:id" element={<FullPost />} />
          <Route path="/posts/:id/edit" element={<AddPost />} />
          <Route path="/add-post" element={<AddPost />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
        </Routes>
      </Container>
      <Footer />
    </section>
  );
}

export default App;
