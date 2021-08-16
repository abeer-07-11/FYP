class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
    }
  
    parse(message) {
        const lower = message.toLowerCase();
        if(
          lower.includes('hi') ||
          lower.includes('hello')
            ) {
            this.actionProvider.helloHandler()
        }
        else if(
            lower.includes('fine') ||
            lower.includes('good') ||
            lower.includes('great') ||
            lower.includes('ok') 
        ) {
            this.actionProvider.doHandler()
        }
        else if(
            lower.includes('inter') ||
            lower.includes('matric') ||
            lower.includes('bachelors') ||
            lower.includes('master') ||
            lower.includes('m.phil') 
        ) {
            this.actionProvider.degreeHandleer()
        }
        else if (
            lower.includes('computer') ||
            lower.includes('bio') ||
            lower.includes('biology') ||
            lower.includes('arts')
        ) {
            this.actionProvider.fieldHandler()
        }
        else if (
            (this.state.field[1] === 'bio') && (this.state.degree[0] === 'matric')
        ) {
            if (lower.includes('cs')) {
                this.actionProvider.bioComputerHandler();
            }
            else if(lower.includes('medical')){
                this.actionProvider.bioMatricHandler();
            }
            else if(lower.includes ('engineering') || lower.includes('eng')){
                this.actionProvider.bioEngHandler();
            }
            else if (lower.includes('art')){
                this.actionProvider.bioArtsHandler();
            }
            else if (lower.includes('commerce')){
                this.actionProvider.bioComHandler();
            }
            else{
                this.actionProvider.errorHandler()
            }
        }
        else if (
            (this.state.field[0] === 'computer') && (this.state.degree[0] === 'matric')
        ) {
            if (lower.includes('cs')) {
                this.actionProvider.bioComputerHandler();
            }
            else if(lower.includes ('engineering') || lower.includes('eng')){
                this.actionProvider.bioEngHandler();
            }
            else if (lower.includes('art')){
                this.actionProvider.bioArtsHandler();
            }
            else if (lower.includes('commerce')){
                this.actionProvider.bioComHandler();
            }
            else{
                this.actionProvider.errorHandler()
            }
        }
        else if (
            (this.state.field[0] === 'arts') && (this.state.degree[0] === 'matric')
        ) {
            if (lower.includes('art')){
                this.actionProvider.bioArtsHandler();
            }
            else if (lower.includes('commerce')){
                this.actionProvider.bioComHandler();
            }
            else{
                this.actionProvider.errorHandler()
            }
        }

        // else if(
        //     lower.includes('computer') && (this.state.degree[1] === 'inter')
        // ) {
        //     this.actionProvider.computerInterHandler()
        // }
        // else if(
        //     lower.includes('medical') && (this.state.degree[1] === 'inter')
        // ) {
        //     this.actionProvider.medicalInterHandler()
        // }
        // else if(
        //     lower.includes('engineering') && (this.state.degree[1] === 'inter')
        // ) {
        //     this.actionProvider.engineeringInterHandler()
        // }
        else {
            this.actionProvider.errorHandler()
        }
    }
  }
  
  export default MessageParser;
  