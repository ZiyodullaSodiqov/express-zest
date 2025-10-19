import { IonApp, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route, } from 'react-router-dom';
import React from 'react';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';
import Tab4 from './pages/Tab4';
import Home from './pages/Home';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Tab5 from './pages/Tab5';
import Tab6 from './pages/Tab6';
import Tab7 from './pages/Tab7';
import Tab8 from './pages/Tab8';
import Tab9 from './pages/Tab9';

setupIonicReact();

const App: React.FC = () => {

  return (
    <IonApp>
      <IonReactRouter>
       <IonTabs>
         <IonRouterOutlet>
          <Redirect exact path="/" to="/home" />

          <Route path="/home" render={() => <Home />} exact={true} />
          <Route path="/tab1" render={() => <Tab1 />} exact={true} />
          <Route path="/tab2" render={() => <Tab2 />} exact={true} />
          <Route path="/tab3" render={() => <Tab3 />} exact={true} />
          <Route path="/tab4" render={() => <Tab4 />} exact={true} />
          <Route path="/tab5" render={() => <Tab5 />} exact={true} />
          <Route path="/tab6" render={() => <Tab6 />} exact={true} />
          <Route path="/tab7" render={() => <Tab7 />} exact={true} />
          <Route path="/tab8" render={() => <Tab8 />} exact={true} />
          <Route path="/tab9" render={() => <Tab9 />} exact={true} />
        </IonRouterOutlet>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
