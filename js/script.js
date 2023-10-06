// // ...................First-Project...................ColorSwithcher.................................
var box = document.getElementById("box");
function myFunction(color){
	box.style.backgroundColor = color;
}	
	
// // // ..................Second-Project...................Calculator.................................*/
function Display(value){
		document.getElementById("result").value += value;
	}
	function calculate(){
		var a = document.getElementById("result") .value;
		var b = eval(a);
		document.getElementById("result").value = b;
	}
	function clearDisplay(){
		document.getElementById("result").value = ""
	}
	function Percentage() {
		var a = document.getElementById("result") .value;
		b = eval(a) / 100;
		document.getElementById('result').value = b;
	}

	function Square() {
		var a = document.getElementById("result") .value;
		b = Math.pow(eval(a), 2);
		document.getElementById('result').value = b;
	}

	function cube() {
		var a = document.getElementById("result") .value;
		b = Math.pow(eval(a), 3);
		document.getElementById('result').value = b;
	}

	function SquareRoot() {
		var a = document.getElementById("result") .value;
		b = Math.sqrt(eval(a));
		document.getElementById('result').value = b;
	}
	
	function cubeRoot() {
		var a = document.getElementById("result") .value;
		b = Math.cbrt(eval(a));
		document.getElementById('result').value = b;
	}

	function dlc() {
		var a = document.getElementById("result") .value;
		b = a.slice(0, -1);
		document.getElementById('result').value = b;
	}

	function GST() {
		var a = document.getElementById("result") .value;
		const originalAmount = eval(a);
		const gstRate = 0.18;
		const gstAmount = originalAmount * gstRate;
		b = originalAmount + gstAmount;
		document.getElementById('result').value = b;
}



// // .........Third-Project...........form-validation.....................

function validateForm(event) {
	event.preventDefault(); // Prevents the form from submitting by default

	// Get form inputs
	var username = document.getElementById('username').value;
	var email = document.getElementById('email').value;
	var phone = document.getElementById('phone').value;
	var password = document.getElementById('password').value;
	var confirmPassword = document.getElementById('confirmPassword').value;

	// Reset error messages
	resetErrors();

	// Validate each field
	if (!isValidUsername(username)) {
	  document.getElementById('usernameError').innerText = 'Invalid username';
	  return;
	}

	if (!isValidEmail(email)) {
	  document.getElementById('emailError').innerText = 'Invalid email';
	  return;
	}

	if (!isValidPhone(phone)) {
	  document.getElementById('phoneError').innerText = 'Invalid phone number';
	  return;
	}

	if (!isValidPassword(password)) {
	  document.getElementById('passwordError').innerText = 'Invalid password';
	  return;
	}

	if (password !== confirmPassword) {
	  document.getElementById('confirmPasswordError').innerText = 'Passwords do not match';
	  return;
	}

	// If all validations pass, you can submit the form or perform other actions
	alert('Form submitted successfully!');
  }

  function isValidUsername(username) {
	// Add your username validation logic here
	var usernameRegex = /^[a-zA-Z0-9_]{4,}$/;
	return usernameRegex.test(username);
  }

  function isValidEmail(email) {
	// Add your email validation logic here
	var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
	
  }

  function isValidPhone(phone) {
	// Add your phone validation logic here
	
	var phoneRegex = /^\d{10}$/; // Assuming a 10-digit phone number
      return phoneRegex.test(phone);
  }

  function isValidPassword(password) {
	// Add your password validation logic here
	return (
        password.length >= 8 &&
        /[a-z]/.test(password) &&
        /[A-Z]/.test(password) &&
        /\d/.test(password)
      );
  }

  function resetErrors() {
	// Reset all error messages
	document.getElementById('usernameError').innerText = '';
	document.getElementById('emailError').innerText = '';
	document.getElementById('phoneError').innerText = '';
	document.getElementById('passwordError').innerText = '';
	document.getElementById('confirmPasswordError').innerText = '';
  }
  
// // /*.........fourt-Project...........form-validation.....................

// // */

