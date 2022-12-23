import "./ExploreContainer.css";

import useFetch from "../components/useFetch";

import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonCardContent,
    IonButton,
    IonGrid,
    IonRow,
    IonCol,
    IonAlert,
    IonIcon,
    IonItem,
    IonLabel,
    IonInput,
} from "@ionic/react";
import { personCircle } from "ionicons/icons";
import { useState } from "react";
import { useHistory } from "react-router";

import handleLogin from '../hooks/login';

const Login: React.FC = () => {
    const history = useHistory();
    const [email, setEmail] = useState<string>("admin");
    const [password, setPassword] = useState<string>("admin");
    const [iserror, setIserror] = useState<boolean>(false);
    const [message, setMessage] = useState<string>("");
    const [token, setToken] = useState<string>("");
    const log = () => handleLogin([email, setEmail], [password, setPassword], [iserror, setIserror], [message, setMessage], [token, setToken], history,);



    return (
        <IonPage>
            {/* <IonHeader>
                <IonToolbar>
                    <IonTitle>Login</IonTitle>
                </IonToolbar>
            </IonHeader> */}

            <IonContent fullscreen className="ion-padding ion-text-center">
                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <IonAlert
                                isOpen={iserror}
                                onDidDismiss={() => setIserror(false)}
                                cssClass="my-custom-class"
                                header={"Error!"}
                                message={message}
                                buttons={["Dismiss"]}
                            />
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonIcon
                                style={{ fontSize: "70px", color: "#0040ff" }}
                                icon={personCircle}
                            />
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonLabel position="floating">Email</IonLabel>
                                <IonInput
                                    type="email"
                                    value={email}
                                    onIonChange={(e) => setEmail(e.detail.value!)}
                                >
                                </IonInput>
                            </IonItem>
                        </IonCol>
                    </IonRow>

                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonLabel position="floating"> Password</IonLabel>
                                <IonInput
                                    type="password"
                                    value={password}
                                    onIonChange={(e) => setPassword(e.detail.value!)}
                                >
                                </IonInput>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <p style={{ fontSize: "small" }}>
                                By clicking LOGIN you agree to our <a href="#">Policy</a>
                            </p>
                            <IonButton expand="block" onClick={log}>Login</IonButton>
                            <p style={{ fontSize: "medium" }}>
                                Don't have an account? <a href="#">Sign up!</a>
                            </p>

                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};



export default Login;