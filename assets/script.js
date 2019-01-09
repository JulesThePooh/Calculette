//variable necessaire
variable_des_parentheses = 0; 
tab_des_nombres = [];
tab_des_operateur = []; 

//Calculette
function calculette(groupe, valeur){
var ecran = document.querySelector("#number"); 
    if (groupe === 'chiffre'){
        if (lastChar = ecran.value.substr(-1) === '0' && valeur === 0){
            alert('Vous ne pouvez pas mettre deux 0 à la suite !');
        }
        else if (lastChar = ecran.value.substr(-1) === ')'){
            alert('Merci de rentrer un opérateur après des parenthèses!');
        }
        else{
            ecran.value += valeur; 
        }
    }
    else if (groupe === 'virgule'){
        if (lastChar = ecran.value.substr(-1) === '.'){
            alert('Vous ne pouvez pas mettre 2 virgules');
        }
        else{
        ecran.value = ecran.value + '.'
        }
    }
    else if (groupe === 'restart'){
        ecran.value = ''; 
    }
    else if (groupe === 'special'){
        if (lastChar = ecran.value.substr(-1) === '.'){
            alert('Vous ne pouvez pas mettre un opérateur après une virgule!');
        }
        else if (lastChar = ecran.value.substr(-1) === '('){
            alert('Vous ne pouvez pas mettre un opérateur après une parenthèse ouvrante!');
        }
        else if (lastChar = ecran.value.substr(-1) === '+'){
            alert('Vous ne pouvez pas rentrer deux opérateurs en même temps!'); 
        }
        else if (lastChar = ecran.value.substr(-1) === '-'){
            alert('Vous ne pouvez pas rentrer deux opérateurs en même temps!'); 
        }
        else if (lastChar = ecran.value.substr(-1) === '/'){
            alert('Vous ne pouvez pas rentrer deux opérateurs en même temps!'); 
        }
        else if (lastChar = ecran.value.substr(-1) === 'x'){
            alert('Vous ne pouvez pas rentrer deux opérateurs en même temps!'); 
        }
        else if (lastChar = ecran.value.substr(-1) === '%'){
            alert('Vous ne pouvez pas rentrer deux opérateurs en même temps!'); 
        }
        else{
            switch (valeur){
                case '+':
                    ecran.value = ecran.value + '+'; 
                break; 
                case '-':
                    ecran.value = ecran.value + '-'; 
                break; 
                case '/':
                    ecran.value = ecran.value + '/'; 
                break; 
                case 'x':
                    ecran.value = ecran.value + 'x'; 
                break; 
                case '%':
                    ecran.value = ecran.value + '%'; 
                break; 
            }   
        }
    }
}

