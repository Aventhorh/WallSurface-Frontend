import React from "react";

import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import Skeleton from "@mui/material/Skeleton";
import { SideBlock } from "../SideBlock";

export const UsersList = ({ items }) => {
  return (
    <SideBlock style={{ marginTop: 150 }} title="Самые активные">
      <List style={{ backgroundColor: "#292b32", borderRadius: 6 }}>
        {(items === undefined ? [...Array(5)] : items).map((obj, index) => (
          <React.Fragment key={index}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                {items === undefined ? (
                  <Skeleton variant="circular" width={40} height={40} />
                ) : (
                  <Avatar alt={obj.fullName} src={obj.avatarUrl} />
                )}
              </ListItemAvatar>
              {items === undefined ? (
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <Skeleton variant="text" height={25} width={120} />
                  <Skeleton variant="text" height={18} width={190} />
                </div>
              ) : (
                <ListItemText
                  primaryTypographyProps={{
                    textDecoration: "none",
                    color: "white",
                  }}
                  secondaryTypographyProps={{
                    textDecoration: "none",
                    color: "#83839c",
                  }}
                  primary={obj.fullName}
                  secondary={obj.createdAt}
                />
              )}
            </ListItem>
            <Divider variant="inset" component="li" />
          </React.Fragment>
        ))}
      </List>
    </SideBlock>
  );
};