//  first-watch
setInterval(
function (){
	
		const hourHand = document.getElementById("hourHand");
		const minuteHand = document.getElementById("minuteHand");
		const secondHand = document.getElementById("secondHand");
	
		const now = new Date();
		const hours = now.getHours() % 12; // Convert to 12-hour format
		const minutes = now.getMinutes();
		const seconds = now.getSeconds();
	
		const hourAngle = (360 / 12) * (hours + minutes / 60);
		const minuteAngle = (360 / 60) * (minutes + seconds / 60);
		const secondAngle = (360 / 60) * seconds;
	
		
		document.getElementById("hourhand").style.transform = "rotate(" + hourAngle + "deg)";
		document.getElementById("minutehand").style.transform = "rotate(" + minuteAngle + "deg)";
		document.getElementById("secondhand").style.transform = "rotate(" + secondAngle + "deg)";
	
	
},1000);

//second-watch
setInterval(
function (){
const time = document.getElementById("time");
now = new Date();
hour = now.getHours();
minute = now.getMinutes();
second = now.getSeconds();
 daynight = "AM"
if(hour >12){
	daynight = "PM"
	hour = hour - 12;
}
if (hour>10){
	hour =  hour - 10;
}
if (minute<10){
	minute = "0" + minute ;
}
if (second<10){
	second = "0" + second ;
}

time.innerHTML = hour + ":" + minute + ":" + second + ":" + daynight ;
},1000);


// // calender
function generateCalendar(year, month) {
	var container = document.getElementById('calendarContainer');
	container.innerHTML = ''; // Clear previous content

	var date = new Date(year, month - 1, 1);
	var daysInMonth = new Date(year, month, 0).getDate();

	// Create table element
	var table = document.createElement('table');

	// Create header row
	var headerRow = table.insertRow();
	var daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

	for (var i = 0; i < daysOfWeek.length; i++) {
	  var cell = headerRow.insertCell();
	  cell.innerHTML = daysOfWeek[i];
	}

	// Create days in the month
	var currentDay = 1;
	for (var i = 0; i < 6; i++) {
	  var row = table.insertRow();

	  for (var j = 0; j < 7; j++) {
		var cell = row.insertCell();

		if (i === 0 && j < date.getDay()) {
		  // Empty cells before the first day
		  cell.innerHTML = '';
		} else if (currentDay <= daysInMonth) {
		  cell.innerHTML = currentDay;
		  currentDay++;
		}
	  }
	}

	container.appendChild(table);
  }

  // Example: Generate calendar for September 2023
  generateCalendar(2023, 9);


// // <!-- .........fifth-Project...........unit-changer.....................

// // 	 -->

// // Length Converter


var Feet = document.getElementById("feet");
var Inch = document.getElementById("inch");
var Cm = document.getElementById("Cm");
var Meter = document.getElementById("Meter");
var Yard = document.getElementById("Yard");
var Km = document.getElementById("km");
var Miles = document.getElementById("Miles");
var Dm = document.getElementById("dm");

         
feet.addEventListener('input', function(){
var f = this.value;
var i = f*12;
var c = f*30.4800;
var m = f*0.3048006096;
var y = f*0.333334;
var k = f*0.0003048006;
var mi = f*0.00018939;
var d = f*3.048006096;


 if (!Number.isInteger (c)) {
	c = c.toFixed(5);
};
 if (!Number.isInteger (m)) {
	m = m.toFixed(5);
};
 if (!Number.isInteger (y)) {
	y = y.toFixed(5);
};
 if (!Number.isInteger (k)) {
	k = k.toFixed(5);
};
 if (!Number.isInteger (mi)) {
	mi = mi.toFixed(5);
};
 if (!Number.isInteger (d)) {
	d = d.toFixed(5);
};
 
Inch.value = i; 
Cm.value = c;
Meter.value = m;
Yard.value = y;
Km.value = k;
Miles.value = mi;
Dm.value = d;

});


Inch.addEventListener('input' , function(){
var i = this.value;
var f = i*0.0833333333;
var c = i*2.54;
var m = i*0.0254;
var y = i*0.0277777778;
var k = i*0.0000254;
var mi = i*0.0000157828;
var d = i*0.254;

 if (!Number.isInteger (f)) {
	f = f.toFixed(5);
};
 if (!Number.isInteger (c)) {
	c = c.toFixed(5);
};
 if (!Number.isInteger (m)) {
	m = m.toFixed(5);
};
 if (!Number.isInteger (y)) {
	y = y.toFixed(5);
};
 if (!Number.isInteger (k)) {
	k = k.toFixed(5);
};
 if (!Number.isInteger (mi)) {
	mi = mi.toFixed(5);
};
 if (!Number.isInteger (d)) {
	d = d.toFixed(5);
};
 
Feet.value = f; 
Cm.value = c;
Meter.value = m;
Yard.value = y;
Km.value = k;
Miles.value = mi;
Dm.value = d;

});


