onsubmit 
alert 
<script>
function myEventFunction() {
  alert('You have successfully entered your submission!') ;
}

var d1 = document.getElemebtById ('submit') ;
d1.addEventListener ('click', myEventFunction) ;
</script>
