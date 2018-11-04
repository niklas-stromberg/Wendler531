$( document ).ready(function() {
	
	var url = window.location + "getuser/" + $("#username").val();
	
	$('.nav-tabs a').click(function(){
        fillWeek1();
        fillWeek2();
        fillWeek3();
    })


    // Week 1 -----------------
        function fillWeek1()
        {
        $.ajax({
            			type : "GET",
            			url : url,
            			success: function(result){
            			if(result.status == "Done"){
            			var table = $("#tableWeek1 tbody");
            			table.empty();
            			var user = result.data;

            			//Day 1
            			//table.append(" <tr><th>"+user.startdate+"</th></tr>");
                        table.append("<tr><td>"+'Military Press (warm-up)'+"</td><td>"+round(user.militarypress*0.4)+" x 5</td>   <td>"+round(user.militarypress*0.5)+" x 5</td> <td>"+round(user.militarypress*0.6)+" x 3</td></tr>");
            			table.append("<tr><td>"+'Military Press'+"</td><td>"+round(user.militarypress*0.65)+" x 5</td>   <td>"+round(user.militarypress*0.75)+" x 5</td> <td>"+round(user.militarypress*0.85)+"<b> x 5+</b></td></tr>");
                        table.append("<tr><td>"+'Close grip bench press'+"</td><td>"+round(user.closegripbenchpress*0.7)+" x 10</td>   <td>"+round(user.closegripbenchpress*0.7)+" x 10</td> <td>"+round(user.closegripbenchpress*0.7)+" x 10</td></tr>");

                        table.append("<tr><td>"+'Pullup/Row'+"</td><td>x 8-20</td>   <td> x 8-20</td> <td> x 8-20</td></tr>");
                        table.append("<tr><td>"+'Tricep'+"</td><td>x 8-20</td>   <td> x 8-20</td> <td> x 8-20</td></tr>");
                        table.append("<tr><td>"+'Curl'+"</td><td>x 8-20</td>   <td> x 8-20</td> <td> x 8-20</td></tr>");
                        table.append("<tr><td>"+'Lateral raises'+"</td><td>x 8-20</td>   <td> x 8-20</td> <td> x 8-20</td></tr>");
                        table.append("<br><br>");

                        //Day 2
                        table.append("<tr><td>"+'<b>Exercise</b>'+"</td><td><b>Set 1</b></td>   <td> <b>Set 2</b></td> <td><b>Set 3</b></td></tr>");
                        table.append("<tr><td>"+'Deadlift (warm-up)'+"</td><td>"+round(user.deadlift*0.4)+" x 5</td>   <td>"+round(user.deadlift*0.5)+" x 5</td> <td>"+round(user.deadlift*0.6)+" x 3</td></tr>");
                                			table.append("<tr><td>"+'Deadlift'+"</td><td>"+round(user.deadlift*0.65)+" x 5</td>   <td>"+round(user.deadlift*0.75)+" x 5</td> <td>"+round(user.deadlift*0.85)+"<b> x 5+</b></td></tr>");
                                            table.append("<tr><td>"+'Front Squat'+"</td><td>"+round(user.frontsquat*0.7)+" x 10</td>   <td>"+round(user.frontsquat*0.7)+" x 10</td> <td>"+round(user.frontsquat*0.7)+" x 10</td></tr>");

                                            table.append("<tr><td>"+'Core/Abs'+"</td><td>x 8-20</td>   <td> x 8-20</td> <td> x 8-20</td></tr>");
                                            table.append("<tr><td>"+'Pullup'+"</td><td>x 8-20</td>   <td></td> <td></td></tr>");
                                            table.append("<tr><td>"+'Dips/Pushup'+"</td><td>x 8-20</td>   <td></td> <td></td></tr>");
                                            table.append("<br><br>");


                        //Day 3
                        table.append("<tr><td>"+'<b>Exercise</b>'+"</td><td><b>Set 1</b></td>   <td> <b>Set 2</b></td> <td><b>Set 3</b></td></tr>");
                        table.append("<tr><td>"+'Bench Press (warm-up)'+"</td><td>"+round(user.benchpress*0.4)+" x 5</td>   <td>"+round(user.benchpress*0.5)+" x 5</td> <td>"+round(user.benchpress*0.6)+" x 3</td></tr>");
                        table.append("<tr><td>"+'Bench Press'+"</td><td>"+round(user.benchpress*0.65)+" x 5</td>   <td>"+round(user.benchpress*0.75)+" x 5</td> <td>"+round(user.benchpress*0.85)+"<b> x 5+</b></td></tr>");
                        table.append("<tr><td>"+'Incline bench press'+"</td><td>"+round(user.inclinebenchpress*0.7)+" x 10</td>   <td>"+round(user.inclinebenchpress*0.7)+" x 10</td> <td>"+round(user.inclinebenchpress*0.7)+" x 10</td></tr>");

                        table.append("<tr><td>"+'Pullup/Row'+"</td><td>x 8-20</td>   <td> x 8-20</td> <td> x 8-20</td></tr>");
                        table.append("<tr><td>"+'Tricep'+"</td><td>x 8-20</td>   <td> x 8-20</td> <td> x 8-20</td></tr>");
                        table.append("<tr><td>"+'Curl'+"</td><td>x 8-20</td>   <td> x 8-20</td> <td> x 8-20</td></tr>");
                        table.append("<tr><td>"+'Lateral raises'+"</td><td>x 8-20</td>   <td> x 8-20</td> <td> x 8-20</td></tr>");
                        table.append("<br><br>");

                        //Day 4
                        table.append("<tr><td>"+'<b>Exercise</b>'+"</td><td><b>Set 1</b></td>   <td> <b>Set 2</b></td> <td><b>Set 3</b></td></tr>");
                        table.append("<tr><td>"+'Squat (warm-up)'+"</td><td>"+round(user.squat*0.4)+" x 5</td>   <td>"+round(user.squat*0.5)+" x 5</td> <td>"+round(user.squat*0.6)+" x 3</td></tr>");
                        table.append("<tr><td>"+'Squat'+"</td><td>"+round(user.squat*0.65)+" x 5</td>   <td>"+round(user.squat*0.75)+" x 5</td> <td>"+round(user.squat*0.85)+"<b> x 5+</b></td></tr>");
                                            table.append("<tr><td>"+'Stiff leg deadlift'+"</td><td>"+round(user.stifflegdeadlift*0.7)+" x 10</td>   <td>"+round(user.stifflegdeadlift*0.7)+" x 10</td> <td>"+round(user.stifflegdeadlift*0.7)+" x 10</td></tr>");

                         table.append("<tr><td>"+'Core/Abs'+"</td><td>x 8-20</td>   <td> x 8-20</td> <td> x 8-20</td></tr>");
                                                                 table.append("<tr><td>"+'Pullup'+"</td><td>x 8-20</td>   <td></td> <td></td></tr>");
                                                                 table.append("<tr><td>"+'Dips/Pushup'+"</td><td>x 8-20</td>   <td></td> <td></td></tr>");
                                                                 table.append("<br><br>");
                         table.append("<br><br>");
            			}
            			}
        });
        }

        // Week 2 -----------------
            function fillWeek2()
            {
            $.ajax({
                			type : "GET",
                			url : url,
                			success: function(result){
                			if(result.status == "Done"){
                			var table = $("#tableWeek2 tbody");
                			table.empty();
                            var user = result.data;
                                                    //Day 1
                                                                        table.append("<tr><td>"+'Military Press (warm-up)'+"</td><td>"+round(user.militarypress*0.4)+" x 5</td>   <td>"+round(user.militarypress*0.5)+" x 5</td> <td>"+round(user.militarypress*0.6)+" x 3</td></tr>");
                                                            			table.append("<tr><td>"+'Military Press'+"</td><td>"+round(user.militarypress*0.7)+" x 3</td>   <td>"+round(user.militarypress*0.8)+" x 3</td> <td>"+round(user.militarypress*0.9)+"<b> x 3+</b></td></tr>");
                                                                        table.append("<tr><td>"+'Close grip bench press'+"</td><td>"+round(user.closegripbenchpress*0.8)+" x 6</td>   <td>"+round(user.closegripbenchpress*0.8)+" x 6</td> <td>"+round(user.closegripbenchpress*0.8)+" x 6</td></tr>");

                                                                        table.append("<tr><td>"+'Pullup/Row'+"</td><td>x 8-20</td>   <td> x 8-20</td> <td> x 8-20</td></tr>");
                                                                        table.append("<tr><td>"+'Tricep'+"</td><td>x 8-20</td>   <td> x 8-20</td> <td> x 8-20</td></tr>");
                                                                        table.append("<tr><td>"+'Curl'+"</td><td>x 8-20</td>   <td> x 8-20</td> <td> x 8-20</td></tr>");
                                                                        table.append("<tr><td>"+'Lateral raises'+"</td><td>x 8-20</td>   <td> x 8-20</td> <td> x 8-20</td></tr>");
                                                                        table.append("<br><br>");

                                                                        //Day 2
                                                                        table.append("<tr><td>"+'<b>Exercise</b>'+"</td><td><b>Set 1</b></td>   <td> <b>Set 2</b></td> <td><b>Set 3</b></td></tr>");
                                                                        table.append("<tr><td>"+'Deadlift (warm-up)'+"</td><td>"+round(user.deadlift*0.4)+" x 5</td>   <td>"+round(user.deadlift*0.5)+" x 5</td> <td>"+round(user.deadlift*0.6)+" x 3</td></tr>");
                                                                                			table.append("<tr><td>"+'Deadlift'+"</td><td>"+round(user.deadlift*0.7)+" x 3</td>   <td>"+round(user.deadlift*0.8)+" x 3</td> <td>"+round(user.deadlift*0.9)+"<b> x 3+</b></td></tr>");
                                                                                            table.append("<tr><td>"+'Front Squat'+"</td><td>"+round(user.frontsquat*0.8)+" x 6</td>   <td>"+round(user.frontsquat*0.8)+" x 6</td> <td>"+round(user.frontsquat*0.8)+" x 6</td></tr>");

                                                                                            table.append("<tr><td>"+'Core/Abs'+"</td><td>x 8-20</td>   <td> x 8-20</td> <td> x 8-20</td></tr>");
                                                                                            table.append("<tr><td>"+'Pullup'+"</td><td>x 8-20</td>   <td></td> <td></td></tr>");
                                                                                            table.append("<tr><td>"+'Dips/Pushup'+"</td><td>x 8-20</td>   <td></td> <td></td></tr>");
                                                                                            table.append("<br><br>");


                                                                        //Day 3
                                                                        table.append("<tr><td>"+'<b>Exercise</b>'+"</td><td><b>Set 1</b></td>   <td> <b>Set 2</b></td> <td><b>Set 3</b></td></tr>");
                                                                        table.append("<tr><td>"+'Bench Press (warm-up)'+"</td><td>"+round(user.benchpress*0.4)+" x 5</td>   <td>"+round(user.benchpress*0.5)+" x 5</td> <td>"+round(user.benchpress*0.6)+" x 3</td></tr>");
                                                                        table.append("<tr><td>"+'Bench Press'+"</td><td>"+round(user.benchpress*0.7)+" x 3</td>   <td>"+round(user.benchpress*0.8)+" x 3</td> <td>"+round(user.benchpress*0.9)+"<b> x 3+</b></td></tr>");
                                                                        table.append("<tr><td>"+'Incline bench press'+"</td><td>"+round(user.inclinebenchpress*0.8)+" x 6</td>   <td>"+round(user.inclinebenchpress*0.8)+" x 6</td> <td>"+round(user.inclinebenchpress*0.8)+" x 6</td></tr>");

                                                                        table.append("<tr><td>"+'Pullup/Row'+"</td><td>x 8-20</td>   <td> x 8-20</td> <td> x 8-20</td></tr>");
                                                                        table.append("<tr><td>"+'Tricep'+"</td><td>x 8-20</td>   <td> x 8-20</td> <td> x 8-20</td></tr>");
                                                                        table.append("<tr><td>"+'Curl'+"</td><td>x 8-20</td>   <td> x 8-20</td> <td> x 8-20</td></tr>");
                                                                        table.append("<tr><td>"+'Lateral raises'+"</td><td>x 8-20</td>   <td> x 8-20</td> <td> x 8-20</td></tr>");
                                                                        table.append("<br><br>");

                                                                        //Day 4
                                                                        table.append("<tr><td>"+'<b>Exercise</b>'+"</td><td><b>Set 1</b></td>   <td> <b>Set 2</b></td> <td><b>Set 3</b></td></tr>");
                                                                        table.append("<tr><td>"+'Squat (warm-up)'+"</td><td>"+round(user.squat*0.4)+" x 5</td>   <td>"+round(user.squat*0.5)+" x 5</td> <td>"+round(user.squat*0.6)+" x 3</td></tr>");
                                                                        table.append("<tr><td>"+'Squat'+"</td><td>"+round(user.squat*0.7)+" x 3</td>   <td>"+round(user.squat*0.8)+" x 3</td> <td>"+round(user.squat*0.9)+"<b> x 3+</b></td></tr>");
                                                                                            table.append("<tr><td>"+'Stiff leg deadlift'+"</td><td>"+round(user.stifflegdeadlift*0.8)+" x 6</td>   <td>"+round(user.stifflegdeadlift*0.8)+" x 6</td> <td>"+round(user.stifflegdeadlift*0.8)+" x 6</td></tr>");

                                                                         table.append("<tr><td>"+'Core/Abs'+"</td><td>x 8-20</td>   <td> x 8-20</td> <td> x 8-20</td></tr>");
                                                                                                                 table.append("<tr><td>"+'Pullup'+"</td><td>x 8-20</td>   <td></td> <td></td></tr>");
                                                                                                                 table.append("<tr><td>"+'Dips/Pushup'+"</td><td>x 8-20</td>   <td></td> <td></td></tr>");
                                                                                                                 table.append("<br><br>");
                                                                         table.append("<br><br>");
                			}
                			}
            });
            }

            // Week 3 -----------------
                function fillWeek3(result)
                {
                $.ajax({
                    			type : "GET",
                    			url : url,
                    			success: function(result){
                    			if(result.status == "Done"){
                    			var table = $("#tableWeek3 tbody");
                    			table.empty();
                                var user = result.data;
                                                     //Day 1
                                                                         table.append("<tr><td>"+'Military Press (warm-up)'+"</td><td>"+round(user.militarypress*0.4)+" x 5</td>   <td>"+round(user.militarypress*0.5)+" x 5</td> <td>"+round(user.militarypress*0.6)+" x 3</td></tr>");
                                                             			table.append("<tr><td>"+'Military Press'+"</td><td>"+round(user.militarypress*0.75)+" x 5</td>   <td>"+round(user.militarypress*0.85)+" x 3</td> <td>"+round(user.militarypress*0.95)+"<b> x 1+</b></td></tr>");
                                                                         table.append("<tr><td>"+'Close grip bench press'+"</td><td>"+round(user.closegripbenchpress*0.85)+" x 5</td>   <td>"+round(user.closegripbenchpress*0.85)+" x 5</td> <td>"+round(user.closegripbenchpress*0.85)+" x 5</td></tr>");

                                                                         table.append("<tr><td>"+'Pullup/Row'+"</td><td>x 8-20</td>   <td> x 8-20</td> <td> x 8-20</td></tr>");
                                                                         table.append("<tr><td>"+'Tricep'+"</td><td>x 8-20</td>   <td> x 8-20</td> <td> x 8-20</td></tr>");
                                                                         table.append("<tr><td>"+'Curl'+"</td><td>x 8-20</td>   <td> x 8-20</td> <td> x 8-20</td></tr>");
                                                                         table.append("<tr><td>"+'Lateral raises'+"</td><td>x 8-20</td>   <td> x 8-20</td> <td> x 8-20</td></tr>");
                                                                         table.append("<br><br>");

                                                                         //Day 2
                                                                         table.append("<tr><td>"+'<b>Exercise</b>'+"</td><td><b>Set 1</b></td>   <td> <b>Set 2</b></td> <td><b>Set 3</b></td></tr>");
                                                                         table.append("<tr><td>"+'Deadlift (warm-up)'+"</td><td>"+round(user.deadlift*0.4)+" x 5</td>   <td>"+round(user.deadlift*0.5)+" x 5</td> <td>"+round(user.deadlift*0.6)+" x 3</td></tr>");
                                                                                 			table.append("<tr><td>"+'Deadlift'+"</td><td>"+round(user.deadlift*0.75)+" x 5</td>   <td>"+round(user.deadlift*0.85)+" x 3</td> <td>"+round(user.deadlift*0.95)+"<b> x 1+</b></td></tr>");
                                                                                             table.append("<tr><td>"+'Front Squat'+"</td><td>"+round(user.frontsquat*0.85)+" x 5</td>   <td>"+round(user.frontsquat*0.85)+" x 5</td> <td>"+round(user.frontsquat*0.85)+" x 5</td></tr>");

                                                                                             table.append("<tr><td>"+'Core/Abs'+"</td><td>x 8-20</td>   <td> x 8-20</td> <td> x 8-20</td></tr>");
                                                                                             table.append("<tr><td>"+'Pullup'+"</td><td>x 8-20</td>   <td></td> <td></td></tr>");
                                                                                             table.append("<tr><td>"+'Dips/Pushup'+"</td><td>x 8-20</td>   <td></td> <td></td></tr>");
                                                                                             table.append("<br><br>");


                                                                         //Day 3
                                                                         table.append("<tr><td>"+'<b>Exercise</b>'+"</td><td><b>Set 1</b></td>   <td> <b>Set 2</b></td> <td><b>Set 3</b></td></tr>");
                                                                         table.append("<tr><td>"+'Bench Press (warm-up)'+"</td><td>"+round(user.benchpress*0.4)+" x 5</td>   <td>"+round(user.benchpress*0.5)+" x 5</td> <td>"+round(user.benchpress*0.6)+" x 3</td></tr>");
                                                                         table.append("<tr><td>"+'Bench Press'+"</td><td>"+round(user.benchpress*0.75)+" x 5</td>   <td>"+round(user.benchpress*0.85)+" x 3</td> <td>"+round(user.benchpress*0.95)+"<b> x 1+</b></td></tr>");
                                                                         table.append("<tr><td>"+'Incline bench press'+"</td><td>"+round(user.inclinebenchpress*0.85)+" x 5</td>   <td>"+round(user.inclinebenchpress*0.85)+" x 5</td> <td>"+round(user.inclinebenchpress*0.85)+" x 5</td></tr>");

                                                                         table.append("<tr><td>"+'Pullup/Row'+"</td><td>x 8-20</td>   <td> x 8-20</td> <td> x 8-20</td></tr>");
                                                                         table.append("<tr><td>"+'Tricep'+"</td><td>x 8-20</td>   <td> x 8-20</td> <td> x 8-20</td></tr>");
                                                                         table.append("<tr><td>"+'Curl'+"</td><td>x 8-20</td>   <td> x 8-20</td> <td> x 8-20</td></tr>");
                                                                         table.append("<tr><td>"+'Lateral raises'+"</td><td>x 8-20</td>   <td> x 8-20</td> <td> x 8-20</td></tr>");
                                                                         table.append("<br><br>");

                                                                         //Day 4
                                                                         table.append("<tr><td>"+'<b>Exercise</b>'+"</td><td><b>Set 1</b></td>   <td> <b>Set 2</b></td> <td><b>Set 3</b></td></tr>");
                                                                         table.append("<tr><td>"+'Squat (warm-up)'+"</td><td>"+round(user.squat*0.4)+" x 5</td>   <td>"+round(user.squat*0.5)+" x 5</td> <td>"+round(user.squat*0.6)+" x 3</td></tr>");
                                                                         table.append("<tr><td>"+'Squat'+"</td><td>"+round(user.squat*0.75)+" x 5</td>   <td>"+round(user.squat*0.85)+" x 3</td> <td>"+round(user.squat*0.95)+"<b> x 1+</b></td></tr>");
                                                                                             table.append("<tr><td>"+'Stiff leg deadlift'+"</td><td>"+round(user.stifflegdeadlift*0.85)+" x 5</td>   <td>"+round(user.stifflegdeadlift*0.85)+" x 5</td> <td>"+round(user.stifflegdeadlift*0.85)+" x 5</td></tr>");

                                                                          table.append("<tr><td>"+'Core/Abs'+"</td><td>x 8-20</td>   <td> x 8-20</td> <td> x 8-20</td></tr>");
                                                                                                                  table.append("<tr><td>"+'Pullup'+"</td><td>x 8-20</td>   <td></td> <td></td></tr>");
                                                                                                                  table.append("<tr><td>"+'Dips/Pushup'+"</td><td>x 8-20</td>   <td></td> <td></td></tr>");
                                                                                                                  table.append("<br><br>");
                                                                          table.append("<br><br>");
                    			}
                    			}
                });
                }

        function round(x)
        {
            return Math.ceil(x/2.5)*2.5;
        }

})