Cm.addEventListener('input' , function(){
var c = this.value;
var f = c*0.032808399;
var i = c*0.3937007874;
var m = c*0.01;
var y = c*0.010936133;
var k = c*0.00001;
var mi = c*0.0000062137;
var d = c*0.1;

 if (!Number.isInteger (f)) {
	f = f.toFixed(5);
};
 if (!Number.isInteger (i)) {
	i = i.toFixed(5);
};
 if (!Number.isInteger (m)) {
	m = m.toFixed(5);
};
 if (!Number.isInteger (y)) {
	y = y.toFixed(5);
};
 if (!Number.isInteger (k)) {
	k = k.toFixed(5);
};
 if (!Number.isInteger (mi)) {
	mi = mi.toFixed(5);
};
 if (!Number.isInteger (d)) {
	d = d.toFixed(5);
};
 
Feet.value = f; 
Inch.value = i;
Meter.value = m;
Yard.value = y;
Km.value = k;
Miles.value = mi;
Dm.value = d;

});
 

Meter.addEventListener('input' , function(){
var m = this.value;
var f = m*3.280839895;
var i = m*39.37;
var c = m*100;
var y = m*1.0936132983;
var k = m*0.001;
var mi = m*0.0006213712;
var d = m*10;

 if (!Number.isInteger (f)) {
	f = f.toFixed(5);
};
 if (!Number.isInteger (i)) {
	i = i.toFixed(5);
};
 if (!Number.isInteger (c)) {
	c = c.toFixed(5);
};
 if (!Number.isInteger (y)) {
	y = y.toFixed(5);
};
 if (!Number.isInteger (k)) {
	k = k.toFixed(5);
};
 if (!Number.isInteger (mi)) {
	mi = mi.toFixed(5);
};
 if (!Number.isInteger (d)) {
	d = d.toFixed(5);
};
 
Feet.value = f; 
Cm.value = c;
Inch.value = i;
Yard.value = y;
Km.value = k;
Miles.value = mi;
Dm.value = d;

});
    
Yard.addEventListener('input' , function(){
var y = this.value;
var f = y*3;
var i = y*36;
var c = y*91.44;
var m = y*0.9144;
var k = y*0.0009144;
var mi = y*0.0005681818;
var d = y*9.144;

 if (!Number.isInteger (f)) {
	f = f.toFixed(5);
};
 if (!Number.isInteger (i)) {
	i = i.toFixed(5);
};
 if (!Number.isInteger (c)) {
	c = c.toFixed(5);
};
 if (!Number.isInteger (m)) {
	m = m.toFixed(5);
};
 if (!Number.isInteger (k)) {
	k = k.toFixed(5);
};
 if (!Number.isInteger (mi)) {
	mi = mi.toFixed(5);
};
 if (!Number.isInteger (d)) {
	d = d.toFixed(5);
};
 
Feet.value = f; 
Inch.value = i;
Meter.value = m;
Cm.value = c;
Km.value = k;
Miles.value = mi;
Dm.value = d;

});
     
Km.addEventListener('input' , function(){
var k = this.value;
var f = k*3280.839895;
var i = k*39370.07874;
var c = k*100000;
var m = k*1000;
var y = k*1093.6132983;
var mi = k*0.6213711922;
var d = k*10000;

 if (!Number.isInteger (f)) {
	f = f.toFixed(5);
};
 if (!Number.isInteger (i)) {
	i = i.toFixed(5);
};
 if (!Number.isInteger (c)) {
	c = c.toFixed(5);
};
 if (!Number.isInteger (m)) {
	m = m.toFixed(5);
};
 if (!Number.isInteger (y)) {
	y = y.toFixed(5);
};
 if (!Number.isInteger (mi)) {
	mi = mi.toFixed(5);
};
 if (!Number.isInteger (d)) {
	d = d.toFixed(5);
};
 
Feet.value = f; 
Inch.value = i;
Meter.value = m;
Yard.value = y;
Cm.value = c;
Miles.value = mi;
Dm.value = d;

});

