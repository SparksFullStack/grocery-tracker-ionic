import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonGrid, IonRow, IonCol, IonCard, IonIcon, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent } from '@ionic/react';
import './AllReceipts.css';
import { Receipt, formatName } from '../common/constants';
import ReceiptSummary from './ReceiptSummary';

type Props = {
  receipts: Receipt[],
}

const styles = {
  headerRow: {
    textAlign: 'center',
    fontWeight: 'bold',
    borderBottom: '1px solid white',
    borderLeft: '1px solid white',
    borderRight: '1px solid white',
  },
  col: {
    borderRight: '1px solid white'
  },
  row: {
    borderBottom: '1px solid white',
    borderLeft: '1px solid white',
    borderRight: '1px solid white',
  },
  cardSpans: {
    margin: '0 20px'
  }
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
        {
          receipts.map((receipt: Receipt) => <ReceiptSummary key={receipt._id} receipt={receipt} />)
        }
      </IonContent>
    </IonPage>
  );
};

export default AllReceipts;
