
// importe plusieurs composants de react-native qui seront utilisés dans l'application.
import { StyleSheet , Dimensions } from 'react-native';

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        flex: 1,
        justifyContent: 'center',
        width: '100%',
    },
    containerView: {
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: "#D6DBDF",
        padding: 20,
        borderRadius: 10,
        width: 310,
        opacity: 0.9,
    },
    input: {
        borderWidth: 1,
        borderColor: "green",
        borderRadius: 5,
        padding: 10,
        margin: 5,
    },
    button: {
        backgroundColor: "blue",
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: "white",
        fontWeight: "bold",
        paddingHorizontal: 8,
    },
    goalContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10,
    },
    goalText: {
        flex: 1,
        backgroundColor: "#FFFFDF",
        padding: 10,
        borderRadius: 5,
        marginRight: 10,
    },
    deleteButton: {
        backgroundColor: "#C700DF",
        padding: 5,
        borderRadius: 5,
    },
});

export default styles;