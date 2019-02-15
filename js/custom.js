// Profile dropdown
function toggleMenu() {
  var menuBox = document.getElementById('menu-box');    
  if(menuBox.style.display == "block") { // if is menuBox displayed, hide it
    menuBox.style.display = "none";
  }
  else { // if is menuBox hidden, display it
    menuBox.style.display = "block";
  }
}
$(document).click('body *',function(){
    var menuBox = document.getElementById('menu-box');    
    menuBox.style.display = "none";
});

//Program Requirements yes/no
$(document).ready(function(){
$(".yesbtn").click(function(){
  $(".prRightBlck").removeClass("prOpacity");
  $(".alertDiv").css("display", "none");
  $("#emailid").removeAttr('disabled','disabled');
  $("#accnum").removeAttr('disabled','disabled');
  $("#yesbtn").addClass("btnActive");
  $("#nobtn").removeClass("btnActive");
  $("#btnsubmit").removeAttr('disabled','disabled');
});
$(".nobtn").click(function(){
   $(".prRightBlck").addClass("prOpacity");
   $(".alertDiv").css("display", "block");
   $("#emailid").attr('disabled','disabled');
   $("#accnum").attr('disabled','disabled');
   $("#nobtn").addClass("btnActive");
   $("#yesbtn").removeClass("btnActive");
   $("#btnsubmit").attr('disabled','disabled');
   $(".titDisp .closeAlert").on('click', function(){
	$(".titDisp").addClass("dispNone");
	});
	$(".titDisp").removeClass("dispNone");
});

	$(".alertDiv").css("display", "none");
	$("#emailid").attr('disabled','disabled');
	$("#accnum").attr('disabled','disabled');
	 $("#btnsubmit").attr('disabled','disabled');
});
$(".titDisp1 .closeAlert1").on('click', function(){
	$(".titDisp1").addClass("dispNone1");
});
$(".titDisp1").removeClass("dispNone1");

// Show/hide password
$(document).ready(function(){
$(".glyphicon-eye-open").on("click", function() {
$(this).toggleClass("glyphicon-eye-close");
  var type = $("#password").attr("type");
if (type == "text"){ 
  $("#password").prop('type','password');}
else{ 
  $("#password").prop('type','text'); }
});
});

//Terms & conditons boxes for Banking Page
$(document).ready(function(){
	$(".bank-term-cond").click(function(){
		$(".bank-tc").toggle();
	});
	$(".close-butt img").click(function(){
		$(".bank-tc").hide();
	});	
});
//Saving Account and check account
 $(document).ready(function() {
  $("#savtype").click(function() {
   $(".form-group-reg").show("slow");
   });
    $("#acctype").click(function() {
   $(".form-group-reg").show("slow");
   });
 });
//Terms & conditons boxes for Approval status page
$(document).ready(function(){
	$(".credits-consents").click(function(){
	$(".tc-credits").toggle();
	$(".tc-credits-ec").hide();
	$(".tc-credits-tc").hide();
	$(".tc-credits-tm").hide();
	$(".tc-credits-pu").hide();
	$(".tc-credits-app").hide();
});
	$(".elctro-consent").click(function(){
	$(".tc-credits").hide();
	$(".tc-credits-ec").toggle();
	$(".tc-credits-tc").hide();
	$(".tc-credits-tm").hide();
	$(".tc-credits-pu").hide();
	$(".tc-credits-app").hide();
});
	$(".terms-cond").click(function(){
	$(".tc-credits").hide();
	$(".tc-credits-ec").hide();
	$(".tc-credits-tc").toggle();
	$(".tc-credits-tm").hide();
	$(".tc-credits-pu").hide();
	$(".tc-credits-app").hide();
});
	$(".textmsg-tm").click(function(){
	$(".tc-credits").hide();
	$(".tc-credits-ec").hide();
	$(".tc-credits-tc").hide();
	$(".tc-credits-tm").toggle();
	$(".tc-credits-pu").hide();
	$(".tc-credits-app").hide();
});
	$(".payauth").click(function(){
	$(".tc-credits").hide();
	$(".tc-credits-ec").hide();
	$(".tc-credits-tc").hide();
	$(".tc-credits-tm").hide();
	$(".tc-credits-pu").toggle();
	$(".tc-credits-app").hide();
});
	$(".app-auth").click(function(){
	$(".tc-credits").hide();
	$(".tc-credits-ec").hide();
	$(".tc-credits-tc").hide();
	$(".tc-credits-tm").hide();
	$(".tc-credits-pu").hide();
	$(".tc-credits-app").toggle();
});
	$(".close-butt img").click(function(){
	$(".tc-credits").hide();
	$(".tc-credits-ec").hide();
	$(".tc-credits-tc").hide();
	$(".tc-credits-tm").hide();
	$(".tc-credits-pu").hide();
	$(".tc-credits-app").hide();
});
});

