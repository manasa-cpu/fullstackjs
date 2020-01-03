import { Component } from '@angular/core';

@Component({
  selector: 'user',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  user1=[{
  name:"manasa",
  photo:"https://scontent.fblr9-1.fna.fbcdn.net/v/t31.0-8/p720x720/13131624_273751182964931_8758654226399769262_o.jpg?_nc_cat=106&_nc_ohc=rPBhTJJdxQcAQlaxMHvm-OP_PkFD8Ug9gs4d7YQqLGlp56ODwNrPMvDjQ&_nc_ht=scontent.fblr9-1.fna&oh=2feee19d75c8ab1ffd2838401a2c580b&oe=5E6EB636",
  age:20,
  designation:"developer",

  education:"BE",
  dateofbirth:new Date("06/10/1997"),
  companyname:"Infosys",
  salary:50000,
  location:"mysore",
},
{
  name:"shivani",
  photo:"https://scontent.fblr9-1.fna.fbcdn.net/v/t1.0-1/c0.0.160.160a/p160x160/18951028_483851228621591_5107690494833542854_n.jpg?_nc_cat=106&_nc_ohc=C2rGhLFgcSgAQkx0tVz3dpV3cVgrfnoxzApnAvSI376cv_uxRswZcydsA&_nc_ht=scontent.fblr9-1.fna&oh=4456ff91b5707b67daf8c8da3c48727e&oe=5E7C9578",
  age:21,
  designation:"developer",
  education:"BE",
  dateofbirth:new Date("06/10/1997"),
  companyname:"TCS",
  salary:50000,
  location:"mysore"
},
{
  name:"kajol",
  photo:"https://scontent.fblr9-1.fna.fbcdn.net/v/t1.0-1/c0.0.160.160a/p160x160/18951028_483851228621591_5107690494833542854_n.jpg?_nc_cat=106&_nc_ohc=C2rGhLFgcSgAQkx0tVz3dpV3cVgrfnoxzApnAvSI376cv_uxRswZcydsA&_nc_ht=scontent.fblr9-1.fna&oh=4456ff91b5707b67daf8c8da3c48727e&oe=5E7C9578",
  age:22,
  designation:"developer",
  education:"BE",
  dateofbirth:new Date("06/10/1997"),
  companyname:"Infosys",
  salary:50000,
  location:"mysore"
},
{
  name:"seema",
  photo:"https://scontent.fblr9-1.fna.fbcdn.net/v/t1.0-1/c0.0.160.160a/p160x160/18951028_483851228621591_5107690494833542854_n.jpg?_nc_cat=106&_nc_ohc=C2rGhLFgcSgAQkx0tVz3dpV3cVgrfnoxzApnAvSI376cv_uxRswZcydsA&_nc_ht=scontent.fblr9-1.fna&oh=4456ff91b5707b67daf8c8da3c48727e&oe=5E7C9578",
  age:22,
  designation:"developer",
  education:"BE",
  dateofbirth:new Date("06/10/1997"),
  companyname:"Infosys",
  salary:50000,
  location:"mysore"
}];

addNewUser(){
  this.user1.push({  name:"kajol",
  photo:"https://scontent.fblr9-1.fna.fbcdn.net/v/t1.0-1/c0.0.160.160a/p160x160/18951028_483851228621591_5107690494833542854_n.jpg?_nc_cat=106&_nc_ohc=C2rGhLFgcSgAQkx0tVz3dpV3cVgrfnoxzApnAvSI376cv_uxRswZcydsA&_nc_ht=scontent.fblr9-1.fna&oh=4456ff91b5707b67daf8c8da3c48727e&oe=5E7C9578",
  age:22,
  designation:"developer",
  education:"BE",
  dateofbirth:new Date("06/10/1997"),
  companyname:"Infosys",
  salary:50000,
  location:"mysore"})
}
// removeUser(user){
//   let index=this.user1.indexOf(this.user1);
//   this.user1.splice(index,1);
// }






}
