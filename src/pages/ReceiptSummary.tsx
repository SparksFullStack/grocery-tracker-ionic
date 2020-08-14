import React from 'react'
import { IonCard, IonLabel, IonCardTitle, IonCardSubtitle, IonCardHeader, IonCardContent, IonButton, IonRippleEffect } from '@ionic/react'
import { Receipt, formatName } from '../common/constants'

type Props = {
    receipt: Receipt
}

const ReceiptSummary = ({receipt}: Props) => {
    const { _id, name, submittedBy, amount, month } = receipt
    return (
        <IonCard>
            <IonCardHeader style={{paddingBottom: 7}}>
                <IonCardSubtitle>{formatName(submittedBy)}</IonCardSubtitle>
                <IonCardTitle>{name}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
                <IonLabel>{month} | ${amount}</IonLabel>
                <br />
                <IonButton href={`/view/${_id}`} expand="block" style={{marginTop: 16}}>
                    View Receipt
                </IonButton>
            </IonCardContent>
        </IonCard>
    )
}

export default ReceiptSummary
