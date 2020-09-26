
function getDate(dateString="")
{ var today;  
    if(dateString === "")
        today=new Date();
    else
        today=new Date(dateString);
    
    var today_year=today.getFullYear();
    var today_month=today.getMonth()+1;
    var today_day=today.getDate();
    
    return today_day +"/" +today_month +"/"+ today_year;
}