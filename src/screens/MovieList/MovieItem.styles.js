import { StyleSheet, StatusBar } from 'react-native';
import { colors } from '../../theme';


const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: colors.white,
        marginHorizontal: 16,
        elevation: 8,
        marginBottom: 16,
        borderRadius: 8,
        overflow: 'hidden',
    },
    container: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        flex: 4,
    },
    title: {
        flexWrap: 'wrap', flex: 1
    },
    rowView: {
        flexDirection: 'row',
        marginTop: 5
    },
    homeIcon: {
        height: 16,
        width: 16,
        tintColor: colors.textColor
    },
    textStyle: {
        marginLeft: 8,
        fontSize: 14,
        flexWrap: 'wrap',
        color: colors.textColor
    },
    infoContainer: {
        paddingVertical: 8,
        flex: 2.5,
        justifyContent: 'space-evenly',
        paddingHorizontal: 16,
        alignItems: 'flex-start',
    },
});

export default styles;
