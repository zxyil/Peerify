import React from 'react';

import BackButton from '../../components/BackButton/BackButton';
import socket from '../../socket';

import './Results.css';

class Results extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            roomID: props.location.state.roomID,
        }

        socket.emit('getResults', this.state.roomID);
        socket.on('results', (first, second, third) => {
            this.setState({ first, second, third });
        });
    }

    render() {
        return (
            <div style={{ width: '100%', height: '100vh' }}>
                <BackButton />
                <div style={{ width: '100%', height: '70%', display: 'flex', justifyContent: 'center', alignItems: 'flex-end' }}>
                    <div className='silver' style={{ width: '10%', backgroundColor: '#DEDEDE', textAlign: 'center' }}>
                        <h3 className='winner'>{ this.state.second }</h3>
                    </div>
                    <div className='gold' style={{ width: '10%', backgroundColor: '#F7D802', margin: '0 50px', textAlign: 'center' }}>
                        <h3 className='winner'>{ this.state.first }</h3>
                    </div>
                    <div className='bronze' style={{ width: '10%', backgroundColor: '#C77B30', textAlign: 'center' }}>
                        <h3 className='winner'>{ this.state.third }</h3>
                    </div>
                </div>
            </div>
        )
    }
}

export default Results;