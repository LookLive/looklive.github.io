Handlebars.registerHelper('pretty_timestamp', function(value) {

    var hours = parseInt(value/3600,10)
    var minutes = parseInt((value-(hours*3600))/60, 10)
    var seconds = parseInt(value - (hours*3600) - (minutes*60),10)
    if(seconds < 10){
        seconds = '0'+seconds
    }

    if(hours > 0){
        result = hours + ':' + minutes + ':' + seconds;
    } else {
        result = minutes + ':' + seconds;
    }

    return new Handlebars.SafeString(result);
});