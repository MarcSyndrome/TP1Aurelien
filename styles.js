
// importe plusieurs composants de react-native qui seront utilisés dans l'application.
import { StyleSheet} from 'react-native';

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
    },
    containerView: {
        backgroundColor: "#D6DBDF",
        padding: 40,
        borderRadius: 10
    },
    input: {
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 5,
        padding: 10,
        margin: 20,
        width: 200,
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