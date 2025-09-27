function test2(){
    let content = document.getElementById('test');
    let color = document.getElementById('content').innerText;
    console.log(color);
    
    content.style.backgroundColor = color;

};