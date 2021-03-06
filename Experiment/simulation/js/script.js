        /**
 * Virtual Labs 
 *
 * @author Shubham Kumar | shubham.kumar10102@gmail.com
 */
        var glycerinKValue= "0.285 W/(m⋅&#176C)";
        var hotplate="55.1 &#176C";
        var gcoldplate="19.7 &#176C";        
        var freshwaterKValue="0.609 W/(m⋅&#176C)";
        var fcoldplate="38.5 &#176C";
        var mercuryKValue="8.4 W/(m⋅&#176C)";
        var mcoldplate="53.9 &#176C";     
        var selectedsample;
        var diameter="82.5 mm";
        var thickness="18 mm" ;
        var waterOn=true;
        var machineOn=true;
        var resultShown=false;

        var useranswer1="";
        var useranswer2="";


        var simulationseen=false;



        // code for voltage slider 
        function rangeSlide(value){
            document.getElementById('rangeValue').innerHTML=value;
            document.getElementById('current').innerHTML=Math.round(12/value*100)/100;};

        // code for updating current value in real time
        function currentslide(value){
          document.getElementById('current').innerHTML=value;
        };

        // code for current value
        function currentvalue(){
            var value=document.getElementById('rangeValue').innerHTML;
            var Current=Math.round(12/value*100)/100;
            document.getElementById("current").innerHTML =Current;
        };


        // code to return k value of selected sample

        function finalresult(){
            if (selectedsample=="glycerin") {
                // document.getElementById("demo1").innerHTML =glycerinKValue;
                document.getElementById("demo2").innerHTML=hotplate;
                document.getElementById('demo3').innerHTML=gcoldplate;
                document.getElementById('demo4').innerHTML=thickness;
                document.getElementById('demo5').innerHTML=diameter;  
                resultShown=true; 
                simulationseen=true;
            } else if (selectedsample=="freshwater") {
                // document.getElementById("demo1").innerHTML=freshwaterKValue;
                document.getElementById("demo2").innerHTML=hotplate;
                document.getElementById('demo3').innerHTML=fcoldplate;
                document.getElementById('demo4').innerHTML=thickness;
                document.getElementById('demo5').innerHTML=diameter;  
                resultShown=true; 
                simulationseen=true;
            } else {
                // document.getElementById("demo1").innerHTML =mercuryKValue;
                document.getElementById("demo2").innerHTML=hotplate;
                document.getElementById('demo3').innerHTML=mcoldplate;
                document.getElementById('demo4').innerHTML=thickness;
                document.getElementById('demo5').innerHTML=diameter; 
                resultShown=true;  
                simulationseen=true;
            } ; 
            };


            // code for check boxes

        function displayRadioValue() {
            var selectedradiovalue = document.getElementsByName('sample');   
            for(i = 0; i < selectedradiovalue.length; i++) { 
                if(selectedradiovalue[i].checked){
                  selectedsample=selectedradiovalue[i].value;
                };
            };
            if(waterOn==true && machineOn==true){
                myFunction();
                currentvalue();
                carousel();
                showresults();
                


            } else{
                alert('Please turn on machine/water supply');
            }
        };
        //code for simulator design

        var myIndex = 0;
        function carousel() {
        var i;
        var x;
        if(selectedsample=="glycerin"){
         x = document.getElementsByClassName("mySlides");
        } else if(selectedsample=="freshwater"){
            x = document.getElementsByClassName("mySlides1");
        } else{
            x = document.getElementsByClassName("mySlides2");
        };  
        for (i = 0; i < x.length; i++) {
         x[i].style.display = "none";  
         };
        myIndex++;
        if (myIndex > x.length){
            myIndex = x.length};
        x[myIndex-1].style.display = "block";  
        setTimeout(carousel, 3000); // Change image every 3 seconds
        };

        // check water checkbox is checked or not 

        function watercheck(){
            var watercheckBox = document.getElementById("waterCheckBox");
            if(watercheckBox.checked== true){
                waterOn=true;
            } else{
                waterOn=false;
            }
        };

        // check whether machine checkbox is checked or not

        function machinecheck(){
            var machinecheckBox = document.getElementById("machineCheckBox");
            if(machinecheckBox.checked== true){
                machineOn=true;
            } else{
                machineOn=false;
            }
        };

        // display graph on click
        function displaygraph(){
            setTimeout(delaygraph1sec,1000);
        };

        function delaygraph1sec(){
            document.getElementById("graph").src="images/Graph.png"
        };




        // show final results
        function showresults(){
            setTimeout(delay16sec,16000);
        };

        function delay16sec(){
            finalresult();
        };

        // verify function

        function verify(){
            if(resultShown==true ){
                if (selectedsample=="glycerin") {
                    document.getElementById("demo1").innerHTML =glycerinKValue;
                } else if (selectedsample=="freshwater") {
                    document.getElementById("demo1").innerHTML=freshwaterKValue;
                } else {
                    document.getElementById("demo1").innerHTML =mercuryKValue;
                }
            } else{
                document.getElementById("demo1").innerHTML ="N.A";
            }
            if(document.getElementById("demo1").innerHTML=="N.A"){
                alert("Please Watch The Simulation First 👻")
            }
            else{
                document.getElementById("button1").style,disabled=true;
                document.getElementById("button1").style.background="#cccccc";
            }


            
        }

        //code to disable button

        function myFunction() {
            document.getElementById("btndisable").disabled = true;
            document.getElementById("btndisable").style.background= "#cccccc";
          };

        // code for quiz verification

        function submitquiz(){
            var selectedanswer1 = document.getElementsByName('optradio');
            for(i = 0; i < selectedanswer1.length; i++) { 
                if(selectedanswer1[i].checked){
                  useranswer1=selectedanswer1[i].value;
                };
            };
            var selectedanswer2 = document.getElementsByName('optradio1');
            for(i = 0; i < selectedanswer2.length; i++) { 
                if(selectedanswer2[i].checked){
                  useranswer2=selectedanswer2[i].value;
                };
            };

            if(simulationseen==true){
                if(useranswer1=="1option4" && useranswer2=="2option3" ){
                    document.getElementById('button2').disabled=true;
                    document.getElementById('button2').style.background="#cccccc"
                    document.getElementById('confirmation').innerHTML="Correct 👍 ";
                    displaygraph();
               }  
            else{
                alert("Wrong answer , please try again ! 🎯")
               
            };
            }else{
                alert("Please watch the simulation first");
            }

           
        }


        function performanotherexperient(){
            window.location.reload();
            window.scrollTo(0, 0);
        }

        function round(value, decimals) {
            return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
          }



        function  calculateresult(){

            if(simulationseen==true){
            var a=document.getElementById('hottemp').value;
            var b=document.getElementById('coldtemp').value;
            var c=document.getElementById('thickness').value;
            var d=document.getElementById('radius').value;
            var numerator=(12*c)/1000;
            console.log(numerator);
            var area=3.14*d*d;
            console.log(area);
            var denominator=area*(a-b);
            console.log(denominator);
            var kvalue=(numerator/denominator)*1000000;
            var kvaluecalculated=round(kvalue,4);
            console.log(kvalue);
            document.getElementById("valuethermal").innerHTML=kvaluecalculated+" W/(m⋅&#176C)";
        
            }else{
                alert("Please watch the simulator first");
            }

            

        }
        








