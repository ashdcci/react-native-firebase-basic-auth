import React , {Component} from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common'; 
import LoginForm from './components/LoginForm';


class App extends Component {

    state = { loggedIn: null }

    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyDcZjdKMq0IjWAyyZMOF6g0BaIArwAhu_0",
            authDomain: "api-project-296442218225.firebaseapp.com",
            databaseURL: "https://api-project-296442218225.firebaseio.com",
            projectId: "api-project-296442218225",
            storageBucket: "api-project-296442218225.appspot.com",
            messagingSenderId: "296442218225"
          });

          firebase.auth().onAuthStateChanged( (user) => {
                if(user){
                    this.setState({ loggedIn: true });
                }else{
                    this.setState({ loggedIn: false });
                }
          });
    }

    renderContent() {

        switch(this.state.loggedIn){
            case true:
                return (
                        <View style={styles.fullViewStyle}>
                            <Button onPress={this.onLogOut.bind(this)}>
                                Log out
                            </Button>  
                        </View>
                );
            case false:
                return <LoginForm />;
            default:
                return(
                    <View style={styles.fullSpinnerViewStyle}>
                        <Spinner size="large" />
                    </View>
                ); 
        }

    }

    onLogOut(){
        firebase.auth().signOut();
    }

    

    render() {
        return (
            <View >
                <Header headerText="Authentication" />
                {this.renderContent()}
            </View>
        );
    }
}

const styles = {
    fullViewStyle: {
        flexDirection: 'row',
        paddingTop: 10
      },
      fullSpinnerViewStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: "60%"
    }
}


export default App;