var myLanguage = {
        requiredFields: 'Required.',
		badEmail: 'Please enter a valid email address'
    };

$.formUtils.addValidator({
  name : 'dobcheck',
  validatorFunction : function(value, $el, config, language, $form) {
	var daydropdownval = $(".daydropdown").val();
	var monthdropdownval = $(".monthdropdown").val();
	var yeardropdownval = $(".yeardropdown").val();
	
	start_date=monthdropdownval+"/"+daydropdownval+"/"+yeardropdownval;
	
	var a = new Date(start_date);
	var today = new Date();
	var day = today.getDate();
	var mon = today.getMonth()+1;
	var year = today.getFullYear();
	today = (mon+"/"+day+"/"+year);
	var today = new Date(today);
        if(today < a )
        {
			alert (a);
	alert (today);
			monthdropdown.val(0).change();
			yeardropdown.val(0).change();
			daydropdown.val(0).change();
			monthdropdown.focus();
			var span = $('<span />').attr({'class':'help-block form-error' }).html('Please enter a valid date of birth');
$('.doberror').html(span);
            return false;
        } else {
			$('.help-block').remove();
            return true;
			
        }
  }
});

$.formUtils.addValidator({
  name : 'gdobcheck',
  validatorFunction : function(value, $el, config, language, $form) {
	var daydropdownval = $(".daydropdown").val();
	var monthdropdownval = $(".monthdropdown").val();
	var yeardropdownval = $(".yeardropdown").val();
	start_date=monthdropdownval+"/"+daydropdownval+"/"+yeardropdownval;
	//alert("start date arrray format " + start_date);
	var a = new Date(start_date);
	var today = new Date();
	var day = today.getDate();
	var mon = today.getMonth()+1;
	var year = today.getFullYear()-18;
	today = (mon+"/"+day+"/"+year);
	var today = new Date(today);
        if(today.getTime() < a.getTime() )
        {
			monthdropdown.val(0).change();
			yeardropdown.val(0).change();
			daydropdown.val(0).change();
			monthdropdown.focus();
			var span = $('<span />').attr({'class':'help-block form-error' }).html('Guarantor must be over 18 years old');
$('.doberror').html(span);
            return false;
        } else {
			$('.help-block').remove();
            return true;
        }
	
	
  }
});

// Validation Intialization for specified form Id's with Submit buttom Disabled
$.validate({
	form : '#registration, #pinformation,#guarantorinfo,#incomeinfo,#approvalstatus,#bankinformation-eft,#bankinformation-debit,#bankinformation-chk,#login-application,#login-portal,#prform,#forget-pwd,#update-pwd',
 	modules : 'toggleDisabled,date,html5',
  	disabledFormFilter : 'form.toggle-disabled',
	errorMessagePosition : 'top',
  	showErrorDialogs : true,
	ignore: ".ignore",
	language : myLanguage
});


// For Estimate Amount
$(function(){
				
				$('.estimate').on('change',function(){
					console.log('Change event.');
					var val = $('.estimate').val();
				});
				
				$('.estimate').change(function(){
					console.log('Second change event...');
				});
				
				$('.estimate').number( true, 2 );
				
			});

// SSN Validation
var value;
var $ssn = $('#ssn');
//var $ssnVal = $('#ssn-val');

String.prototype.replaceAt=function(index, character) {
    return this.substr(0, index) + character + this.substr(index+character.length);
}

