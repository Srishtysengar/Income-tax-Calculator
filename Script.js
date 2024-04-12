$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();

   
    $('#taxCalculatorForm input[type="number"]').on('input', function() {
        var isValid = $(this).get(0).checkValidity();
        var errorIcon = $(this).siblings('.input-group-append').find('.error-icon');
        var tooltipMessage = isValid ? '' : $(this).siblings('.invalid-feedback').text();
        errorIcon.toggleClass('d-none', isValid);
        errorIcon.attr('title', tooltipMessage);
    });

   
    $('#taxCalculatorForm').submit(function(event) {
        event.preventDefault();
        var ageGroup = $('#ageGroup').val();
        if (ageGroup === "") {
            var ageGroupErrorIcon = $('#ageGroup').siblings('.invalid-feedback').find('.error-icon');
            ageGroupErrorIcon.removeClass('d-none');
            ageGroupErrorIcon.tooltip('show');
        } else {
            calculateTax();
        }
    });
});

function validateInput(input) {
    var value = input.value;
    var infoIcon = $(input).parent().find('.info-icon');
    var errorFeedback = $(input).parent().find('.invalid-feedback');
    if (!/^\d+$/.test(value)) {
        infoIcon.removeClass('d-none');
        errorFeedback.removeClass('d-none');
        $(input).addClass('invalid-input');
    } else {
        infoIcon.addClass('d-none');
        errorFeedback.addClass('d-none');
        $(input).removeClass('invalid-input');
    }
    if (value === '') {
        infoIcon.addClass('d-none');
        $(input).removeClass('invalid-input');
    }
}


function calculateTax() {
    var grossIncome = parseFloat($('#grossIncome').val());
    var extraIncome = parseFloat($('#extraIncome').val() || 0);
    var ageGroup = $('#ageGroup').val();

    var age;
    if (ageGroup === 'below40') {
        age = 39; 
    } else if (ageGroup === 'between40and60') {
        age = 50; 
    } else if (ageGroup === 'above60') {
        age = 61; 
    }
    
   var totalDeductions = parseFloat($('#totalDeductions').val() || 0);
   var totalIncome = grossIncome + extraIncome - totalDeductions;
   
   console.log(totalIncome);
   var tax;
    if (totalIncome <= 800000) {
        tax = 0;
    } else {
        var taxableIncome = totalIncome - 800000;
        if (age < 40) {
            tax = 0.3 * taxableIncome;
        } else if (age >= 40 && age < 60) {
            tax = 0.4 * taxableIncome;
        } else {
            tax = 0.1 * taxableIncome;
        }
    }
    console.log(tax);
    var overall = totalIncome - tax;

    $('#taxResultModal').modal('show');
    $('#taxValue').text('₹' + tax.toFixed(2));
    $('#overallIncome').text('₹' +'' + overall.toFixed(2));
}
