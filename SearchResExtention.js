 document.addEventListener('click',async () => {
      await fetch("http://localhost:3000", {
      method: "GET",
      headers:{
      "hostname" : window.location.hostname,
      "hostcontent" : window.location.href
      }
      }
      ).then((e)=>{console.log(e)}).catch(e=>console.log(e));
    });

