export const userColumns = [
   { field: "id", headerName: "ID", width: 70 },
   {
     field: "user",
     headerName: "User",
     width: 230,
     renderCell: (params) => {
       return (
         <div className="cellWithImg">
           <img className="cellImg" src={params.row.img} alt="avatar" />
           {params.row.username}
         </div>
       );
     },
   },
   {
     field: "email",
     headerName: "Email",
     width: 230,
   },
 
   {
     field: "age",
     headerName: "Age",
     width: 100,
   },
   {
     field: "status",
     headerName: "Status",
     width: 160,
     renderCell: (params) => {
       return (
         <div className={`cellWithStatus ${params.row.status}`}>
           {params.row.status}
         </div>
       );
     },
   },
 ];
 
 //temporary data
 export const userRows = [
   {
     id: 1,
     username: "Snow",
     img: "https://i.pinimg.com/originals/0d/31/0c/0d310cd5c53d2b57b92f235687cba7a7.png",
     status: "active",
     email: "1snow@gmail.com",
     age: 35,
   },
   {
     id: 2,
     username: "Jamie Lannister",
     img: "https://pbs.twimg.com/profile_images/644230819222028288/BSUEbJ1S_400x400.png",
     email: "2snow@gmail.com",
     status: "passive",
     age: 42,
   },
   {
     id: 3,
     username: "Lannister",
     img: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b9/Tywin_Lannister_Profile_Charles_Dance.jpg/220px-Tywin_Lannister_Profile_Charles_Dance.jpg",
     email: "3snow@gmail.com",
     status: "pending",
     age: 45,
   },
   {
     id: 4,
     username: "Stark",
     img: "https://upload.wikimedia.org/wikipedia/en/5/52/Ned_Stark-Sean_Bean.jpg",
     email: "4snow@gmail.com",
     status: "active",
     age: 16,
   },
   {
     id: 5,
     username: "Targaryen",
     img: "https://i.pinimg.com/736x/d3/b8/ea/d3b8eaf2b7d2f2792c145af55ac8cb76--mother-of-dragons-daenerys-targaryen.jpg",
     email: "5snow@gmail.com",
     status: "passive",
     age: 22,
   },
   {
     id: 6,
     username: "Melisandre",
     img: "https://upload.wikimedia.org/wikipedia/en/8/80/Melisandre-Carice_van_Houten.jpg",
     email: "6snow@gmail.com",
     status: "active",
     age: 15,
   },
   {
     id: 7,
     username: "Clifford",
     img: "https://img2.goodfon.ru/original/640x1136/2/5f/game-of-thrones-igra-3275.jpg",
     email: "7snow@gmail.com",
     status: "passive",
     age: 44,
   },
   {
     id: 8,
     username: "Frances",
     img: "https://www.serialowa.pl/wpr/wp-content/uploads/2020/08/gra-o-tron-jonathan-pryce.jpg",
     email: "8snow@gmail.com",
     status: "active",
     age: 36,
   },
   {
     id: 9,
     username: "Roxie",
     img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
     email: "snow@gmail.com",
     status: "pending",
     age: 65,
   },
   {
     id: 10,
     username: "Roxie",
     img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
     email: "snow@gmail.com",
     status: "active",
     age: 65,
   },
 ];