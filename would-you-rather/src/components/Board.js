import React from 'react';
import PropTypes from 'prop-types';

const Board = props => {
    const { usersSorted } = props;
    return (
        <div>
            {
                usersSorted.map(user => (
                    <div
                        className='border'
                        style={{ display: 'flex', padding: 20 }}>
                        <div>
                            <img src={user.avatarURL}
                                style={{ borderRadius: 21 }}
                                height="42" width="42"
                                alt={`Avatar of ${user.name}`} />
                        </div>
                        <div style={{ margin: 20 }}>
                            <p> {user.name} Asked: {user.questions.length}</p>
                            <p> {user.name} Answered: {Object.keys(user.answers).length}</p>
                        </div>
                    </div>
                ))}



        </div>
    );
};

Board.propTypes = {
    usersSorted: PropTypes.array.isRequired

};

export default Board;
