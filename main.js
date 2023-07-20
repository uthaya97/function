function mark(mark1,mark2,mark3,mark4,mark5)
{
	var total=mark1+mark2+mark3+mark4+mark5;
	var average=total/mark.length;
	document.write(" Total mark "+total+"&nbsp"+"&nbsp"+"&nbsp");
	return average;

}
var uthaya=mark(90,85,92,90,85);
document.write("uthaya Average is: "+uthaya+"<br>");
var ayahtu=mark(90,85,75,90,70);
document.write("ayahtu Average is: "+ayahtu+"<br>");
var kumar=mark(80,85,80,70,85);
document.write("kumar Average is: "+kumar+"<br>");
var ramesh =mark(70,75,80,90,85);
document.write("ramesh Average is: "+ramesh+"<br>");
var vijay =mark(86,85,80,79,85);
document.write("vijay Average is: "+vijay+"<br>");
