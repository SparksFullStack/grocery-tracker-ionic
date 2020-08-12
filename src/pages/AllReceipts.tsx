import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel } from '@ionic/react';
import './AllReceipts.css';
import { Receipt } from '../common/constants';

type Props = {
  receipts: Receipt[]
}

const AllReceipts: React.FC<Props> = ({ receipts }: Props) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>All Receipts</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      <IonList>
        { receipts.map((receipt: Receipt) => (
          <IonItem key={`${receipt.name}_${receipt.amount}`}>
            <IonLabel>{receipt.name} - {receipt.amount} - {receipt.submittedBy}</IonLabel>
          </IonItem>
        )) }
      </IonList>
      </IonContent>
    </IonPage>
  );
};

export default AllReceipts;