Miles.addEventListener('input' , function(){
var mi = this.value;
var f = mi*5280;
var i = mi*63360;
var c = mi*160934.4;
var m = mi*1609.344;
var y = mi*1760;
var k = mi*1609.344;
var d = mi*16093.44;

 if (!Number.isInteger (f)) {
	f = f.toFixed(5);
};
 if (!Number.isInteger (i)) {
	i = i.toFixed(5);
};
 if (!Number.isInteger (m)) {
	m = m.toFixed(5);
};
 if (!Number.isInteger (y)) {
	y = y.toFixed(5);
};
 if (!Number.isInteger (k)) {
	k = k.toFixed(5);
};
 if (!Number.isInteger (c)) {
	c = c.toFixed(5);
};
 if (!Number.isInteger (d)) {
	d = d.toFixed(5);
};
 
Feet.value = f; 
Cm.value = c;
Meter.value = m;
Yard.value = y;
Km.value = k;
Inch.value = i;
Dm.value = d;

});
          
Dm.addEventListener('input' , function(){
var d = this.value;
var f = d*0.3280839895;
var i = d*3.937007874;
var c = d*10;
var m = d*0.1;
var y = d*0.1093613298;
var k = d*0.0001;
var mi = d*0.0000621371;

 if (!Number.isInteger (f)) {
	f = f.toFixed(5);
};
 if (!Number.isInteger (i)) {
	i = i.toFixed(5);
};
 if (!Number.isInteger (c)) {
	c = c.toFixed(5);
};
 if (!Number.isInteger (m)) {
	m = m.toFixed(5);
};
 if (!Number.isInteger (y)) {
	y = y.toFixed(5);
};
 if (!Number.isInteger (mi)) {
	mi = mi.toFixed(5);
};
 if (!Number.isInteger (k)) {
	k = k.toFixed(5);
};
 
Feet.value = f; 
Cm.value = c;
Meter.value = m;
Yard.value = y;
Km.value = k;
Miles.value = mi;
Inch.value = i;

});









// Weight Converter
var Pounds = document.getElementById("Pounds");
var Kilograms = document.getElementById("Kg");
var Ounces = document.getElementById("Ounces");
var Grams = document.getElementById("Grams");
var Stones = document.getElementById("Stones");
var Ton = document.getElementById("ton");
Pounds.addEventListener('input', function(){
let p = this.value;
let kg = p*0.45359237;
let o = p*16;
let g = p*453.59237;
let s = p*0.08;
let t = p*0.000454;

if (!Number.isInteger (t)) {
	t = t.toFixed(5);
};
if (!Number.isInteger (g)) {
	g = g.toFixed(5);
};
 if (!Number.isInteger (o)) {
	o = o.toFixed(5);
};
if (!Number.isInteger (s)) {
	s = s.toFixed(5);
};
if (!Number.isInteger (kg)) {
	kg = kg.toFixed(5);
};

Kilograms.value = kg;
Ounces.value = o;
Grams.value = g;
Stones.value = s;
Ton.value = t;
});

Kilograms.addEventListener('input', function(){
let kg = this.value;
let p = kg*2.2046226;
let o = kg*35.273962;
let g = kg*1000;
let s = kg*0.15747304;
let t = kg*0.0011023113;

if (!Number.isInteger (p)) {
	p = p.toFixed(5);
};
if (!Number.isInteger (o)) {
	o = o.toFixed(5);
};
 if (!Number.isInteger (g)) {
	g = g.toFixed(5);
};
if (!Number.isInteger (s)) {
	s = s.toFixed(5);
};
if (!Number.isInteger (t)) {
	t = t.toFixed(5);
};

Pounds.value = p;
Ounces.value = o;
Grams.value = g;
Stones.value = s;
Ton.value = t;

});

