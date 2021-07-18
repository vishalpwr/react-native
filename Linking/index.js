import React, { useCallback, useEffect, useState } from "react";
import { Alert, Button, Linking, Platform, StyleSheet, Text, View } from "react-native";



const LinkingPage = () => {

    const url1 = "https://github.com/vishal-pawar";
    const url2 = "abcd://abcd.com";
    const number = '+910987654321'
    const message = "hello there!!"

    const openUrl = async (url) => {
        const isSupported = await Linking.canOpenURL(url);
        if (isSupported) {
            await Linking.openURL(url);
        } else {
            Alert.alert(`Don't know how to open this url: ${url}`);
        }
    }
    
    const sendTextMessage = useCallback(async (phNumber, message) => {
        const separator = Platform.OS === 'ios' ? '&' : '?'
        const url = `sms:${phNumber}${separator}body=${message}`
        await Linking.openURL(url)
    }, [])

    const openPhotos = () => {
        if (Platform.OS == 'ios') {
            Linking.openURL("photos-redirect://");
        } else if (Platform.OS == 'android') {
            Linking.openURL("content://media/internal/images/media");
        } else {
            console.log("Could not open Photos")
        }
    }

    const openInsta = () => {
        Linking.openURL('instagram://user?username=instagram')
            .catch(() => {
                Linking.openURL('https://www.instagram.com/instagram');
            })
    }
    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <Button title="Open Url" onPress={() => {
                    openUrl(url1)
                }} color="steelblue" />

            </View>
            <View style={styles.buttonContainer}>
                <Button title="call" onPress={() => {
                    Linking.openURL(`tel:${number}`)
                }} color="red" />
            </View>
            <View style={styles.buttonContainer}>
                <Button title="SMS" onPress={() => sendTextMessage(number, message)} color="gold" />
            </View>
            <View style={styles.buttonContainer}>
                <Button title="mail" onPress={() => {
                    Linking.openURL(`mailto:support@me.com?subject=testing&body=${message}`)
                }} color="#ff6767" />
            </View>
            <View style={styles.buttonContainer}>
                <Button title="Open setting" onPress={() => {
                    Linking.openSettings()
                }} color="#112233" />
            </View>
            <View style={styles.buttonContainer}>
                <Button title="Open Whatsapp" onPress={() => {
                    Linking.openURL(`whatsapp://send?phone=${number}&text=${message}`)
                }} color="green" />
            </View>
            <View style={styles.buttonContainer}>
                <Button title="Map" onPress={() => {
                    Linking.openURL(`https://www.google.com/maps/search/?api=1&query=india`)
                }} color="" />
            </View>
            <View style={styles.buttonContainer}>
                <Button title="open Youtube" onPress={() => {
                    Linking.openURL(`https://www.youtube.com`)
                }} color="darkred" />
            </View>
            <View style={styles.buttonContainer}>
                <Button title="open facebook" onPress={() => {
                    Linking.openURL(`fb://profile/`)
                }} color="blue" />
            </View>
            <View style={styles.buttonContainer}>
                <Button title="open Gallery" onPress={openPhotos} color="powderblue" />
            </View>
            <View style={styles.buttonContainer}>
                <Button title="Open Instagram" onPress={openInsta} color="steelblue" />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "center", alignItems: "center" },
    buttonContainer: {
        margin: 10
    }
});

export default LinkingPage


































// const useMount = func => useEffect(() => func(), []);

// const useInitialURL = () => {
//     const [url, setUrl] = useState(null);
//     const [processing, setProcessing] = useState(true);

//     useMount(() => {
//         const getUrlAsync = async () => {
//             // Get the deep link used to open the app
//             const initialUrl = await Linking.getInitialURL();

//             // The setTimeout is just for testing purpose
//             setTimeout(() => {
//                 setUrl(initialUrl);
//                 setProcessing(false);
//             }, 1000);
//         };

//         getUrlAsync();
//     });

//     return { url, processing };
// };


{/* <Text>
                {processing
                    ? `Processing the initial url from a deep link`
                    : `The deep link is: ${initialUrl || "None"}`}
            </Text> */}
