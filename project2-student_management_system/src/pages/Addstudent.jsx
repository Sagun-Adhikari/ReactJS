import React from 'react'

const Addstudent = () => {
  function formsubmitted(e){
    e.preventDefault();

    console.log(e.target.username.value);
    console.log(e.target.rollno.value);
    console.log(e.target.address.value);
    console.log(e.target.class.value);

    var username=e.target.username.value;
    var Class =e.target.class.value
    var rollno=e.target.rollno.value
    var address=e.target.address.value
    console.log(address)

    
  }
  return (
    <>
    <div>Addstudent</div>
    <form onSubmit={formsubmitted} className='border-2 border-black mx-5'>
      username<br />
    <input type="text" name='username'/> <br />
    class <br />
    <input type="number" name='class' /> <br />
     rollno<br />
    <input type="number" name='rollno' /> <br />
    address<br />

    <input type="text" name='address' />
    <br />
    <input type="submit" value='add student' />
    </form>
    </>
  )
}

export default Addstudent