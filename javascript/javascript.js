var typed = new Typed('.webdeveloper_heading4', {
  strings: ['Frontend Developer ', 'Backend Developer'],
  typeSpeed: 150,
  backspeed:150,
  loop:true,
});

function sendbtn() {
  var param ={
    name:document.getElementById("full_name").value,
    email:document.getElementById("email").value,
    phone:document.getElementById("phone").value,
    message:document.getElementById("message").value,

  };

  const serviceId="service_0mzo57b";
  const templateId="template_frnm7zc";

  emailjs
  .send(serviceId,templateId,param)
  .then((res)=>{
    document.getElementById("full_name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("message").value = "";
    console.log(res);
    alert("Your Message Send!")
  })
  .catch((err)=>console.log(err));

  
}