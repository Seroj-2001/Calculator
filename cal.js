$('.calculator div').click(function(){
    if($(this).index()!=0){
    var v= $(this).text();
    if(v=="="){
        var v2 = $("#text").val();
        v2=eval(v2);
        $("#text").val(v2);
    }else if(v=="C"){
        $("#text").val('');
    }else if(v=="<"){
        var v2 = $("#text").val();
        v2=v2.slice(0,v2.length-1);
        $("#text").val(v2);
    }else{
        var v2 = $("#text").val();
        v2+=v;
        $("#text").val(v2);
    }
}
});