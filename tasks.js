const scores = [
    {
      marks: 32,
      name: "Yvette Merritt"
    },
    {
      marks: 57,
      name: "Lillian Ellis"
    },
    {
      marks: 22,
      name: "Mccall Carter"
    },
    {
      marks: 21,
      name: "Pate Collier"
    },
    {
      marks: 91,
      name: "Debra Beard"
    },
    {
      marks: 75,
      name: "Nettie Hancock"
    },
    {
      marks: 20,
      name: "Hatfield Hodge"
    }
  ];
  // [32, 57, 22]
  // Task 1
  // Print the name list - As an array
  // Expected Outputaa
  // ["Yvette Merritt", "Lillian Ellis", "Mccall Carter", "Pate Collier" ,
  //  "Debra Beard", "Nettie Hancock",  "Hatfield Hodge"]
  const names = scores.map(({name})  => name);
  console.log(names)
  
  
  // Task 2
  // >=40 pass.. find those student that passed (Use array method)
  // Expected Output
  // [{
  //     marks: 57,
  //     name: "Lillian Ellis"
  //   },
  //     {
  //     marks: 91,
  //     name: "Debra Beard"
  //   },
  //   {
  //     marks: 75,
  //     name: "Nettie Hancock"
  //   }]
  const passedStudents = scores.filter((score) => score.marks >=40)
  console.log(passedStudents)
  
  // Task 3
  //  Find all the names who failed the exams (Array methods)
  // Expected Output
  //   ["Yvette Merritt",
  //   "Mccall Carter",
  //   "Pate Collier",
  //   "Hatfield Hodge"
  // ];
  const failedStudents = scores.map((score) => {
    if (score.marks < 40)
      return score.name
}).filter((el) => el !== undefined)
  console.log(failedStudents);
  // Task 4
  // Find the Average marks
  const totalMarks = scores.reduce((sum,{marks}) => sum + marks,0)
  console.log((totalMarks/scores.length).toFixed(2))
  
  // Task 5
  // Find the topper's name
  // Expected Output
  // "Debra Beard"
  topper = scores[0]
  scores.map((score) => {
      if(score.marks > topper.marks){
          topper = score
      }
  })
  console.log(topper.name)
  
  // Only use
  // map, reduce, filter & destructuring
  