var ssn = {
  init: function () {
    this.bind();
  },
  
  bind: function () {
    $ssn.on('change', this.syncInput)
	.on('input', this.syncInput);
  },
  
  transformDisplay: function (val) {
    // Strip all non numbers
    var displayVal = val.replace(/[^0-9*]/g, '');
    displayVal = displayVal.substr(0, 9);
    
    // Inject dashes
    if (displayVal.length >= 4) {
      displayVal = displayVal.slice(0, 3) + '-' + displayVal.slice(3);
    }
    
    if (displayVal.length >= 7) {
      displayVal = displayVal.slice(0, 6) + '-' + displayVal.slice(6);
    }
        
    // Replace all numbers with astericks
    displayVal = displayVal.replace(/^.{6}/g, '***-**');
    
    return displayVal;
  },
  
  transformValue: function (val) {
    if (typeof value !== 'string') {
      value = "";
    }
    
    if (!val) {
      value = null;
      return;
    }
    
    var cleanVal = val.replace(/[^0-9*]/g, '');
    cleanVal = cleanVal.substr(0, 9);

    for (i = 0, l = cleanVal.length; i < l; i++) {
      if (/[0-9]/g.exec(cleanVal[i])) {
        console.log('replaced', i, cleanVal[i]);
        value = value.replaceAt(i, cleanVal[i]);
      }
    }
    
    value = value.substr(0, cleanVal.length);
  },
  
  syncInput: function () {
    var $input = $(this);
    var val = $(this).val();
    var displayVal = ssn.transformDisplay(val);
    ssn.transformValue(val);
    
    this.setSelectionRange(val.length, val.length);
    
    $input.val(displayVal);
   // $ssnVal.val(value);
    
    console.log('value set', displayVal);
  },
  
  syncValue: function () {
    
  },
};

ssn.init();

// Disable Copy & Paste on Input fields

 $(document).ready(function () {
      $('input[type=text]').bind('copy paste', function (e) {
         e.preventDefault();
      });
	  
	   $('input[type=email]').bind('copy paste', function (e) {
         e.preventDefault();
      });
	   
	    $('input[type=number]').bind('copy paste', function (e) {
         e.preventDefault();
      });
		
		 $('input[type=tel]').bind('copy paste', function (e) {
         e.preventDefault();
      });
		 
		$('input[type=text]').on("keypress", function(e) {
		if (e.which === 32 && !this.value.length)
			e.preventDefault();
		});
		
		$('input[type=email]').on("keypress", function(e) {
		if (e.which === 32 && !this.value.length)
			e.preventDefault();
		});
		 
   });

// Email Address validation on keypress
$('input[type=email]').on("keypress", function(event){
			
			switch (event.keyCode) {
            case 8:  // Backspace
            case 9:  // Tab
            case 13: // Enter
            case 37: // Left
            case 38: // Up
            case 39: // Right
            case 40: // Down
            break;
            default:
            var regex = new RegExp("^[a-zA-Z0-9.$@]+$");
            var key = event.key;
            if (!regex.test(key)) {
                event.preventDefault();
                return false;
            }
            break;
        }
});

// No Special Characters allowed

$('.nospecialchar').on("keypress", function(event){
			
			switch (event.keyCode) {
            case 8:  // Backspace
            case 9:  // Tab
            case 13: // Enter
            case 37: // Left
            case 38: // Up
            case 39: // Right
            case 40: // Down
			case 32: // Space
            break;
            default:
            var regex = new RegExp("^[a-zA-Z0-9.\s ]+$");
            var key = event.key;
            if (!regex.test(key)) {
                event.preventDefault();
                return false;
            }
            break;
        }
});

// US Phone/Cell Validation
$(function () {

    $('.phoneval').keydown(function (e) {
       var key = e.charCode || e.keyCode || 0;
       $text = $(this); 
       if (key !== 8 && key !== 9) {
           if ($text.val().length === 3) {
               $text.val('('+$text.val()+')');
           }
           if ($text.val().length === 8) {
               $text.val($text.val() + '-');
           }

       }

       return (key == 8 || key == 9 || key == 46 || (key >= 48 && key <= 57) || (key >= 96 && key <= 105));
   })
});


// Restrict only numbers on input
$(function () {
  //called when key is pressed in textbox
  $(".numbersonly").keypress(function (e) {					   
     if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
               return false;
    	}
  
   });

});


// Restrict only alphabets on input
$(function () {
  $(".alphabetsonly").keypress(function(e){
    var keyCode = (e.which) ? e.which : event.keyCode;
    if ( keyCode != 8 && keyCode != 32 && keyCode != 9 && !((keyCode >= 65 && keyCode <= 90) || (keyCode >= 97 && keyCode <= 122)) ) 
	{
      return false;
    }
  });
});



// Expiry Date Validation
$(function () {

    $('.expiryval').keydown(function (e) {
       var key = e.charCode || e.keyCode || 0;
       $text = $(this); 
       if (key !== 1 && key !== 2) {
           if ($text.val().length === 2) {
               $text.val($text.val() + '/');
           }

       }

       return (key == 2 || key == 4 || key == 46 || (key >= x && key <= 57) || (key >= 96 && key <= 105));
   })
});