Ounces.addEventListener('input', function(){
let o = this.value;
let p = o*0.0625;
let kg = o*0.028349523;
let g = o*28.349523;
let s = o*0.0044642857;
let t = o*0.00003125;

if (!Number.isInteger (p)) {
	p = p.toFixed(5);
};
if (!Number.isInteger (kg)) {
	kg = kg.toFixed(5);
};
 if (!Number.isInteger (g)) {
	g = g.toFixed(5);
};
if (!Number.isInteger (s)) {
	s = s.toFixed(5);
};
if (!Number.isInteger (t)) {
	t = t.toFixed(5);
};

Pounds.value = p;
Kilograms.value = kg;
Grams.value = g;
Stones.value = s;
Ton.value = t;

});
Grams.addEventListener('input', function(){
let g = this.value;
let p = g*0.0022046226;
let kg = g*0.001;
let o = g*0.035273962;
let s = g*0.00015747304;
let t = g*1.10231;

if (!Number.isInteger (p)) {
	p = p.toFixed(7);
};
if (!Number.isInteger (kg)) {
	kg = kg.toFixed(3);
};
 if (!Number.isInteger (o)) {
	o = o.toFixed(7);
};
if (!Number.isInteger (s)) {
	s = s.toFixed(6);
};
if (!Number.isInteger (t)) {
	t = t.toFixed(8);
};

Pounds.value = p;
Kilograms.value = kg;
Ounces.value = o;
Stones.value = s;
Ton.value = t;

});
Stones.addEventListener('input', function(){
let s = this.value;
let p = s*14;
let kg = s*6.3502932;
let o = s*224;
let g = s*6350.3;
let t = s*0.0063503;

if (!Number.isInteger (p)) {
	p = p.toFixed(5);
};
if (!Number.isInteger (kg)) {
	kg = kg.toFixed(5);
};
 if (!Number.isInteger (g)) {
	g = g.toFixed(5);
};
if (!Number.isInteger (o)) {
	o = o.toFixed(5);
};
if (!Number.isInteger (t)) {
	t = t.toFixed(5);
};

Pounds.value = p;
Kilograms.value = kg;
Grams.value = g;
Ounces.value = o;
Ton.value = t;

});


Ton.addEventListener('input', function(){
let t = this.value;
let p = t*2204.62;
let kg = t*1000;
let g = t*1000000;
let s = t*157.47;
let o = t*35273.94;

if (!Number.isInteger (p)) {
	p = p.toFixed(5);
};
if (!Number.isInteger (kg)) {
	kg = kg.toFixed(5);
};
 if (!Number.isInteger (g)) {
	g = g.toFixed(5);
};
if (!Number.isInteger (s)) {
	s = s.toFixed(5);
};
if (!Number.isInteger (o)) {
	o = o.toFixed(5);
};

Pounds.value = p;
Kilograms.value = kg;
Grams.value = g;
Stones.value = s;
Ounces.value = o;

});





// Temperature Converter

var Fahrenheit = document.getElementById("Fahrenheit");
var Celsius = document.getElementById("Celsius");
Fahrenheit.addEventListener('input', function(){
var f = this.value;
var c = (f-32) / 1.8;

    
if (!Number.isInteger (c)) {
	c = c.toFixed(4);
};

Celsius.value = c;

});

Celsius.addEventListener('input' , function(){

var c = this.value;
var f = (c * 1.8)+32 ;

if (!Number.isInteger (f)) {
	f = f.toFixed(4);
};


Fahrenheit.value = f; 

});




// Speed Converter

var MPH = document.getElementById("MPH");
var KPH = document.getElementById("KPH");
MPH.addEventListener('input', function(){
var m = this.value;
var k = m/1000;
 KPH.value = k; 

});

KPH.addEventListener('input' , function(){

var k = this.value;
var m = k*1000;
MPH.value = m; 

});


// Time Converter

var Hour = document.getElementById("Hour");
var Minute = document.getElementById("Minute");
var Second = document.getElementById("Second");
var Millisecond = document.getElementById("millisecond");

Hour.addEventListener('input', function(){
var h = this.value;
var m = h*60;
var s = m*60;
var ml = s*1000;
 Minute.value = m;
 Second.value = s;
 Millisecond.value = ml;
});
Minute.addEventListener('input' , function(){
var m = this.value;
var h = m/60;
var s = m*60;
 var ml = s*1000;

 if (!Number.isInteger (h)) {
	h = h.toFixed(7);
};
Hour.value = h;
Second.value = s;
Millisecond.value = ml;
});

Second.addEventListener('input' , function(){

var s = this.value;
var h = s/3600;
var m = s/60;
 var ml = s*1000;


if (!Number.isInteger (h)) {
	h = h.toFixed(7);
};
if (!Number.isInteger (m)) {
	m = m.toFixed(7);
};
Hour.value = h;
Minute.value = m;
Millisecond.value = ml;
});

Millisecond.addEventListener('input' , function(){
var ml = this.value;
var h = ml/3600000;
var m = ml/60;
 var s = ml/1000;

 if (!Number.isInteger (h)) {
	h = h.toFixed(7);
};
 if (!Number.isInteger (m)) {
	m = m.toFixed(7);
};
 if (!Number.isInteger (s)) {
	s = s.toFixed(7);
};
Hour.value = h;
Second.value = s;
Minute.value = m;
});


