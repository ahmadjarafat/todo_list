const buttonAdd = document.getElementById("button-add");
buttonAdd.addEventListener("click", e => {
    e.preventDefault();
    const newInputField = document.createElement("input");
    newInputField.setAttribute("type","text");
    const newInputCheckBox = document.createElement("input");
    newInputCheckBox.setAttribute("type","checkbox");
    const whiteSpace_1 = document.createElement("br");
    const whiteSpace_2 = document.createElement("br");
    const buttonRemove = document.createElement("button");
    buttonRemove.style.marginLeft = "10px";
    const buttonText = document.createTextNode("Remove");
    const Inputs = document.getElementById("inputs");
    buttonRemove.appendChild(buttonText);
    Inputs.appendChild(newInputField);
    Inputs.appendChild(newInputCheckBox);
    Inputs.appendChild(buttonRemove);
    Inputs.appendChild(whiteSpace_1);
    Inputs.appendChild(whiteSpace_2);
    buttonRemove.addEventListener("click", e => {
        Inputs.removeChild(newInputField);
        Inputs.removeChild(newInputCheckBox);
        Inputs.removeChild(buttonRemove);
        Inputs.removeChild(whiteSpace_1);
        Inputs.removeChild(whiteSpace_2); 
    })
})


window.addEventListener("beforeunload", e => { 
    const listOfInputs = document.getElementsByTagName("input");
    localStorage.setItem ("itemsLength",listOfInputs.length);
    for (let i = 0;i < listOfInputs.length;i++)
    {
        if ((i % 2) === 0)
        localStorage.setItem("Name" + i, listOfInputs[i].value);
        else 
        localStorage.setItem("Name" + i, listOfInputs[i].checked);
        
    }

    return "";
})


let j = 0;
while (j < localStorage.getItem("itemsLength"))
{
    if (localStorage.getItem("Name" + j) !== null) 
    {
    const  loadingInputsFields = document.createElement("input");
    const  inputsLoading = document.getElementById("inputs");
        loadingInputsFields.setAttribute("type","text");
        loadingInputsFields.value = localStorage.getItem("Name" + j);
        loadingInputsFields.className = "Name" + j;
        inputsLoading.appendChild(loadingInputsFields);
        j++;
        const loadingInputsChecks = document.createElement("input");
        const whiteSpace_3 = document.createElement("br");
        const whiteSpace_4 = document.createElement("br");
        const  loadingButtonRemove = document.createElement("button");
        const loadingRemoveButtonText = document.createTextNode("Remove");
        loadingInputsChecks.checked = localStorage.getItem("Name" + j);
        loadingInputsChecks.setAttribute("type","checkbox");
        loadingInputsChecks.className = "Name" + j;
        inputsLoading.appendChild(loadingInputsChecks);
        loadingButtonRemove.style.marginLeft = "10px";
        loadingButtonRemove.appendChild(loadingRemoveButtonText);
        inputsLoading.appendChild(loadingButtonRemove);
        inputsLoading.appendChild(whiteSpace_3);
        inputsLoading.appendChild(whiteSpace_4);
        loadingButtonRemove.addEventListener("click", e => {
            inputsLoading.removeChild(loadingInputsFields);
            inputsLoading.removeChild(loadingInputsChecks);
            inputsLoading.removeChild(loadingButtonRemove);
            inputsLoading.removeChild(whiteSpace_3);
            inputsLoading.removeChild(whiteSpace_4);
            localStorage.setItem(loadingInputsFields.className, [null]);
            localStorage.setItem(loadingInputsChecks.className, [null]);

})
    
        }
 j++;
}