// To make nav div clickable		
$(".divclickable").click(function(){
     window.location=$(this).find("a").attr("href"); 
     return false;
});


// For Banking Information Page to show and hide Debit Card Form
$(document).ready(function () {
        $('#btnfundtransfer').click(function () {
			$('#fundtransfer').removeAttr("style");
			$('#debitcard').css('visibility', 'hidden');
			$('#debitcard').css('display', 'none');
			$('#check').css('visibility', 'hidden');
			$('#check').css('display', 'none');
        });

        $('#btndebit').click(function () {
			$('#debitcard').removeAttr("style");
			$('#fundtransfer').css('visibility', 'hidden');
			$('#fundtransfer').css('display', 'none');
			$('#check').css('visibility', 'hidden');
			$('#check').css('display', 'none');
        });	

		$('#btncheck').click(function () {
			$('#check').removeAttr("style");
			$('#fundtransfer').css('visibility', 'hidden');
			$('#fundtransfer').css('display', 'none');
			$('#debitcard').css('visibility', 'hidden');
			$('#debitcard').css('display', 'none');
        });	
		
		$('#oftenpaid').on('change', function () {
     		var selectVal = $("#oftenpaid option:selected").val();
			if (selectVal == 1)
			{
				$('#one').removeAttr("style");
				$('#two').css('visibility', 'hidden');
				$('#two').css('display', 'none');
				$('#three').css('visibility', 'hidden');
				$('#three').css('display', 'none');
				$('#four').css('visibility', 'hidden');
				$('#four').css('display', 'none');
				$('#five').css('visibility', 'hidden');
				$('#five').css('display', 'none');
				$('#six').css('visibility', 'hidden');
				$('#six').css('display', 'none');
				$('#seven').css('visibility', 'hidden');
				$('#seven').css('display', 'none');
				$('#eight').css('visibility', 'hidden');
				$('#eight').css('display', 'none');
				$('#ten').css('visibility', 'hidden');
				$('#ten').css('display', 'none');
				$('#nine').css('visibility', 'hidden');
				$('#nine').css('display', 'none');
			} else if (selectVal == 2) {
				
				$('#two').removeAttr("style");
				$('#one').css('visibility', 'hidden');
				$('#one').css('display', 'none');
				$('#three').css('visibility', 'hidden');
				$('#three').css('display', 'none');
				$('#four').css('visibility', 'hidden');
				$('#four').css('display', 'none');
				$('#five').css('visibility', 'hidden');
				$('#five').css('display', 'none');
				$('#six').css('visibility', 'hidden');
				$('#six').css('display', 'none');
				$('#seven').css('visibility', 'hidden');
				$('#seven').css('display', 'none');
				$('#eight').css('visibility', 'hidden');
				$('#eight').css('display', 'none');
				$('#ten').css('visibility', 'hidden');
				$('#ten').css('display', 'none');
				$('#nine').css('visibility', 'hidden');
				$('#nine').css('display', 'none');
			
			}
			else if (selectVal == 9) {
				
				$('#nine').removeAttr("style");
				$('#one').css('visibility', 'hidden');
				$('#one').css('display', 'none');
				$('#two').css('visibility', 'hidden');
				$('#two').css('display', 'none');
				$('#three').css('visibility', 'hidden');
				$('#three').css('display', 'none');
				$('#five').css('visibility', 'hidden');
				$('#five').css('display', 'none');
				$('#four').css('visibility', 'hidden');
				$('#four').css('display', 'none');
				$('#six').css('visibility', 'hidden');
				$('#six').css('display', 'none');
				$('#seven').css('visibility', 'hidden');
				$('#seven').css('display', 'none');
				$('#eight').css('visibility', 'hidden');
				$('#eight').css('display', 'none');
				$('#ten').css('visibility', 'hidden');
				$('#ten').css('display', 'none');
			
			}
			else if (selectVal == 10) {
				
				$('#ten').removeAttr("style");
				$('#one').css('visibility', 'hidden');
				$('#one').css('display', 'none');
				$('#two').css('visibility', 'hidden');
				$('#two').css('display', 'none');
				$('#three').css('visibility', 'hidden');
				$('#three').css('display', 'none');
				$('#five').css('visibility', 'hidden');
				$('#five').css('display', 'none');
				$('#four').css('visibility', 'hidden');
				$('#four').css('display', 'none');
				$('#six').css('visibility', 'hidden');
				$('#six').css('display', 'none');
				$('#seven').css('visibility', 'hidden');
				$('#seven').css('display', 'none');
				$('#eight').css('visibility', 'hidden');
				$('#eight').css('display', 'none');
				$('#nine').css('visibility', 'hidden');
				$('#nine').css('display', 'none');
			
			}
			
			});
			
			$('#oftenpaidone').on('change', function () {
     		var selectVal = $("#oftenpaidone option:selected").val();
			 if (selectVal == 3) {
				
				$('#three').removeAttr("style");
				$('#one').css('visibility', 'hidden');
				$('#one').css('display', 'none');
				$('#two').css('visibility', 'hidden');
				$('#two').css('display', 'none');
				$('#four').css('visibility', 'hidden');
				$('#four').css('display', 'none');
				$('#five').css('visibility', 'hidden');
				$('#five').css('display', 'none');
				$('#six').css('visibility', 'hidden');
				$('#six').css('display', 'none');
				$('#seven').css('visibility', 'hidden');
				$('#seven').css('display', 'none');
				$('#eight').css('visibility', 'hidden');
				$('#eight').css('display', 'none');
				$('#ten').css('visibility', 'hidden');
				$('#ten').css('display', 'none');
			
			} else if (selectVal == 4) {
				
				$('#four').removeAttr("style");
				$('#one').css('visibility', 'hidden');
				$('#one').css('display', 'none');
				$('#two').css('visibility', 'hidden');
				$('#two').css('display', 'none');
				$('#three').css('visibility', 'hidden');
				$('#three').css('display', 'none');
				$('#five').css('visibility', 'hidden');
				$('#five').css('display', 'none');
				$('#six').css('visibility', 'hidden');
				$('#six').css('display', 'none');
				$('#seven').css('visibility', 'hidden');
				$('#seven').css('display', 'none');
				$('#eight').css('visibility', 'hidden');
				$('#eight').css('display', 'none');
				$('#ten').css('visibility', 'hidden');
				$('#ten').css('display', 'none');
			
			} 
			
			});
			
			$('#oftenpaidtwo').on('change', function () {
     		var selectVal = $("#oftenpaidtwo option:selected").val();
			//alert (selectVal);
			if (selectVal == 5) {
				
				$('#five').removeAttr("style");
				$('#one').css('visibility', 'hidden');
				$('#one').css('display', 'none');
				$('#two').css('visibility', 'hidden');
				$('#two').css('display', 'none');
				$('#three').css('visibility', 'hidden');
				$('#three').css('display', 'none');
				$('#four').css('visibility', 'hidden');
				$('#four').css('display', 'none');
				$('#six').css('visibility', 'hidden');
				$('#six').css('display', 'none');
				$('#seven').css('visibility', 'hidden');
				$('#seven').css('display', 'none');
				$('#eight').css('visibility', 'hidden');
				$('#eight').css('display', 'none');
				$('#nine').css('visibility', 'hidden');
				$('#nine').css('display', 'none');
			
			} else if (selectVal == 6) {
				
				$('#six').removeAttr("style");
				$('#one').css('visibility', 'hidden');
				$('#one').css('display', 'none');
				$('#two').css('visibility', 'hidden');
				$('#two').css('display', 'none');
				$('#three').css('visibility', 'hidden');
				$('#three').css('display', 'none');
				$('#five').css('visibility', 'hidden');
				$('#five').css('display', 'none');
				$('#four').css('visibility', 'hidden');
				$('#four').css('display', 'none');
				$('#seven').css('visibility', 'hidden');
				$('#seven').css('display', 'none');
				$('#eight').css('visibility', 'hidden');
				$('#eight').css('display', 'none');
				$('#nine').css('visibility', 'hidden');
				$('#nine').css('display', 'none');
			
			} else if (selectVal == 7) {
				
				$('#seven').removeAttr("style");
				$('#one').css('visibility', 'hidden');
				$('#one').css('display', 'none');
				$('#two').css('visibility', 'hidden');
				$('#two').css('display', 'none');
				$('#three').css('visibility', 'hidden');
				$('#three').css('display', 'none');
				$('#five').css('visibility', 'hidden');
				$('#five').css('display', 'none');
				$('#four').css('visibility', 'hidden');
				$('#four').css('display', 'none');
				$('#six').css('visibility', 'hidden');
				$('#six').css('display', 'none');
				$('#eight').css('visibility', 'hidden');
				$('#eight').css('display', 'none');
				$('#nine').css('visibility', 'hidden');
				$('#nine').css('display', 'none');
				
			
			} else if (selectVal == 8) {
				
				$('#eight').removeAttr("style");
				$('#one').css('visibility', 'hidden');
				$('#one').css('display', 'none');
				$('#two').css('visibility', 'hidden');
				$('#two').css('display', 'none');
				$('#three').css('visibility', 'hidden');
				$('#three').css('display', 'none');
				$('#five').css('visibility', 'hidden');
				$('#five').css('display', 'none');
				$('#four').css('visibility', 'hidden');
				$('#four').css('display', 'none');
				$('#six').css('visibility', 'hidden');
				$('#six').css('display', 'none');
				$('#seven').css('visibility', 'hidden');
				$('#seven').css('display', 'none');
				$('#nine').css('visibility', 'hidden');
				$('#nine').css('display', 'none');
			}
			});
			
			$('#daypaid').on('change', function () {
     		var selectVal = $("#daypaid option:selected").val();
			if (selectVal == 'weekday') {
				
				$('#weekselect').removeAttr("style");
			
			}
			});

    });

