import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import styles from './styles/index.css';

// const routing = (
//   <Router>
//     <div>
//       <Header />
//       <Switch>
//         <Redirect from="/home" to="/" />
//         <Route exact path="/" component={Home} />
//         <Route path="/favorites" component={Favorites} />
//         <Route component={NotFound} />
//       </Switch>
//     </div>
//   </Router>
// );

const MOUNT_ELEMENT = document.getElementById('root');
ReactDOM.render(<App/>, MOUNT_ELEMENT);
