class ActionProvider {
    constructor(createChatBotMessage, setStateFunc, createClientMessage) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
      this.createClientMessage = createClientMessage;
    }
    
    errorHandler = () => {
        const message = this.createChatBotMessage("Please insert the correct answer");
        this.setChatBotMessage(message);
    }
    helloHandler = () => {
        const message = this.createChatBotMessage("How are you?");
        this.setChatBotMessage(message);
    }
    doHandler = () => {
        const message = this.createChatBotMessage("What was your last degree that you had completed? like 'matric' or 'inter' ");
        this.setChatBotMessage(message);
    }
    degreeHandleer = () => {
        const message = this.createChatBotMessage("In which discipline you did the Degree?");
        this.setChatBotMessage(message);
    }
    fieldHandler = () => {
        const message = this.createChatBotMessage("What are your field of  interests?");
        this.setChatBotMessage(message);
    }
    ComputerFieldHandler = () => {
        const message = this.createChatBotMessage("What are your field of  interests? like 'cs', 'engineering' etc. ");
        this.setChatBotMessage(message);
    }
    artFieldHandler = () => {
        const message = this.createChatBotMessage("What are your field of  interests? like 'arts', 'commerce'");
        this.setChatBotMessage(message);
    }
    bioComHandler = () => {
        const message = this.createChatBotMessage("I suggest you to choose I.Com as your interest is in Commerce.")
        this.setChatBotMessage(message);
    }
    bioArtsHandler = () => {
        const message = this.createChatBotMessage("I suggest you to choose Fine Arts as your interest is in Arts.")
        this.setChatBotMessage(message);
    }
    bioEngHandler = () => {
        const message = this.createChatBotMessage("I suggest you to choose Pre-Engineering as your interest is in Engneering.")
        this.setChatBotMessage(message);
    }
    bioMatricHandler = () => {
        const message = this.createChatBotMessage("I suggest you to choose Pre-Medical as your interest is in medical.")
        this.setChatBotMessage(message);
    }
    bioComputerHandler = () => {
        const message = this.createChatBotMessage("I suggest you to choose I.C.S as your interest is in computer.")
        this.setChatBotMessage(message);
    }
    computerInterHandler = () => {
        const message = this.createChatBotMessage("I suggest you to choose BSCS / BSSE / BSIT as your interest is in computer.")
        this.setChatBotMessage(message);
    }
    medicalInterHandler = () => {
        const message = this.createChatBotMessage("I suggest you to choose Phamacy / MBBS / Dentistry / Nursing / Forensic Chemistry as your interest is in medical.")
        this.setChatBotMessage(message);
    }
    engineeringInterHandler = () => {
        const message = this.createChatBotMessage("I suggest you to choose Aerospace Engineering / Electric Engineering / Mechanical Engineering / Civil Engineering / Petroleum & Gas Engineering as your interest is in engineering.    www.google.com")
        this.setChatBotMessage(message);
    }

    
    setChatBotMessage = (message) => {
        this.setState(state => ({...state, messages: [...state.messages, message] }))
    }

  }
  export default ActionProvider;
  