//For removing placeholder on focus
$('input,textarea').focus(function(){
   $(this).removeAttr('placeholder');
});

// New Date Selector
var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec'];

    var daydropdown = $(".daydropdown"), monthdropdown = $(".monthdropdown"), yeardropdown = $(".yeardropdown");
	
	var today = new Date(),
		day = today.getUTCDate(),
		month = today.getUTCMonth(),
		year = today.getUTCFullYear(),
		daysInCurrMonth = daysInMonth(month, year);
			
      function daysInMonth(month, year) {
        return new Date(year, month, 0).getDate();
      }

      function populateDates(){
        // Year
        for(var i = 0; i < 100; i++){
          var opt = document.createElement('option');
          opt.value = year - i;
          opt.text =  year - i;
          yeardropdown.append(opt);
        }

        // Month
        for(var i = 0; i < 12; i++){
          var opt = document.createElement('option');
          opt.value = months[i];
          opt.text = months[i];
          monthdropdown.append(opt);
        }
			
        // Day
        for(var i = 0; i < daysInCurrMonth; i++){
          var opt = document.createElement('option');
          opt.value = i + 1;
          opt.text = i + 1;
          daydropdown.append(opt);
        }
		
      }
	  
	
// Change handler for months
monthdropdown.click(function(){
	var newMonth = months.indexOf(monthdropdown.val()) + 1;
			if (yeardropdown.val() == 'YYYY') {
					newYear = year;
					} else {
					newYear = yeardropdown.val();
				}
        
        daysInCurrMonth = daysInMonth(newMonth, newYear);
		oldval = daydropdown.val();
        daydropdown.html('');
			
			daydropdown.append($("<option>").attr('selected','selected').attr('disabled','disabled').attr('value',0).text('Date'));
		  
			for(var i = 0; i < daysInCurrMonth; i++){
			  var opt = document.createElement('option');
			  opt.value = i + 1;
			  opt.text = i + 1;
			  daydropdown.append(opt);
			}        
					if(oldval == null) {
					daydropdown.val(0).change();
					} else {
					daydropdown.val(oldval).change();
					}
}); 

