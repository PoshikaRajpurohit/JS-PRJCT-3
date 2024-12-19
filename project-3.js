// # RECEPTION-LOGIC PROJECT



        //#1 Multiplication Table
            // let number =+prompt("Enter an integer for the multiplication table:");
            // let multiplier = 1; 
            // while (multiplier <= 10) {
            // console.log(number * multiplier);
            // multiplier++
            // }
        
        
        // Expected-output
        // num=5 multiplication=5,10,15,20,25,30,35,40,45,50
        
    
    
        // #2 Factorials
            // let number =+prompt("Enter a positive integer to calculate its factorial:");
            // console.log("The number is=",number);
        
            // let factorial = 1 ,i = number;; 
            // while (i > 0) {
            //  factorial *= i;
            //  i--; 
            //      }
            // console.log("The factorial is",factorial);
        
        
        
        // EXPECTED-OUTPUT= number=5 factorial=120

       
       
        // #3 Armstrong
            // let num=+ prompt("Enter any number")
            // console.log("The number is=",num);
            // let a,sum=0;
            // a=num;
            // while(num>0){
            //     let rem=num%10;
            //     sum+= rem**3;
            //     num=Math.floor(num/10);
            // }
            // if(a===sum){
            //     console.log("The number is an armstrong number");
            // }else{
            //     console.log("The number is not an armstrong number");
            // }
        
        // EXPECTED-OUTPUT
        //IF Number=153 THE NUMBER IS AN ARMSTRONG
        //IF Number=123 THE NUMBER IS NOT  AN ARMSTRONG
        
        
        
        
        // #4 Palindrome
            //let num=+ prompt("Enter any number")
            // console.log("The number is=",num);
            // let a,sum=0;
            // a=num;
            // while(num>0){
            //     let rem=num%10;
            //     sum= rem + (sum*10);
            //     num=Math.floor(num/10);
            // }
            // if(a===sum){
            //     console.log("The number is an palindrome number");
            // }else{
            //     console.log("The number is not an palindrome number");
            // }
        
       
        // EXPECTED-OUTPUT
        //IF Number=151 THE NUMBER IS AN PALINDROME.
        //IF Number=123 THE NUMBER IS NOT  AN PALINDROME.

    
    
    
        // #5 Fibannoci series
            // let sum,f=1,s=1,i=1;
            // let n =+ prompt("Enter the value of n");
            // console.log("Value of n=",n);
            // while(i<=n)
            // {
            //     console.log("",f);
            //     sum=f+s;
            //     f=s;
            //     s=sum;
            //     i++;
            // }
        
        
        
        // EXPECTED OUTPUT
        // N=5 FABONICCA-SERIES=1,1,2,3,5.
   
   
   
    // #6 ADD numbers from 1 to 30
            // let total = 0 ,num = 0;
            // do {
            // total += num; 
            // num++;       
            // } while (num <= 30); 
            // console.log("Sum of 1 to 30 =",total);
    
    
        // EXPECTD-OUTPUT= sum of 1 to 30 =465

   
   
    // #8 Print 1 to 10 in one line.
            // let p=""
            // {
            //     for( let i=1;i<=10;i++){
            //         p+= " "+i;
            //     }
            //      console.log(p);
            // }

        
            // EXPECTED-OUTPUT=12345678910

    //  #9 Print 1,4,9,16,25,.....100=385.      
       
            // let result = ""; 
            // let total = 0;  
            // for (let i = 1; i <= 20; i++) { 
            //     let square = i * i;
            //     if (total + square > 385) break;
            //     total += square;
            //     result += square + (total + (i + 1) * (i + 1) > 385 ? "" : " + "); 
            // }
            // console.log(result);
            // console.log("The total of squares from 1 to 10 is=385");

    

            // EXPECTED-OUTPUT= 1+4+9+16+25+36+49+64+81+100
            // The total of squares from 1 to 10 is=385

    
    
    
    // #10 Pattern using Nested Loop
            //     5
            // //  5 4
            // //  5 4 3
            //     5 4 3 2
             //    5 4 3 2 1
            // for (i=5;i>=1;i--){
            //     let data= " "
            //     for(j=5;j>=i;j--){
            //         data+= j+ " "
            //     }
            //     console.log(data);
            // }


            // Expected output= 
            //         5
            // // //   5 4
            // // //   5 4 3
            // //      5 4 3 2
            //  //     5 4 3 2 1

    



    // #11 Pattern using Nested Loop
            // 1
            // 2   3
            // 4   5   6
            // 7   8   9   10  
            // 11  12  13  14  15
            // let num=1
            // for(i=5;i>=1;i--)
            // 	{
            //         let data= " ";
            // 		for(j=i;j<=5;j++)
            // 		{   data+= num+ " "
            // 			num++;    
            // 		}
            //         console.log("",data)
            // 	}
        
        
        
            // EXPECTED-OUTPUT=
            // 1
            // 2   3
            // 4   5   6
            // 7   8   9   10  
            // 11  12  13  14  15