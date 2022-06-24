var qArray = ['q1','q2','q3','q4'];
var yesArray = ['q2','q4','a1','a2'];
var noArray = ['q3','q4','q4','a3'];
var n=0;
var count = []
function OnYesClick() {
    count.push(1)
    RewriteSrc(yesArray[n])
}
function OnNoClick() {
    count.push(0)
    RewriteSrc(noArray[n])
}
function RewriteSrc(nextId) {
    if (nextId.startsWith('q')==true){
        for (i=0; i<qArray.length+1; i++) {
            if (qArray[i]==nextId) {
                document.getElementById(qArray[n]).className = "txt_hide";
                n=i;
                document.getElementById(qArray[n]).className = "txt_display";
                break;
            }
        }
    } else {
        document.getElementById(qArray[n]).className = "txt_hide";
        document.getElementById('btn_area').className = "txt_hide";
        document.getElementById('result_area').className = "txt_display";
        document.getElementById(nextId).className = "txt_display";
    }
}
function OnAgainClick() {
    document.getElementById(yesArray[n]).className = "txt_hide";
    document.getElementById(noArray[n]).className = "txt_hide";
    n=0;
    document.getElementById(qArray[n]).className = "txt_display";
    document.getElementById('btn_area').className = "txt_display";
    document.getElementById('result_area').className = "txt_hide";
}
