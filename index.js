const reviews = [
    {
      id: 1,
      name: "John Doe",
      job: "Software Engineer",
      img: "https://media.gettyimages.com/id/1156714752/photo/portrait-of-an-indian-corporate-male-executive.jpg?s=612x612&w=0&k=20&c=gVrjy68_xvQg0_x0EM3hIxC-0Mu2oXj8BGgfDBspL-0=",
      text: "John is a talented software engineer with a passion for building innovative solutions."
    },
    {
      id: 2,
      name: "Alice Smith",
      job: "Web Developer",
      img: "https://media.gettyimages.com/id/637933814/photo/portrait-of-businessman-smiling-in-business-office.jpg?s=612x612&w=0&k=20&c=Jd31YY_NSG9zp-wa-dGSNR1DcWwn7xxSt4K7wICoIfc=",
      text: "Alice is a skilled web developer who loves creating beautiful and functional websites."
    },
    {
      id: 3,
      name: "Bob Johnson",
      job: "Data Analyst",
      img: "https://media.gettyimages.com/id/594420110/photo/portrait-of-man-with-glasses.jpg?s=612x612&w=0&k=20&c=CVKygH8_3hV-WFcnL_z2PhGminPKWzZo1--SptsB7_w=",
      text: "Bob is an analytical thinker with expertise in interpreting complex data sets."
    },
    {
        id: 4,
        name: "Emily Brown",
        job: "UX/UI Designer",
        img: "https://media.gettyimages.com/id/1351147752/photo/studio-portrait-of-attractive-20-year-old-bearded-man.jpg?s=612x612&w=0&k=20&c=-twL1NKKad6S_EPrGSniewjh6776A0Ju27ExMh7v_kI=",
        text: "Emily is a creative designer who excels in crafting intuitive user experiences."
      },
      {
        id: 5,
        name: "Michael Wilson",
        job: "Mobile App Developer",
        img: "https://media.gettyimages.com/id/1406197730/photo/portrait-of-a-young-handsome-indian-man.jpg?s=612x612&w=0&k=20&c=CncNUTbw6mzGsbojks2Vt0kV85N_pQaI3zaSkBQJFTc=",
        text: "Michael is a proficient mobile app developer who enjoys building cutting-edge applications."
      }
  ];

// Select Item -->


const articleSection = document.querySelector(".review-article");
const reviewerImage = document.querySelector(".review-img");
const reviewerName = document.querySelector(".img-name");
const reviewerJob = document.querySelector(".img-position");
const reviewerInfo = document.querySelector(".img-info");
const randomBtn = document.querySelector(".btn");
const greaterThan = document.getElementById("greater-than");
const lessThan = document.getElementById("less-than");


// functionality part

let itemNmbr  = 0;


window.addEventListener("DOMContentLoaded",function(){
  const loadedItem = reviews[itemNmbr];
  reviewerImage.src = loadedItem.img;
  reviewerName.innerText = loadedItem.name;
  reviewerJob.innerText = loadedItem.job;
  reviewerInfo.innerText = loadedItem.text;
  showPerson(itemNmbr);
});


randomBtn.addEventListener("click",function(){
  const nmbr = Math.floor(Math.random() * reviews.length);
  const loadedItem = reviews[nmbr];
  reviewerImage.src = loadedItem.img;
  reviewerName.innerText = loadedItem.name;
  reviewerJob.innerText = loadedItem.job;
  reviewerInfo.innerText = loadedItem.text;
});


function showPerson(person){
  const loadedItem = reviews[person];
  reviewerImage.src = loadedItem.img;
  reviewerName.innerText = loadedItem.name;
  reviewerJob.innerText = loadedItem.job;
  reviewerInfo.innerText = loadedItem.text;
};



greaterThan.addEventListener('click',function(){
  itemNmbr++;
  if(itemNmbr < reviews.length){
    showPerson(itemNmbr);
  }else{
    itemNmbr = 0;
    showPerson(itemNmbr);
  }
});



lessThan.addEventListener('click',function(){
  if(itemNmbr>0){
    itemNmbr--;
    showPerson(itemNmbr);
  }else{
    itemNmbr = 4;
    showPerson(itemNmbr);
  }
})





