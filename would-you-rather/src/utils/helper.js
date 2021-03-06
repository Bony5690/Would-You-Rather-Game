
export function formatDate(timestamp) {
    const d = new Date(timestamp);
    const time = d.toLocaleTimeString("en-US");
    return time.substr(0, 5) + time.slice(-2) + " | " + d.toLocaleDateString();
  }
  
  export function formatQuestion(question, author) {
    const { id, votes, optionOne, optionTwo, timestamp } = question;
    const { name, avatarURL } = author;
    console.log(name)
  
    return {
      name,
      id,
      timestamp,
      votes,
      optionOne,
      optionTwo,
      avatar: avatarURL
    };
  }