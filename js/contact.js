function submitForm() {
    if($( "input[name='firstname']").val() == '' || $("input[name='lastname']").val() == ''){
        alert('Please enter your first and last name');

        if($( "input[name='firstname']").val() == '') $( "input[name='firstname']")[0].style.backgroundColor = '#FF6C64';
        if($( "input[name='lastname']").val() == '') $( "input[name='lastname']")[0].style.backgroundColor = '#FF6C64';
    }
    else if ($("select[name='select']").val() == null) {
        alert('Please select one option for type');
        $( "select[name='select']")[0].style.backgroundColor = '#FF6C64';
    }
    else if($("input[name='time']:checked", '#form1').val() == null) {
        alert("Please choose one option for time");
    }
    else {
        alert("Thanks for submiting!");
        window.location.reload();
    }

}