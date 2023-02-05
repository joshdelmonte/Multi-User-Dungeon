import React, { Component } from 'react';
import races from './races';
import classes from './classes';
import './css/characterDetails.css'

class CharacterDetails extends Component {
    render() {
        const { player } = this.props;
        const race = races.find((race) => race.id === player.race);
        const cls = classes.find((cls) => cls.id === player.cls);

        return (
            <div>
                <div className="row">
                    <div className="col-2">
                        <b>Name: </b>
                    </div>
                    <div className="col-10 characterDetails">
                        <p>{ player.name }</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-2">
                        <b>Race: </b>
                    </div>
                    <div className="col-10 characterDetails">
                        <p>{ race.name }</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-2">
                        <b>Class: </b>
                    </div>
                    <div className="col-10 characterDetails">
                        <p>{ cls.name }</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default CharacterDetails;
