let my_form = document.getElementById('my-form');
let user_list = document.getElementById('users');
my_form.addEventListener('submit',save_user);


async function delBooking(id){
    await 
    console.log('del');
}

function showBookings(obj){
    let user_list = document.getElementById('users');
    let li = document.createElement('li');

    // DELETE BUTTON//
    let del_button = document.createElement('input');
    del_button.type = 'button';
    del_button.value = 'delete';
    del_button.className = 'del-btn';
    del_button.appendChild(document.createTextNode('delete'));

    // //EDIT BUTTON
    // let edit_button = document.createElement('input');
    // edit_button.type = 'button';
    // edit_button.value = 'edit';
    // edit_button.className = 'edit-btn';
    // edit_button.appendChild(document.createTextNode('edit'));

    let user_details = obj.name + ' - ' + obj.email + ' - ' + obj.phoneNumber;
    li.appendChild(document.createTextNode(user_details));
    li.appendChild(del_button);
    // li.appendChild(edit_button);

    user_list.appendChild(li);
    let id = obj.id;

    // edit_button.onclick = () =>{
    //     document.getElementById('name').value = obj.name;
    //     document.getElementById('email').value = obj.email;
    //     document.getElementById('phn_no').value = obj.phn_no;
    //     axios.delete(`${crud_id}/${obj._id}`).then((response)=>{
    //     console.log(response);
    //     user_list.removeChild(li);})
    // }
    del_button.onclick = () =>{
        console.log('del clicked')
        axios.post(`http://localhost:5000/delBooking/${id}`)
        .then(
            user_list.removeChild(li)
        )
        .catch(err => console.log(err))
    }
    }


async function getAllProducts(){
    try{
        let response = await axios.get('http://localhost:5000/bookings');
        response.data.forEach(entry => showBookings(entry));
    }
    catch(err)
    {
        console.log(err);
    }
}

window.addEventListener("DOMContentLoaded" , ()=>{
    getAllProducts();
})

// getAllBookings();

function save_user(e){
    e.preventDefault();
    const user ={
    };
    user.name = document.getElementById('name').value;
    user.email = document.getElementById('email').value;
    user.phoneNumber = document.getElementById('phn_no').value;

    axios.post('http://localhost:5000/add-booking',user)
    .then((response)=>{
        user.id = response.data.id;
        showBookings(user);
    })
    .catch((err)=> console.log(err))
    // localStorage.setItem(user.email,JSON.stringify(user));
}

