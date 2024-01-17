import { IonContent, IonHeader, IonItem, IonList, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader >
        <IonToolbar>
          <IonTitle>Hello world</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'>
        <IonList>
          <IonItem>
            <IonText>
              {Array(10)
                .fill(0)
                .map((_, i) => (
                  <IonItem key={i}>
                    <IonText>List Item {i}</IonText>
                  </IonItem>
                ))}
            </IonText>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
