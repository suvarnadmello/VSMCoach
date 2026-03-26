import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Drawer, List, ListItem, ListItemText } from '@mui/material';

const App = () => {  
  return (  
    <Router>  
      <AppBar position="static">  
        <Toolbar>  
          <Typography variant="h6">VSM Coach</Typography>  
        </Toolbar>  
      </AppBar>  
      <Drawer variant="permanent">  
        <List>  
          <ListItem button component="a" href="/dashboard">  
            <ListItemText primary="Dashboard" />  
          </ListItem>  
          <ListItem button component="a" href="/value-stream-map">  
            <ListItemText primary="Value Stream Map" />  
          </ListItem>  
          <ListItem button component="a" href="/workshop-mode">  
            <ListItemText primary="Workshop Mode" />  
          </ListItem>  
          <ListItem button component="a" href="/analytics">  
            <ListItemText primary="Analytics" />  
          </ListItem>  
        </List>  
      </Drawer>  
      <Switch>  
        <Route path="/dashboard">  
          <div>Dashboard Content</div>  
        </Route>  
        <Route path="/value-stream-map">  
          <div>Value Stream Map Content</div>  
        </Route>  
        <Route path="/workshop-mode">  
          <div>Workshop Mode Content</div>  
        </Route>  
        <Route path="/analytics">  
          <div>Analytics Content</div>  
        </Route>  
      </Switch>  
    </Router>  
  );
};

export default App;