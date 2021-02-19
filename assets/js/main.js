$(document).ready(function(){
    $("#form").validate({
    rules :{
        firstname: {
            required : true
        },
        lastname: {
            required : true
        },
        email: {
            required : true
        },
        password: {
            required : true
        }
    },
    messages :{
        firstname: {
            required : 'First name cannot be empty'
        },
        lastname: {
            required : 'Last name cannot be empty'
        },
        email: {
            required : 'Looks like this is not an email'
        },
        password: {
            required : 'Password cannot be empty'
        }
    }
    });
});