			function you() {
				var date = document.getElementById("date").value;
				var pass = document.getElementById("pass").value;
				var landing = document.getElementById("landing").value;
				var depart = document.getElementById("depart").value;
				var trip = document.getElementById("trip").value;
				var land = document.getElementById("land").value;
				console.log(land)
				if (date == "") {
					alert("No Departure date selected");
					return;
				}
				else if (pass == "") {
					alert("No Passenger selected");
					return;
				}
				else if ( depart == landing ) {
					alert(" To and From are the same");
					return;
				}
				else if (trip == "Round Trip" && land == "") {
					alert("No Return data selected");
					return;
				}
				else if(landing == "PIE" && depart == "TPA") {
					alert("No flights avaliable");
					return;
				}
				else if(landing == "TPA" && depart == "PIE") {
					alert("No flights avaliable");
					return;
				}
				
				document.getElementById("info").style.borderBottom = "1px solid black";
			
				var depart = document.getElementById("depart").value;
				document.getElementById("demo").innerHTML = depart;
				
				var landing = document.getElementById("landing").value;
				document.getElementById("demo2").innerHTML = landing;
				
				document.getElementById("times").style.visibility = "visible";
				
				
				var dick = document.getElementById("depart").value;
				var n = new Date();
				var hour = n.getHours();
				var min = n.getMinutes();
				
				if( hour < 12) {
					var endingt = "AM";
				}
				else if(hour > 12) {
					var endingt = "PM";
					hour9 = hour - 12;
				}
				
				if(dick == "TPA"){
					var hour1 = hour + 3;
					var hour2 = hour + 4;
					document.getElementById("dtime1").innerHTML = hour9 + ":" + "00" + endingt ;
					var endingt = killme(hour1);
					var hour10 = detected(hour1);
					document.getElementById("dtime2").innerHTML = hour10 + ":" + "00" + endingt;
					var endingt = killme(hour2);
					var hour20 = detected(hour2);
					document.getElementById("dtime3").innerHTML = hour20 + ":" + "00" + endingt;
					
					if(landing == "NYC") {
						var hour0 = hour + 3;
						var endingt = killme(hour0);
						var hour0 = detected(hour0);
						document.getElementById("rtime1").innerHTML = hour0 + ":" + "00" + endingt;
						var hour1 = hour1 + 3;
						var endingt = killme(hour1);
						var hour1 = detected(hour1);
						document.getElementById("rtime2").innerHTML = hour1 + ":" + "00" + endingt;
						var hour2 = hour2 + 3;
						var endingt = killme(hour2);
						var hour2 = detected(hour2);
						document.getElementById("rtime3").innerHTML = hour2 + ":" + "00" + endingt;
						var x = document.getElementsByClassName("sprice");
						var i;
						for (i = 0; i < x.length; i++) {
						x[i].innerHTML = "$200";}
						var x = document.getElementsByClassName("fprice");
						var i;
						for (i = 0; i < x.length; i++) {
						x[i].innerHTML = "$300";}
					}
					else if(landing == "CMH") {
						var hour0 = hour + 3;
						var endingt = killme(hour0);
						var hour0 = detected(hour0);
						document.getElementById("rtime1").innerHTML = hour0 + ":" + "00" + endingt;
						var hour1 = hour1 + 3;
						var endingt = killme(hour1);
						var hour1 = detected(hour1);
						document.getElementById("rtime2").innerHTML = hour1 + ":" + "00" + endingt;
						var hour2 = hour2 + 3;
						var endingt = killme(hour2);
						var hour2 = detected(hour2);
						document.getElementById("rtime3").innerHTML = hour2 + ":" + "00" + endingt;
						var x = document.getElementsByClassName("sprice");
						var i;
						for (i = 0; i < x.length; i++) {
						x[i].innerHTML = "$200";}
						var x = document.getElementsByClassName("fprice");
						var i;
						for (i = 0; i < x.length; i++) {
						x[i].innerHTML = "$300";}
					}
				}
				else if(dick == "NYC"){
					var hour1 = hour + 2;
					var hour2 = hour + 6;
					document.getElementById("dtime1").innerHTML = hour9 + ":" + "00" + endingt ;
					var endingt = killme(hour1);
					var hour10 = detected(hour1);
					document.getElementById("dtime2").innerHTML = hour10 + ":" + "00" + endingt;
					var endingt = killme(hour2);
					var hour20 = detected(hour2);
					document.getElementById("dtime3").innerHTML = hour20 + ":" + "00" + endingt;
					if(landing == "TPA"){
						var hour0 = hour + 3;
						var endingt = killme(hour0);
						var hour0 = detected(hour0);
						document.getElementById("rtime1").innerHTML = hour0 + ":" + "00" + endingt;
						var hour1 = hour1 + 3;
						var endingt = killme(hour1);
						var hour1 = detected(hour1);
						document.getElementById("rtime2").innerHTML = hour1 + ":" + "00" + endingt;
						var hour2 = hour2 + 3;
						var endingt = killme(hour2);
						var hour2 = detected(hour2);
						document.getElementById("rtime3").innerHTML = hour2 + ":" + "00" + endingt;
						var x = document.getElementsByClassName("sprice");
						var i;
						for (i = 0; i < x.length; i++) {
						x[i].innerHTML = "$200";}
						var x = document.getElementsByClassName("fprice");
						var i;
						for (i = 0; i < x.length; i++) {
						x[i].innerHTML = "$300";}
					}
					if(landing == "PIE"){
						var hour0 = hour + 3;
						var endingt = killme(hour0);
						var hour0 = detected(hour0);
						document.getElementById("rtime1").innerHTML = hour0 + ":" + "00" + endingt;
						var hour1 = hour1 + 3;
						var endingt = killme(hour1);
						var hour1 = detected(hour1);
						document.getElementById("rtime2").innerHTML = hour1 + ":" + "00" + endingt;
						var hour2 = hour2 + 3;
						var endingt = killme(hour2);
						var hour2 = detected(hour2);
						document.getElementById("rtime3").innerHTML = hour2 + ":" + "00" + endingt;
						var x = document.getElementsByClassName("sprice");
						var i;
						for (i = 0; i < x.length; i++) {
						x[i].innerHTML = "$200";}
						var x = document.getElementsByClassName("fprice");
						var i;
						for (i = 0; i < x.length; i++) {
						x[i].innerHTML = "$300";}
					}
					if(landing == "CHM"){
						var hour0 = hour + 2;
						var endingt = killme(hour0);
						var hour0 = detected(hour0);
						document.getElementById("rtime1").innerHTML = hour0 + ":" + "00" + endingt;
						var hour1 = hour1 + 2;
						var endingt = killme(hour1);
						var hour1 = detected(hour1);
						document.getElementById("rtime2").innerHTML = hour1 + ":" + "00" + endingt;
						var hour2 = hour2 + 2;
						var endingt = killme(hour2);
						var hour2 = detected(hour2);
						document.getElementById("rtime3").innerHTML = hour2 + ":" + "00" + endingt;
						var x = document.getElementsByClassName("sprice");
						var i;
						for (i = 0; i < x.length; i++) {
						x[i].innerHTML = "$150";}
						var x = document.getElementsByClassName("fprice");
						var i;
						for (i = 0; i < x.length; i++) {
						x[i].innerHTML = "$250";}
					}
				}
				else if(dick == "PIE"){
					var hour1 = hour + 1;
					var hour2 = hour + 8;
					document.getElementById("dtime1").innerHTML = hour9 + ":" + "00" + endingt ;
					var endingt = killme(hour1);
					var hour10 = detected(hour1);
					document.getElementById("dtime2").innerHTML = hour10 + ":" + "00" + endingt;
					var endingt = killme(hour2);
					var hour20 = detected(hour2);
					document.getElementById("dtime3").innerHTML = hour20 + ":" + "00" + endingt;
					if(landing == "NYC"){
						var hour0 = hour + 3;
						var endingt = killme(hour0);
						var hour0 = detected(hour0);
						document.getElementById("rtime1").innerHTML = hour0 + ":" + "00" + endingt;
						var hour1 = hour1 + 3;
						var endingt = killme(hour1);
						var hour1 = detected(hour1);
						document.getElementById("rtime2").innerHTML = hour1 + ":" + "00" + endingt;
						var hour2 = hour2 + 3;
						var endingt = killme(hour2);
						var hour2 = detected(hour2);
						document.getElementById("rtime3").innerHTML = hour2 + ":" + "00" + endingt;
						var x = document.getElementsByClassName("sprice");
						var i;
						for (i = 0; i < x.length; i++) {
						x[i].innerHTML = "$250";}
						var x = document.getElementsByClassName("fprice");
						var i;
						for (i = 0; i < x.length; i++) {
						x[i].innerHTML = "$350";}
					}
					if(landing == "CHM"){
						var hour0 = hour + 3;
						var endingt = killme(hour0);
						var hour0 = detected(hour0);
						document.getElementById("rtime1").innerHTML = hour0 + ":" + "00" + endingt;
						var hour1 = hour1 + 3;
						var endingt = killme(hour1);
						var hour1 = detected(hour1);
						document.getElementById("rtime2").innerHTML = hour1 + ":" + "00" + endingt;
						var hour2 = hour2 + 3;
						var endingt = killme(hour2);
						var hour2 = detected(hour2);
						document.getElementById("rtime3").innerHTML = hour2 + ":" + "00" + endingt;
						var x = document.getElementsByClassName("sprice");
						var i;
						for (i = 0; i < x.length; i++) {
						x[i].innerHTML = "$250";}
						var x = document.getElementsByClassName("fprice");
						var i;
						for (i = 0; i < x.length; i++) {
						x[i].innerHTML = "$350";}
					}
				}
				else if(dick == "CMH"){
					var hour1 = hour + 1;
					var hour2 = hour + 8;
					document.getElementById("dtime1").innerHTML = hour9 + ":" + "00" + endingt ;
					var endingt = killme(hour1);
					var hour10 = detected(hour1);
					document.getElementById("dtime2").innerHTML = hour10 + ":" + "00" + endingt;
					var endingt = killme(hour2);
					var hour20 = detected(hour2);
					document.getElementById("dtime3").innerHTML = hour20 + ":" + "00" + endingt;
					if(landing == "TPA"){
						var hour0 = hour + 3;
						var endingt = killme(hour0);
						var hour0 = detected(hour0);
						document.getElementById("rtime1").innerHTML = hour0 + ":" + "00" + endingt;
						var hour1 = hour1 + 3;
						var endingt = killme(hour1);
						var hour1 = detected(hour1);
						document.getElementById("rtime2").innerHTML = hour1 + ":" + "00" + endingt;
						var hour2 = hour2 + 3;
						var endingt = killme(hour2);
						var hour2 = detected(hour2);
						document.getElementById("rtime3").innerHTML = hour2 + ":" + "00" + endingt;
						var x = document.getElementsByClassName("sprice");
						var i;
						for (i = 0; i < x.length; i++) {
						x[i].innerHTML = "$250";}
						var x = document.getElementsByClassName("fprice");
						var i;
						for (i = 0; i < x.length; i++) {
						x[i].innerHTML = "$350";}
						
					}
					if(landing == "PIE"){
						var hour0 = hour + 3;
						var endingt = killme(hour0);
						var hour0 = detected(hour0);
						document.getElementById("rtime1").innerHTML = hour0 + ":" + "00" + endingt;
						var hour1 = hour1 + 3;
						var endingt = killme(hour1);
						var hour1 = detected(hour1);
						document.getElementById("rtime2").innerHTML = hour1 + ":" + "00" + endingt;
						var hour2 = hour2 + 3;
						var endingt = killme(hour2);
						var hour2 = detected(hour2);
						document.getElementById("rtime3").innerHTML = hour2 + ":" + "00" + endingt;
						var x = document.getElementsByClassName("sprice");
						var i;
						for (i = 0; i < x.length; i++) {
						x[i].innerHTML = "$250";}
						var x = document.getElementsByClassName("fprice");
						var i;
						for (i = 0; i < x.length; i++) {
						x[i].innerHTML = "$350";}
					}
					if(landing == "NYC"){
						var hour0 = hour + 2;
						var endingt = killme(hour0);
						var hour0 = detected(hour0);
						document.getElementById("rtime1").innerHTML = hour0 + ":" + "00" + endingt;
						var hour1 = hour1 + 2;
						var endingt = killme(hour1);
						var hour1 = detected(hour1);
						document.getElementById("rtime2").innerHTML = hour1 + ":" + "00" + endingt;
						var hour2 = hour2 + 2;
						var endingt = killme(hour2);
						var hour2 = detected(hour2);
						document.getElementById("rtime3").innerHTML = hour2 + ":" + "00" + endingt;
						var x = document.getElementsByClassName("sprice");
						var i;
						for (i = 0; i < x.length; i++) {
						x[i].innerHTML = "$150";}
						var x = document.getElementsByClassName("fprice");
						var i;
						for (i = 0; i < x.length; i++) {
						x[i].innerHTML = "$250";}
					}
				}
			}
			function tripin() {
				 var f = document.getElementById("trip").value;
				 if(f == "One Way") {
					document.getElementById("return").style.visibility = "hidden";
				
					
				}
				else {
					document.getElementById("return").style.visibility = "visible";
			
					
				}
				
			}
			
			function a1() {
			var depart = document.getElementById("depart").value;
				document.getElementById("fuge").value = depart;
			var landing = document.getElementById("landing").value;
				document.getElementById("fuge2").value = landing;
			var trip = document.getElementById("trip").value;
				document.getElementById("fuge3").value = trip;
			var data = document.getElementById("date").value;
				document.getElementById("fuge4").value = data;
			var land = document.getElementById("land").value;
				document.getElementById("fuge5").value = land;
			var pass = document.getElementById("pass").value;
				document.getElementById("fuge6").value = pass;
				document.getElementById("fuge7").value = "standard";
				document.getElementById("form_view").style.visibility = "visible";
				document.getElementById("times").style.visibility = "hidden";
			}
		
			function a2() {
			var depart = document.getElementById("depart").value;
				document.getElementById("fuge").value = depart;
			var landing = document.getElementById("landing").value;
				document.getElementById("fuge2").value = landing;
			var trip = document.getElementById("trip").value;
				document.getElementById("fuge3").value = trip;
			var data = document.getElementById("date").value;
				document.getElementById("fuge4").value = data;
			var land = document.getElementById("land").value;
				document.getElementById("fuge5").value = land;
			var pass = document.getElementById("pass").value;
				document.getElementById("fuge6").value = pass;
				document.getElementById("fuge7").value = "First_class";
				document.getElementById("form_view").style.visibility = "visible";
				document.getElementById("times").style.visibility = "hidden";
			}

			function detected (vare) {
				 if(vare > 12) {
					return vare - 12;
				}
				else if(vare <= 12 ) {
					return vare;
				}
			}
			
			function killme (now) {
				if( now <= 12 ) {
					return "AM";
				}
				else if(now > 12) {
					return "PM";
				}
			}
			
			function clickme() {
				document.getElementById("form1").submit();
			}