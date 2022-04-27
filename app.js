// - Create a Student Array & Object Data Structure ( name, roll, age, class, gender, location, Admission fees ) 30.  now create a console data table with

const students = [
    {
        Name:'Md.shihab',
        Age: 13,
        Class:'Six', 
        Roll:1,
        Gender:'Male',
        Location:'Uttara',
        Admission_fees:1000
    },
    {
        Name:'Abdur Razzak',
        Age: 14,
        Class:'Seven', 
        Roll:2,
        Gender:'Male',
        Location:'Uttara',
        Admission_fees:2000
    },
    {
        Name:'Istiak Robin',
        Age: 15,
        Class:'Eight', 
        Roll:3,
        Gender:'Male',
        Location:'Uttara',
        Admission_fees:3000
    },
    {
        Name:'Emaran Hasan',
        Age: 16,
        Class:'Nine', 
        Roll:4,
        Gender:'Male',
        Location:'Uttara',
        Admission_fees:4000
    },
    {
        Name:'Md Raza',
        Age: 17,
        Class:'Ten', 
        Roll:5,
        Gender:'Male',
        Location:'Uttara',
        Admission_fees:5000
    },
    {
        Name:'Apu Barua',
        Age: 13,
        Class:'Six', 
        Roll:1,
        Gender:'Male',
        Location:'Mirpur',
        Admission_fees:1000
    },
    {
        Name:'Md Mahbubur Rahman',
        Age: 14,
        Class:'Seven', 
        Roll:2,
        Gender:'Male',
        Location:'Mirpur',
        Admission_fees:2000
    },
    {
        Name:'Md.Rejoyan Islam',
        Age: 15,
        Class:'Eight', 
        Roll:3,
        Gender:'Male',
        Location:'Mirpur',
        Admission_fees:3000
    },
    {
        Name:'Md.Faisal',
        Age: 16,
        Class:'Nine', 
        Roll:4,
        Gender:'Male',
        Location:'Mirpur',
        Admission_fees:4000
    },
    {
        Name:'Md.Rubel Hasan',
        Age: 17,
        Class:'Ten', 
        Roll:5,
        Gender:'Male',
        Location:'Mirpur',
        Admission_fees:5000
    },
    {
        Name:'Somaia Alam Asha',
        Age: 13,
        Class:'Six', 
        Roll:1,
        Gender:'Female',
        Location:'Badda',
        Admission_fees:1000
    },
    {
        Name:'Hammad Sadi',
        Age: 13,
        Class:'Six', 
        Roll:1,
        Gender:'Male',
        Location:'Badda',
        Admission_fees:2000
    },
    {
        Name:'Rabiul Jahid',
        Age: 15,
        Class:'Eight', 
        Roll:3,
        Gender:'Male',
        Location:'Badda',
        Admission_fees:3000
    },
    {
        Name:'Md. Zoynul',
        Age: 16,
        Class:'Nine', 
        Roll:4,
        Gender:'Male',
        Location:'Badda',
        Admission_fees:4000
    },
    {
        Name:'Md.Nazrul',
        Age: 17,
        Class:'Ten', 
        Roll:2,
        Gender:'Male',
        Location:'Badda',
        Admission_fees:5000
    },
    {
        Name:'Hammad Sadi',
        Age: 13,
        Class:'Six', 
        Roll:1,
        Gender:'Male',
        Location:'Motijil',
        Admission_fees:1000
    },
    {
        Name:'S.M Zahid Hasan',
        Age: 14,
        Class:'seven', 
        Roll:2,
        Gender:'Male',
        Location:'Motijil',
        Admission_fees:2000
    },
    {
        Name:'Md.Sajib',
        Age: 15,
        Class:'Eight', 
        Roll:3,
        Gender:'Male',
        Location:'Motijil',
        Admission_fees:3000
    },
    {
        Name:'Jibon Chandra',
        Age: 16,
        Class:'Nine', 
        Roll:4,
        Gender:'Male',
        Location:'Motijil',
        Admission_fees:4000
    },
    {
        Name:'Md.Anisul Hoque',
        Age: 17,
        Class:'Ten', 
        Roll:5,
        Gender:'Male',
        Location:'Motijil',
        Admission_fees:5000
    },
    {
        Name:'Md.Nazmul Huda',
        Age: 13,
        Class:'Six', 
        Roll:1,
        Gender:'Male',
        Location:'Khilgong',
        Admission_fees:1000
    },
    {
        Name:'Md.Akramul Islam',
        Age: 14,
        Class:'Seven', 
        Roll:2,
        Gender:'Male',
        Location:'Khilgong',
        Admission_fees:2000
    },
    {
        Name:'Md.Akash Shikder',
        Age: 15,
        Class:'Eight', 
        Roll:3,
        Gender:'Male',
        Location:'Khilgong',
        Admission_fees:3000
    },
    {
        Name:'Tahir Hossain Nihal',
        Age: 16,
        Class:'Nine', 
        Roll:4,
        Gender:'Male',
        Location:'Khilgong',
        Admission_fees:4000
    },
    {
        Name:'RP Sohag',
        Age: 17,
        Class:'Ten', 
        Roll:5,
        Gender:'Male',
        Location:'Khilgong',
        Admission_fees:5000
    },
    {
        Name:'Habib',
        Age: 13,
        Class:'Six', 
        Roll:1,
        Gender:'Male',
        Location:'Basabu',
        Admission_fees:1000
    },
    {
        Name:'Sufia Akter',
        Age: 14,
        Class:'Seven', 
        Roll:2,
        Gender:'Female',
        Location:'Basabu',
        Admission_fees:2000
    },
    {
        Name:'Asaduzzaman  Asad',
        Age: 15,
        Class:'Eight', 
        Roll:3,
        Gender:'Male',
        Location:'Basabu',
        Admission_fees:3000
    },
    {
        Name:'Md Shirajam Munir',
        Age: 16,
        Class:'Nine', 
        Roll:4,
        Gender:'Male',
        Location:'Basabu',
        Admission_fees:4000
    },
    {
        Name:'Aftab Uddi',
        Age: 17,
        Class:'Ten', 
        Roll:5,
        Gender:'Male',
        Location:'Basabu',
        Admission_fees:5000
    },


]


// - Total Admnission fees
let Total_admission_fee = 0;
students.forEach((data ,index)=>{
Total_admission_fee += data.Admission_fees
})
console.log(Total_admission_fee);









// - Find All Female Students
/* students.sort().forEach((data, index)=>{
    if(data.Gender == 'Female'){
        console.log(data.Name);
    }
})
 */




// - Find class wise student result
/* students.sort().forEach((data,index)=>{
    if(data.Class == 'Six'){
        console.log(data.Name)
    }
})

 */




// - Location wise student result
/* students.sort().forEach((data,index)=>{
    if(data.Location == 'Uttara'){
        console.log(data.Name)
    }
}) */






// - find student between 10 - 25 age

/* students.sort().forEach((data,index)=>{
    if(data.Age>= 10 && data.Age<=25){
        console.log(data.Name)
    }
}) */

