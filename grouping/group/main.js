import sourceJson from './source.json'

function displayData() {
  
  const assistants = sourceJson.filter(obj => obj.assistant);
  const nonAssistants = sourceJson.filter(obj => !obj.assistant);

  const group1 = sourceJson.filter(obj => obj.group === 'DeepPink');
  const group2 = sourceJson.filter(obj => obj.group === 'OrangeRed');
  const group3 = sourceJson.filter(obj => obj.group === 'AliceBlue');


  const group1List = document.getElementById('group1List');
  const group2List = document.getElementById('group2List');
  const group3List = document.getElementById('group3List');

  for (let i = 0; i < group1.length; i++) {
    
    // Eğer assistant değeri true ise, h1 etiketi içinde yazdıralım.
    if (group1[i].assistant) {
      group1List.innerHTML += '<li style="color:deeppink; font-size: 20px">' + group1[i].name + '</li>';
      
    } else {
      group1List.innerHTML += "<li>" + group1[i].name + "</li>";
    }
  }

  for (let i = 0; i < group2.length; i++) {
    
    if (group2[i].assistant) {
      group2List.innerHTML += '<li style="color:orangered; font-size: 20px">' + group2[i].name + "</li>";
    } else {
      group2List.innerHTML += "<li>" + group2[i].name + "</li>";
    }
  }

  for (let i = 0; i < group3.length; i++) {
    
    if (group3[i].assistant) {
      group3List.innerHTML += '<li style="color:#62b6ff; font-size: 20px">' + group3[i].name + "</li>";
    } else {
      group3List.innerHTML += "<li>" + group3[i].name + "</li>";
    }
  }

 
}
displayData();





