import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { images, square, triangle } from 'ionicons/icons';
import Tab1 from './pages/LoginPage';
import Tab2 from './pages/MainPage';
import Tab3 from './pages/Tab3';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import ListeAssurance from './components/ListeAssurance';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      {/* <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/tab1">
            <Tab1 />
          </Route>
          <Route exact path="/tab2">
            <Tab2 />
          </Route>
          <Route path="/tab3">
            <Tab3 />
          </Route>
          <Route exact path="/">
            <Redirect to="/tab1" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/tab1">
            <IonIcon icon={triangle} />
            <IonLabel>Login</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/tab2">
            <IonIcon icon={images} />
            <IonLabel>Gallerie</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/tab3">
            <IonIcon icon={square} />
            <IonLabel>Random Jokes</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs> */}

      <Route exact path="/" render={() => <Redirect to="/acceuil" />} />

      <Route path="/login" component={Tab1} exact={true} />
      {/* Liste des voitures */}
      <Route path="/acceuil" component={Tab2} exact={true} />
      {/* Voir les assurances de X voiture */}
      {/* <Route path="/dashboard/:id" component={Tab3} exact={true} /> */}
      <Route path="/dashboard/" component={Tab3} exact={true} />
      {/* Liste des assurance plus combien de mois */}
      <Route path="/ListeAssurance/:nombreMois" component={ListeAssurance} exact={true} />

      {/* Side Menu  */}
    </IonReactRouter>
  </IonApp>
);


export default App;
