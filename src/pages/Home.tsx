import { IonContent, IonHeader, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonList, IonPage, IonText, IonTitle, IonToolbar, IonLabel, IonAvatar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';


const arr = [
  {
    name: 'Finn',
    desc: 'This guy rocks!'
  },
  {
    name: 'Ha',
    desc: 'Trust me, I am a programmer'
  },
  {
    name: 'Rey',
    desc: 'I am done with it!'
  }
]



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
          {arr.map(elem => (
            <IonItemSliding key={elem.name}>
              <IonItem>
                <IonAvatar>
                  <img
                    src={`https://ionic framework.com/docs/demos/api/list/avatar-${elem.name.toLowerCase()}.png`}
                  />
                </IonAvatar>
                <IonLabel className="ion-padding">
                  <h2>{elem.name}</h2>
                  <h3>{elem.desc}</h3>
                  <p>Some helper text!</p>
                </IonLabel>
              </IonItem>
              <IonItemOptions side="start">
                <IonItemOption onClick={() => alert("pressed Delete")}>Delete</IonItemOption>
              </IonItemOptions>
            </IonItemSliding>))}
        </IonList>
      </IonContent>
    </IonPage >
  );
};

export default Home;
