const Questions = [
    {
      ques: "HTML stands for",
      a: "hyper text markup language",
      b: "hyper text mark language",
      c: "hyper text marks language",
      d: "hyper text mark language",
      correct: "a",
    },
    {
      ques: "which one of the following is not a sematic tag",
      a: "footer",
      b: "div",
      c: "header",
      d: "nav",
      correct: "b",
    },
    {
      ques: "Largest heading in HTML5",
      a: "h2",
      b: "h5",
      c: "h6",
      d: "h1",
      correct: "d",
    },
    {
        ques: "Which one of the following in block element",
        a: "del",
        b: "span",
        c: "div",
        d: "mark",
        correct: "c",
      },
  ];

   let ques =  document.getElementById("ques")
   let options = document.querySelectorAll(".options");

   let index = 0 

 function loadQuestion() {
  ques.innerHTML = Questions[index].ques;

  options[0].nextElementSibling.innerHTML = Questions[index].a;
  options[1].nextElementSibling.innerHTML = Questions[index].b;
  options[2].nextElementSibling.innerHTML = Questions[index].c;
  options[3].nextElementSibling.innerHTML = Questions[index].d;
}

   loadQuestion()


   function submitQuiz()
   {
   getAnswer()
    index++
   loadQuestion()
   }

   function getAnswer()
   {
    options.forEach(function(option){
     if(option.checked){
     console.log(option.value)
     }
   })


   }