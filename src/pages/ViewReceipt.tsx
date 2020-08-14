import React from 'react'
import { useParams, Redirect } from 'react-router'
import { Receipt, formatName } from '../common/constants'
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonLabel, IonButton, IonToast } from '@ionic/react'
import Axios from 'axios'

type Props = {
    receipts: Receipt[]
}

const ViewReceipt = ({ receipts }: Props) => {
    const { receiptId } = useParams()
    const [deleteError, setDeleteError] = React.useState<boolean>(false)
    const [deleteSuccess, setDeleteSuccess] = React.useState<boolean>(false)
    const [shouldRedirect, setShouldRedirect] = React.useState<boolean>(false)
    const currentReceipt: Receipt | undefined = receipts.find((receipt: Receipt) => receipt._id === receiptId)

    const deleteReceipt = async () => {
        try {
            await Axios.delete(`${process.env.REACT_APP_BASE_SERVER_URL}/receipts/${receiptId}`)
            setDeleteError(false)
            setDeleteSuccess(true)
            setTimeout(() => setShouldRedirect(true), 2500)
        } catch (error) {
            setDeleteSuccess(false)
            setDeleteError(true)
        }
    }

    if (shouldRedirect) return <Redirect to='/all' />

    return (
        <IonPage>
            <IonToast
                isOpen={deleteError}
                color="warning"
                onDidDismiss={() => setDeleteError(false)}
                message="There was an error deleting the receipt--go bug Charlie!"
                duration={2500}
            />
            <IonToast
                isOpen={deleteSuccess}
                color="success"
                onDidDismiss={() => setDeleteSuccess(false)}
                message="Receipt was deleted!"
                duration={2500}
            />
            <IonHeader>
                <IonToolbar>
                    <IonTitle>
                        View Receipt
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
            <IonCard>
                <IonCardHeader style={{paddingBottom: 7}}>
                    <IonCardSubtitle>{currentReceipt && formatName(currentReceipt?.submittedBy!)}</IonCardSubtitle>
                    <IonCardTitle>{currentReceipt?.name}</IonCardTitle>
                </IonCardHeader>

                <IonCardContent style={{paddingBottom: 12}}>
                    <IonLabel>{currentReceipt?.month} | ${currentReceipt?.amount}</IonLabel>
                    <span style={{display: 'block', marginTop: 7}}>
                        { currentReceipt?.additionalInfo }
                    </span>
                </IonCardContent>
                <IonButton onClick={deleteReceipt} color="danger" expand="full">
                    Delete
                </IonButton>
            </IonCard>
            </IonContent>
        </IonPage>
    )
}

export default ViewReceipt
