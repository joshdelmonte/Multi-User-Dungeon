import React, { Component } from 'react';
import './css/Game.css';
import CharacterDetails from './CharacterDetails';
import CharacterList from './CharacterList';
import pusher from './pusher';

class Game extends Component {
    constructor(props) {
        super(props);

        this.state = {
            room: 'start'
        };

        pusher.subscribe('presence-room-start');
    }

    render() {
        return (
            <div className='mainBackground mainContainer'>
                <header className='headerBox'>
                    <div className='col-5'>
                        <h1 className='topLogo'>Dark-er Forest</h1>
                    </div>
                </header>
                <div className="row">
                    <div className="col-8">
                        <div className="game-roomDescription normText">
                            Room Description Here
                        </div>
                        <div className="game-messageLog normText">
                            Message Log Here
                        </div>
                        <div>
                            <input type="text" className="form-control normText" placeholder="Enter command" />
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="game-characterDetails normText">
                            <CharacterDetails player={ this.props.player } />
                        </div>
                        <div className="game-playerList normText">
                            <CharacterList room={ this.state.room } />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Game;
