import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text} from 'react-native';

// Styles
import styles from './styles/Styles';

class Welcome extends Component {
    static navigationOptions = {
        header: null
    };

    state = {};

    constructor(props) {
        super(props);
    }
    
    render() {
        return(
            <View style={styles.mainView}>
                <Text>Hello World!</Text>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = {};

export default connect(mapStateToProps,mapDispatchToProps)(Welcome);