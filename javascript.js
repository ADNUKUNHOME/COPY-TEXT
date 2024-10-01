$(document).ready(function(){


    // Copied text will appear when the copy button will clicked.
    function add(){
        $(".copied").addClass("bounce-effect");
    }
    function remove(){
        $(".copied").removeClass("bounce-effect");
    }



    // copying the text involved in the textarea while the button pressed
    $(".copy-btn").click(function() {


        $("#textarea").select();
        document.execCommand("copy");
        add();
        setTimeout(remove, 800);

    })
});