import { createChatBotMessage } from "react-chatbot-kit";

const config = {
  lang: "no",
  initialMessages: [createChatBotMessage(`Hello!`)],
  botName: "APFR Bot",
  customStyles: {
    botMessageBox: {
      backgroundColor: "black",
    },
    chatButton: {
      backgroundColor: "black",
      marginLeft: "25px",
    },
  },
  state: {
    degree: ["matric", "inter", "bachelors", "master", "m.phil"],
    field: ['computer', 'bio', 'arts', 'pre medical', 'pre engineering', 'ics', 'icom']
  }
}

export default config