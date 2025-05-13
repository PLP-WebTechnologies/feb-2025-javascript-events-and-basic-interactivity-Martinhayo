<script>

const username=document.getElementById("usernaame");
username.oninput=function(){
    if(username.value.length>5){
        username.setCustomvalidity("username must be at least 5 characters")
    }
    else{

    
    username.setCustomvalidity("");
};
};
const button=document.getElementsByTagName("button");
button.onclick=function(){
    alert("Registered successfully")
};
const h1=document.getElementById("heading");
h1.textContent="Welcome";
</script>