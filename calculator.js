function display(num){
      result.value+=num
}
function allclear(){
    result.value=""
}
function backspace(){
    x1=result.value
    result.value=x1.slice(0,-1)
}
function evaluateExp(){
    exp=result.value
    res=eval(exp)
    result.value=res
}