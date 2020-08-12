import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItemDivider, IonItem, IonInput, IonSelect, IonSelectOption, IonButton } from '@ionic/react';
import './AddReceipt.css';
import { People, Month, Receipt } from '../common/constants';
import axios from 'axios';

const AddReceipt: React.FC = () => {
  const [submittedBy, setSubmittedBy] = React.useState<People>()
  const [name, setName] = React.useState<string>('')
  const [amount, setAmount] = React.useState<string>('')
  const [month, setMonth] = React.useState<Month>()
  const [year, setYear] = React.useState<number>(2020)
  const [additionalInfo, setAdditionalInfo] = React.useState<string>('')

  const submitReceipt = async () => {
    const newReceipt: Receipt = {
      name,
      amount,
      submittedBy: submittedBy!,
      month: month!,
      year: year!
    }

    try {
      const response = await axios.post(`${process.env.REACT_APP_BASE_SERVER_URL}/receipts`, newReceipt)
      console.log('post response', response)
    } catch (error) {
      alert("There was an error saving the receipt--go bug Charlie!")
    }
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Add a Receipt</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
          <IonList>
          <IonItemDivider>Who paid for this receipt?</IonItemDivider>
            <IonItem>
              <IonSelect value={submittedBy} placeholder="Select One" onIonChange={e => setSubmittedBy(e.detail.value)}>
                <IonSelectOption value={People.BETTY}>Betty</IonSelectOption>
                <IonSelectOption value={People.CHARLIE}>Charlie</IonSelectOption>
                <IonSelectOption value={People.SUZANNE_AND_LOWELL}>Suzanne and Lowell</IonSelectOption>
              </IonSelect>
            </IonItem>
            <IonItemDivider>Where is the receipt from?</IonItemDivider>
            <IonItem>
              <IonInput value={name} placeholder="Enter Name of Store" onIonChange={e => setName(e.detail.value!)}></IonInput>
            </IonItem>
            <IonItemDivider>What was the total?</IonItemDivider>
            <IonItem>
              <IonInput value={amount} placeholder="Enter Total Cost" onIonChange={e => setAmount(e.detail.value!)}></IonInput>
            </IonItem>
            <IonItemDivider>What month was it from?</IonItemDivider>
            <IonItem>
              <IonSelect value={month} placeholder="Select One" onIonChange={e => setMonth(e.detail.value)}>
                <IonSelectOption value={Month.JAN}>January</IonSelectOption>
                <IonSelectOption value={Month.FEB}>February</IonSelectOption>
                <IonSelectOption value={Month.MAR}>March</IonSelectOption>
                <IonSelectOption value={Month.APR}>April</IonSelectOption>
                <IonSelectOption value={Month.MAY}>May</IonSelectOption>
                <IonSelectOption value={Month.JUN}>June</IonSelectOption>
                <IonSelectOption value={Month.JUL}>July</IonSelectOption>
                <IonSelectOption value={Month.AUG}>August</IonSelectOption>
                <IonSelectOption value={Month.SEP}>September</IonSelectOption>
                <IonSelectOption value={Month.OCT}>October</IonSelectOption>
                <IonSelectOption value={Month.NOV}>November</IonSelectOption>
                <IonSelectOption value={Month.DEC}>December</IonSelectOption>
              </IonSelect>
            </IonItem>
            <IonItemDivider>What year was it from?</IonItemDivider>
            <IonItem>
              <IonSelect value={year} placeholder="Select One" onIonChange={e => setYear(e.detail.value)}>
                <IonSelectOption value={'2020'}>2020</IonSelectOption>
              </IonSelect>
            </IonItem>
            <IonItemDivider>Any additional info?</IonItemDivider>
            <IonItem>
              <IonInput value={additionalInfo} placeholder="Enter Input" onIonChange={e => setAdditionalInfo(e.detail.value!)}></IonInput>
            </IonItem>
          </IonList>
          <IonButton onClick={submitReceipt}>
            Submit!
          </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default AddReceipt;