// Change handler for Years
yeardropdown.click(function(){

	var newMonth = months.indexOf(monthdropdown.val()) + 1;
        if (yeardropdown.val() == 'YYYY') {
					newYear = year;
					} else {
					newYear = yeardropdown.val();
				}
        
        daysInCurrMonth = daysInMonth(newMonth, newYear);
		oldval = daydropdown.val();
        daydropdown.html('');
		
		daydropdown.append($("<option>").attr('selected','selected').attr('disabled','disabled').attr('value',0).text('Date'));

        for(var i = 0; i < daysInCurrMonth; i++){
          var opt = document.createElement('option');
          opt.value = i + 1;
          opt.text = i + 1;
          daydropdown.append(opt);
        }        
		if(oldval == null) {
			
			daydropdown.val(0).change();
		} else {
		daydropdown.val(oldval).change();
		}

});							  
 
populateDates()

//Field auto tab for Login page
var fieldauto = document.getElementsByClassName("fieldauto")[0];
fieldauto.onkeyup = function(e) {
    var target = e.srcElement;
    var maxLength = parseInt(target.attributes["maxlength"].value, 10);
    var myLength = target.value.length;
    if (myLength >= maxLength) {
        var next = target;
        while (next = next.nextElementSibling) {
            if (next == null)
                break;
            if (next.tagName.toLowerCase() == "input") {
                next.focus();
                break;
            }
        }
    }
}

