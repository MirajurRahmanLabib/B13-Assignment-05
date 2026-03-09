console.log('Login functionality comming')

document.getElementById('login-btn').addEventListener('click', function(){
     
     const numberInput = document.getElementById('number'); 
     const number = numberInput.value ;
     console.log(number)
     
     const pinInput = document.getElementById('pin'); 
     const pin = pinInput.value ;
     console.log(pin)
     
     if(number === 'admin' && pin === 'admin123'){         
        alert('Login Successful');
        window.location.assign('./dashboard.html')
     }
     else{         
        alert('Login Faild');
        return;
     }
     
})