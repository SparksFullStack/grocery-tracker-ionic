import React from 'react';
import axios from 'axios'
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle } from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import AllReceipts from './pages/AllReceipts';
import AddReceipt from './pages/AddReceipt';

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
import { Receipt } from './common/constants';

const App: React.FC = () => {
  const [receipts, setReceipts] = React.useState<Receipt[]>([])

  const fetchResources = async (url: string) => {
    try { 
      const response = await axios.get(url)
      setReceipts(response.data)
    } catch (error) { 
      alert(`there was an error`)
      console.log(error)
    }
  }


  React.useEffect(() => {
    fetchResources(`${process.env.REACT_APP_BASE_SERVER_URL}/receipts`)
  }, [])
  
  return (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/totals" component={Tab1} exact={true} />
          <Route path="/all" component={() => <AllReceipts receipts={receipts}/>} exact={true} />
          <Route path="/add" component={AddReceipt} />
          <Route path="/" render={() => <Redirect to="/totals" />} exact={true} />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/totals">
            <IonIcon icon={triangle} />
            <IonLabel>View Totals</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" onClick={() => fetchResources(`${process.env.REACT_APP_BASE_SERVER_URL}/receipts`)} href="/all">
            <IonIcon icon={ellipse} />
            <IonLabel>All Receipts</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/add">
            <IonIcon icon={square} />
            <IonLabel>Add Receipt</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
)
        };

export default App;
