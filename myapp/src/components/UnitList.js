import React from "react";
import { withStyles } from "material-ui/styles";
import List, { ListItem, ListItemIcon, ListItemText } from "material-ui/List";

const styles = {
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
};
class UnitList extends React.Component {
  render() {
    const { unitList } = this.props;
    return <div />;
  }
}

export default withStyles(styles)(UnitList);
