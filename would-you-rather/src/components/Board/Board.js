import React from "react";
import PropTypes from "prop-types";

const Board = props => {
  const { usersSorted } = props;
  return (
    <div>
      {usersSorted.map(user => (
        <div
        key={user.id}
          className="border"
          style={{
            borderRadius: 32,
            width: 500,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            backgroundColor: "#8AA9F8",
            margin: 10
          }}
        >
          <div style={{padding: 20}}>
            <img
              src={user.avatarURL}
              style={{ borderRadius: 21 }}
              height="42"
              width="42"
              alt={`Avatar of ${user.name}`}
            />
          </div>

          <div
            style={{
              width: "100%",
              borderTopRightRadius: 32,
              borderBottomRightRadius: 32,
              display: "flex",
              justifyContent: "center",
              backgroundColor: "#F7B681",
              alignContent: "center"
            }}
            className="border"
          >
            <div style={{ margin: 20, borderColor: "#000000", borderWidth: 1 }}>
              {/* <p
                style={{
                //   backgroundColor: "light-gray",
                  fontSize: 15,
                  marginTop: -15,
                  color: "white",
                  fontWeight: "600"
                }}
              >
          
              </p> */}
              <div style={{margin: 5}}> 
              <p style={{ color: "white", fontWeight: "600" }}>
              {user.name} Asked   </p>
              <p style={{ color: "white", fontWeight: "600" }}>
                {user.questions.length}
              </p>
              <p style={{ color: "white", fontWeight: "600" }}>
                {user.name} Answered
                {Object.keys(user.answers).length}
              </p>
              </div>
            </div>
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
