import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Grid from "@mui/material/Grid";
import { Post } from "../components/Post";
import { TagsBlock } from "../components/TagsBlock";
import { CommentsBlock } from "../components/CommentsBlock";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, fetchTags } from "../redux/slices/posts";
import { fetchAuthAll } from "../redux/slices/auth";
import { UsersList } from "../components/UsersList/UsersList";
import { Cloud, Favorite, Help, Search } from "@material-ui/icons";
import Quiz from "../components/Quiz/Quiz";
import { MiniProfile } from "../components/MiniProfile/MiniProfile";

export const Home = () => {
  const dispatch = useDispatch();

  const { posts, tags } = useSelector((state) => state.posts);
  const { users } = useSelector((state) => state.auth.users);
  const { data } = useSelector((state) => state.auth);

  const [tabValue, setTabValue] = React.useState(0);
  const [postBool, setPostBool] = React.useState(false);
  const [tagsBool, setTagsBool] = React.useState(false);

  const isPostsLoading = posts.status === "loading";
  const isTagsLoading = tags.status === "loading";
  const isPostsError = posts.status === "error";
  const isTagsError = tags.status === "error";

  React.useEffect(() => {
    if (isPostsLoading || isTagsLoading || isPostsError || isTagsError) {
      setPostBool(true);
      setTagsBool(true);
    } else {
      setPostBool(false);
      setTagsBool(false);
    }
  }, [
    isPostsLoading,
    isTagsLoading,
    setPostBool,
    postBool,
    setTagsBool,
    tagsBool,
    isPostsError,
    isTagsError,
  ]);

  React.useEffect(() => {
    dispatch(fetchPosts());
    dispatch(fetchTags());
    dispatch(fetchAuthAll());
  }, []);
  return (
    <>
      <Tabs
        style={{
          marginBottom: 15,
          boxShadow: " 0  0 15px 0  rgba(0, 0, 0, 0.473)",
          borderRadius: 6,
        }}
        value={tabValue}
        aria-label="primary icon label position tabs example"
        textColor="primary"
      >
        <Tab onClick={() => setTabValue(0)} label="Новые" />
        <Tab onClick={() => setTabValue(1)} label="Популярные" />
        <Tab onClick={() => setTabValue(2)} label="Наш выбор" />
        <Tab onClick={() => setTabValue(3)} label="Все тэги" />
        <Tab onClick={() => setTabValue(4)} label="Все пользователи" />
        <Tab onClick={() => setTabValue(5)} label="Поддержка" />
        <Tab onClick={() => setTabValue(6)} label="О нас" />
        <Tab
          onClick={() => setTabValue(7)}
          icon={<Help />}
          aria-label="favorite"
        />
        <Tab
          onClick={() => setTabValue(8)}
          icon={<Favorite />}
          aria-label="favorite"
        />
        <Tab
          onClick={() => setTabValue(9)}
          icon={<Cloud />}
          aria-label="favorite"
        />
        <Tab
          onClick={() => setTabValue(10)}
          icon={<Search />}
          iconPosition="start"
          label="Поиск"
        />
      </Tabs>
      <Grid container spacing={2}>
        <Grid xs={3} item>
          <TagsBlock items={tags.items} isLoading={tagsBool} />
          <CommentsBlock
            items={[
              {
                user: {
                  fullName: "Евпатий Кароко",
                  avatarUrl: "https://mui.com/static/images/avatar/1.jpg",
                },
                text: "Это тестовый комментарий",
              },
              {
                user: {
                  fullName: "Лёша Артенов",
                  avatarUrl: "https://mui.com/static/images/avatar/2.jpg",
                },
                text: "When displaying three lines or more, the avatar is not aligned at the top. You should set the prop to align the avatar at the top",
              },
              {
                user: {
                  fullName: "Артём Кукров",
                  avatarUrl: "https://mui.com/static/images/avatar/1.jpg",
                },
                text: "Это тестовый комментарий",
              },
              {
                user: {
                  fullName: "Лёша Артенов",
                  avatarUrl: "https://mui.com/static/images/avatar/2.jpg",
                },
                text: "When displaying three lines or more, the avatar is not aligned at the top. You should set the prop to align the avatar at the top",
              },
              {
                user: {
                  fullName: "Артём Кукров",
                  avatarUrl: "https://mui.com/static/images/avatar/1.jpg",
                },
                text: "Это тестовый комментарий",
              },
              {
                user: {
                  fullName: "Лёша Артенов",
                  avatarUrl: "https://mui.com/static/images/avatar/2.jpg",
                },
                text: "When displaying three lines or more, the avatar is not aligned at the top. You should set the prop to align the avatar at the top",
              },
              {
                user: {
                  fullName: "Сергей Старов",
                  avatarUrl: "https://mui.com/static/images/avatar/1.jpg",
                },
                text: "Это тестовый комментарий",
              },
              {
                user: {
                  fullName: "Лёша Артенов",
                  avatarUrl: "https://mui.com/static/images/avatar/2.jpg",
                },
                text: "When displaying three lines or more, the avatar is not aligned at the top. You should set the prop to align the avatar at the top",
              },
              {
                user: {
                  fullName: "Артём Кукров",
                  avatarUrl: "https://mui.com/static/images/avatar/1.jpg",
                },
                text: "Это тестовый комментарий",
              },
              {
                user: {
                  fullName: "Лёша Артенов",
                  avatarUrl: "https://mui.com/static/images/avatar/2.jpg",
                },
                text: "When displaying three lines or more, the avatar is not aligned at the top. You should set the prop to align the avatar at the top",
              },
            ]}
            isLoading={false}
          />
        </Grid>
        <Grid xs={6} item>
          {(postBool ? [...Array(5)] : posts.items).map((obj, index) =>
            postBool ? (
              <Post key={index} isLoading={postBool} />
            ) : (
              <Post
                id={obj._id}
                title={obj.title}
                imageUrl={
                  obj.imageUrl ? `http://localhost:4444${obj.imageUrl}` : ""
                }
                user={obj.user}
                createdAt={obj.createdAt}
                viewsCount={obj.viewsCount}
                commentsCount={3}
                tags={obj.tags}
                isLoading={postBool}
              />
            )
          )}
        </Grid>
        <Grid xs={3} item>
          <MiniProfile item={data} />
          <UsersList items={users} />
          <Quiz />
        </Grid>
      </Grid>
    </>
  );
};
