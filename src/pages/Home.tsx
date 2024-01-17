import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Hello world</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'>
        hello world
      </IonContent>
    </IonPage>
  );
};

export default Home;
