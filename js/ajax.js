 /* Loading the api url data into the sidebar */

$(document).ready(function(e){
     var $loadD = $('#load-data');
       $('#load-data, #load').on('click',function(e) {
        e.preventDefault();
           
           $('#side-one').load('https://api.github.com/users/mintdigital');
         
    });
       
   });