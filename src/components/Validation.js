
const Validation=(values)=>{
    let errors={}
   
    if(!values.name){
        errors.name="Name required"
    }
    else if(values.name.length<5){
        errors.name="Name must be more than 5 char"
    }
    if(!values.email){
        errors.email="Email required"
    }
    
    if(!values.website){
        errors.website="Website required"
    }
    if(!values.game){
        errors.game="Game required"
    }
    
    return errors;
}

export default Validation