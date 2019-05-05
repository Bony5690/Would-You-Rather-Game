import React from "react";
import PropTypes from "prop-types";

const wrapper = {
  borderRadius: 32,
  width: 500,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  backgroundColor: "#8AA9F8",
  margin: 10
};

const boardWrapper = {
  width: "100%",
  height: "100%",
  borderTopRightRadius: 32,
  borderBottomRightRadius: 32,
  display: "flex",
  justifyContent: "center",
  backgroundColor: "#F7B681",
  alignContent: "center"
};

const imageStyle = {
  borderRadius: 21,
  height: 109,
  width: 74
};

const wrapper2 = {
  margin: 20,
  borderColor: "#000000",
  borderWidth: 1
};

const headingTextStyle = {
  color: "white", 
  fontWeight: "700", 
  fontSize: 22,
}

const textStyle = {
  color: "white", 
  fontWeight: "700"
}

const Board = props => {
  const { usersSorted } = props;
  return (
    <div>
      {usersSorted.map(user => (
        <div key={user.id} className="border" style={wrapper}>
          <div style={{ padding: 20 }}>
            <img
              src={user.avatarURL}
              style={imageStyle}
              alt={`Avatar of ${user.name}`}
            />
            <p style={textStyle}>{user.name}</p>
          </div>

          <div style={boardWrapper} className="border">
            <div style={wrapper2}>
              <div style={{ margin: 5 }}>
                <p style={headingTextStyle}>
                  {user.name} Asked{" "}
                </p>
                <p style={textStyle}>
                  {user.questions.length} questions
                </p>
                <p style={{color: "white", fontWeight: "700", fontSize: 22}}>
                  {user.name} Answered
                </p>
                <p style={textStyle}>
                  {Object.keys(user.answers).length} questions
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
