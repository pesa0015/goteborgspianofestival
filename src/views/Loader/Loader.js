import React, { Component } from 'react'
import { I18n } from 'react-i18next'
// import background from './../../assets/locations/GoteborgsOperan.png'

class Loader extends Component {
    render() {
        return (
            <I18n>
                {
                    (t) => (
                        <div id="wrapper">
                            {/*<img src={background} style={styles} alt=""/>*/}
                        </div>
                    )
                }
            </I18n>
        );
    }
}

// const styles = {
//     width: '100%',
//     height: '700px'
// };

export default Loader;
