function dataAtual() { 
    // Seleciona todos os elementos <time> com o id "data" 
    const timeElements = document.querySelectorAll('time#data');
     // Obtém a data atual 
     const date = new Date(); 
     const dateString = `dia ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} às ${date.getHours()}:${date.getMinutes()}hs`;
      // Atualiza cada elemento <time> com a data e hora atuais
       timeElements.forEach((timeElement) => { timeElement.setAttribute('datetime', date.toISOString().split('T')[0]); 
        timeElement.innerText = dateString; });
     } 
     dataAtual()