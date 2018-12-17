export default function text(state='',action){
  
        switch (action.type) {
            case "AddState":
                return state+1;
                default:
                return state;
        
         
        }
    
}