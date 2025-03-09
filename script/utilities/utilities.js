function getElementById(id){
    const Value = document.getElementById(id).value;
    const convertedValue = parseFloat(Value);
    return convertedValue;
}

function getInnerText(id){
    const value = document.getElementById(id).innerText;
    const ConvertedValue = parseFloat(value);
    return ConvertedValue;
}

function setInnerTextByIdaAndValue(id,value){
    document.getElementById(id).innerText=value;
}

function handleToggle(id,status){
    document.getElementById(id).style.display = status;
}