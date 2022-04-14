import React from 'react';




function App(){
    
    let email;
    let password;

    function handleSubmit(event){
        event.preventDefault();
        if(email !== undefined && password !== undefined){
            if(/\s+/g.test(email + password)){
                alert('Нельзя использовать пробелы в полях!')
                email = undefined;
                password = undefined;
                event.target.reset();
            }else{
                console.log({email, password})
                email = undefined;
                password = undefined;
                event.target.reset();   
            }
        }else{
            alert('Необходимо заполнить поля!')
        
        }
        }

    const handleChange =(event)=>{
        if(event.target.type === 'text'){
            email = event.target.value
        }else{
            password = event.target.value
        }
    }
    
    return(
        <form onSubmit={handleSubmit} className='App'>
            <input value={email} onChange={handleChange} style={{margin:'5px'}} type="text" placeholder="E-Mail"></input>
            <input value={password} onChange={handleChange} style={{margin:'5px'}} type="password" placeholder="Пароль"></input>
            <button style={{margin:'5px'}} type='submit'>Войти</button>
        </form>
    )
}





export default App;