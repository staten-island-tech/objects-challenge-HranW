const presidents = [
  { name: "Donald Trump", terms: 1, party: "R" },
  { name: "Barack Obama", terms: 2, party: "D" },
  { name: "George W. Bush", terms: 2, party: "R" },
  { name: "Bill Clinton", terms: 2, party: "D" },
  { name: "George H.W. Bush", terms: 1, party: "R" },
  { name: "Ronald Reagan", terms: 2, party: "R" },
  { name: "Jimmy Carter", terms: 1, party: "D" },
  { name: "Gerlad Ford", terms: 1, party: "R" },
  { name: "Richard Nixon", terms: 2, party: "R" },
  { name: "John F. Kennedy", terms: 1, party: "D" },
  { name: "Lyndon Johnson", terms: 2, party: "D" },
  { name: "Dwight Eisenhower", terms: 2, party: "R" },
];

//Challenge Questions
//1) Filter all presidents, leaving only the Democratic ones
let democrats = presidents.filter((president) => president.party === "D");
console.log(democrats);

//2)Filter all presidents to leave only one term Republican presidents HINT use If statement
let termRepublicans = presidents.filter(function (e) {
  if (e.party === "R" && e.terms == 1) return true;
  return false;
});
console.log(termRepublicans);

//3) return only the last three presidents
console.log(presidents.slice(presidents.length - 3));

//4) log all dems who served 2 terms. HINT use chain filter, filter and slice
let termDemocrats = presidents.filter(
  (president) => president.party === "D" && president.terms == 2
);
console.log(termDemocrats);

/*BONUS write a script to check if LBJ was a 2 term president. IF he was then alert("LBJ served two terms") 
else alert "LBJ was one and done"*/
let LBJ = presidents.filter(function (e) {
  if (e.name === "Lyndon Johnson" && e.terms == 2) return true;
  else return false;
});
if (LBJ.length > 0) alert("LBJ served two terms");
else alert("LBJ was one and done");
