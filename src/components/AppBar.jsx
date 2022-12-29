import { AppBar as MUIAppBar, Toolbar, Typography } from "@mui/material";

const AppBar = props => (
  <MUIAppBar
    position="static"
    color="default"
    elevation={0}
    sx={{ borderBottom: theme => `1px solid ${theme.palette.divider}` }}>
    <Toolbar sx={{ flexWrap: "wrap" }}>
      <Typography variant="h5" color="inherit" noWrap sx={{ flexGrow: 1 }}>
        ERST
      </Typography>
      {props.children}
    </Toolbar>
  </MUIAppBar>
);

export default AppBar;
