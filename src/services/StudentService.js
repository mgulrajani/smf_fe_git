import axios from 'axios'

let url ='http://localhost:4000/students'

export async function addStudent(studentObject){
    console.log('student object in FE services ',studentObject.name)
    const res = await axios.post(`${url}/create-student`, studentObject)
 
        // axios.post('https://smsbe.azurewebsites.net/students/create-student', studentObject)
         //.then(res => console.log(res.data));
    console.log(res)
}

export async function getStudents(){

       const res = await axios.get(`${url}`)
       const data = res.data;
        return data;
       
        //axios.get('https://smsbe.azurewebsites.net/students/')
         /*  .then(res => {
            this.setState({
              students: res.data
            });
          })
          .catch((error) => {
            console.log(error);
          }) */
      }

    export async function getStudentById(id){

        const res =  await axios.get(`${url}/edit-student/${id}`)
        const studentData  = res.data;
        console.log('student data by id from front end student service')
        return studentData;
    }
      
    
    export async function deleteStudent(id){
        console.log(id)
        const res =  await axios.delete(`${url}/delete-student/${id}`)
        const data = res.data;
        return data;

      //  axios.delete('https://smsbe.azurewebsites.net/students/delete-student/' + this.props.obj._id)
           /*  .then((res) => {
                console.log('Student successfully deleted!');
            }).catch((error) => {
                console.log(error)
            }) */
    }
    
    export async function updateStudent(id,studentObject){
    console.log(id)
    console.log(studentObject.name)
    const res = await axios.put(`${url}/update-student/${id}`,studentObject)

      const data = res.data;
      return data ;

        //axios.get('https://smsbe.azurewebsites.net/students/edit-student/' + this.props.match.params.id)
         /*  .then(res => {
            this.setState({
              name: res.data.name,
              email: res.data.email,
              rollno: res.data.rollno
            });
          })
          .catch((error) => {
            console.log(error);
          }) */
      }