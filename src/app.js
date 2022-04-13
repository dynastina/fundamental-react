// // akses ke html
const root = document.getElementById("root");

// // create element
// const element = document.createElement("h1");
// element.textContent = "Hello from JS!";
// element.className = "greet";

// // // render
// const root = document.querySelector("#root");

// // menggunakan react
// const p1 = React.createElement('p', {
//     children: 'Hello paragraph 1!',
// });
// const p2 = React.createElement('p', {
//     children: 'Hello paragraph 2!',
// });

// // wrapper
// const element = React.createElement(React.Fragment, {
//     children: [p1, p2]
// });

// buah buahan

// const buah1 = React.createElement('li', {
//     children:'Semangka'
// });
// const buah2 = React.createElement('li', {
//     children:'Melon'
// });
// const element = React.createElement('ul', {
//     className: 'buah'
// }, buah1, buah2);  

// alternatif way
// const element = React.createElement('ul', {className: 'buah'}, 
//     React.createElement('li', null, 'Semangka'),
//     React.createElement('li', null, 'Semangki'),
//     React.createElement('li', null, 'Semangku'),
// );

// jsx
// const element = (
//     <ul>
//         <li>Semangka</li>
//         <li>Semangki</li>
//         <li>Semangku</li>
//     </ul>
// );

// const user = 'Ganden';

// function name(){
//     return 'Ganden';
// }

// component
// function Halo(props){
//     return <p className={props.className}>Hallo nama saya <b>{props.name}</b></p>
// }

// const className = 'head';
// emmbed
// embed classname tidak erlu pake ''
// const element = (<h1 className={className}>Hallo saya {name()}</h1>);

// image
// self closing tag
// const element = (<img src="https://upload.wikimedia.org/wikipedia/commons/d/de/Nokota_Horses_cropped.jpg" />)

// const element = (
//     <>
//         <Halo name='Ganden' className='head'/>
//         <Halo name='Dynastina' className='body'/>
//     </>
// );

// function tick(){
    
//     const element = (
//         <div>
//             <h2>Jam Sekarang</h2>
//             <p>{new Date().toLocaleTimeString()}</p>
//         </div>
//     );

//     ReactDOM.render(element, root);
// }

// setInterval(function() {
//     tick();
// }, 1000);

// const element = (
//     // <div style={{ 
//     //     width:200, 
//     //     height:200, 
//     //     backgroundColor:'red' 
//     // }}>
//     <div className="box">

//     </div>
// );

// const element = (
//     <button onClick={() => {
//         alert('cebok');
//     }}>Click me</button>
// );

// function alertHewan(hewan){
//     alert('aku adalah ' +hewan);
// }

// const element = (
//     <button onClick={() => {
//         alertHewan('babi');
//     }}>Click me</button>
// );

// const element = (
//     <button onMouseOver={
//         alertHewan.bind(this, 'cicak')
//     }>Click me</button>
// );

// function App(){
//     return (<h1>React Element</h1>);
// }


// function App(){
//     const state = React.useState(1);

//     // destructuring
//     const [count, setCount] = state;

//     // const count = state[0];
//     // const setCount = state[1];

//     let add = 1;
//     let min = 1;
//     let color = 'white';

//     if(count>=5){
//         add = 0;
//         min = 1;
//         alert('maksimum!');
//     }
    
//     if(count<=-5){
//         min = 0;
//         add = 1;
//         alert('minimum!');
//     }
//     if(count<0){
//         color = 'red';
//     }
    
    
//     const result = (
//         <>
//             <button onClick={()=>{
//                 setCount(count-min);
//             }}>+</button>
//             <span>{count}</span>
//             <button onClick={()=>{
//                 setCount(count+add);
//             }}>-</button>
//             {/* <h4 style={(count < 0)?{ color:'red' }:{ color:'white' }}>Nilai sekarang {count}</h4> */}
//             <h4 style={{ color:color }}>Nilai sekarang {count}</h4>
//         </>
//     );

//     return result;
// }

// function App(){

//     // di eksekusi setelah component ini di render
//     // perubahan state juga akan membuat ini di eksekusi

//     const state = React.useState(false);
//     [klik, setKlik] = state;

//     const [alert, setAlert] = React.useState(false);

//     const onClick = () => {
//         setKlik(true);
//         setAlert(!alert);
//     };
    
//     // sekali eksekusi
//     // React.useEffect(function(){
//     //     console.log('ayam');
//     // },[]);

//     React.useEffect(function(){
//         console.log('ayam');

//         // unmount (remove event listening) atau clean up
//         return () => {
//             console.log('destroy ayam');
//         }
//     });

//     return (
//         <>
//             <h1 id='judul'>Hallo ini judul</h1>
//             <button onClick={onClick}>Click me pls!</button>

//             {alert && <div>alert</div>}
//         </>
//     );
// }

// let num = 0;
// function App(){

//     // const [login, setLogin] = React.useState(false);

//     // const onClick = () => {
//     //     setLogin(!login);
//     // };

//     const judulRef = React.useRef(null);

//     React.useEffect(() => {
//         const judul = document.getElementById('judul');
//         setInterval(() => {
//             judul.textContent = num++;
//             judulRef.current.textContent = 'Changing Ref';
//         }, 1);
//     });

//     // if(login == true){
//     //     return (
//     //         <>
//     //             <h1>Sudah login</h1>
//     //             <button onClick={onClick}>Logout</button>
//     //         </>
//     //     )
//     // }

//     // return (
//     //     <>
//     //         <h1>Application</h1>
//     //         <p>{(login ? <span>Kamu <b>sudah</b> login</span> : <span>Kamu <b>belum</b> login</span>)}</p>
//     //         <button onClick={onClick}>{(login ? 'Logout' : 'Login')}</button>
//     //     </>
//     // );

//     return (
//         <>
//             <h1 id="judul">Angka</h1>
//             <h1 id="ref" ref={judulRef}>Ref</h1>
//         </>
//     );
// }

// function App(){
//     // array 

//     const animals = ['Ayam', 'Bebek', 'Cacing', 'Domba'];

//     // key harus unique
//     return (
//         <>
//             <ul>
//                 {animals.map((animal)=>{
//                     return <li key={animal}>{animal}</li>
//                 })}
//             </ul>
//         </>
//     );
// }

// function App(){
//     // form 

//     // // uncontrolled
//     // const nameRef = React.useRef(null);

//     // function submit(event) {
//     //     event.preventDefault();

//     //     const nama = nameRef.current.value;

//     //     console.log("Nama : ",nama);

//     // }
//     // return (
//     //     <>
//     //         <form onSubmit={submit}>
//     //             <div>
//     //                 <label for="name">Nama : </label>
//     //                 <input type="text" name="name" id="name" ref={nameRef} />
//     //             </div>
//     //             <button type="submit">Kirim</button>
//     //         </form>
//     //     </>
//     // );

//     // controlled
//     const [name, setName] = React.useState('Ganden');

//     function submit(event) {
//         event.preventDefault();

//         console.log('Nama : ', name);

//     }

//     const onChange = (event) => {
//         setName(event.target.value);
//         // console.log(event.target.value);
//     }

//     return (
//         <>
//             <form onSubmit={submit}>
//                 <div>
//                     <label for="name">Nama : </label>
//                     <input type="text" name="name" id="name" value={name} onChange={onChange} />
//                 </div>
//                 <button type="submit">Submit</button>
//             </form>
//         </>
//     );
// }

// data fetch using then statement
// function App(){

//     React.useEffect(() => {

//         const getData = fetch('https://api.spaceflightnewsapi.net/v3/blogs').then((response) => {
//             return response.json();
//         }).then((response) => {
//             // console.log(response);

//             response.map((data) => {
//                 console.log(data.title);
//             });
//         });

//     }, []);

//     return (
//         <div id="root">
//             <h1>Data Fetch</h1>
//         </div>
//     )

// }

// data fetch using then async
// function App(){

//     const [news, setNews] = React.useState([]);
//     const [loading, setLoading] = React.useState(true);

//     React.useEffect(() => {

//         async function getData(){
//             const request = await fetch('https://api.spaceflightnewsapi.net/v3/blogs');
            
//             const response = await request.json();
    
//             setNews(response);
//             setTimeout(() => {
//                 setLoading(false);
//             }, 2000);
//         }
        
//         getData();

        
//     }, []);

//     return (
//         // ekspresi js harus didalam parent
//         <div id="root">
//             <h1>Data Fetch</h1>
//             {loading ? <i>Loading data....</i> : 
//                 <ul>
//                     {news.map(function(item) {
//                         return <li key={item.id}>{item.title}</li>
//                     })}
//                 </ul>
//             }
//         </div>
//     )

// }

function App(){

    const [activity, setActivity] = React.useState('');
    const [todo, setTodo] = React.useState([]);
    const [edit, setEdit] = React.useState({});
    const [status, setStatus] = React.useState({});

    function generateId(){
        return Date.now();
    }

    const onChange = (event) => {
        setActivity(event.target.value);
    }

    const saveTodoHandler = (event) => {
        event.preventDefault();

        if(activity == ''){
            alert('form harus diisi ya bgst! gua lagi puasa jangan bikin emosi pls. diisi aja gabisa, apa susahnya sih? ketik dulu. gatau caranya ngetik iya? gapernah diajarin ya? dasar!! TK lagi sana, nenen lagi sama emak lu. ');

            return;
        }

        if(edit.id){

            const updateTodo = {
                id: edit.id,
                title: activity
            }

            editTodoIndex = todo.findIndex((todo) => {
                return todo.id == edit.id;
            })

            const updateTodoClone = [... todo];

            updateTodoClone[editTodoIndex] = updateTodo;

            setTodo(updateTodoClone);
            setActivity('');
            setEdit({});

            console.log(todo);
            
            return;
        }
        
        // spread operator
        // ekstrak array lama, data baru dimasukin
        setTodo([... todo, {id: generateId(), title : activity}]);

        setActivity('');
        // console.log(todo);
    }

    const removeTodoHandler = (todoId) => {
        
        const filteredTodo = todo.filter((todo) => {
            return todo.id != todoId;
        })

        setTodo(filteredTodo);
    }
    
    const removeAllTodoHandler = () => {
        
        setTodo([]);
        setActivity('');
        setEdit({});
    }

    const editTodoHandler = (todo) => {
        setActivity(todo.title);
        setEdit(todo);
    }

    const cancelTodoHandler = () => {
        setActivity('');
        setEdit({});
    }

    const checked = (checked) => {
        
        const checkedTodo = {
            id: checked.id,
            title: checked.title,
            status: (checked.status == 'done' ? 'progress' : 'done' )
        }
        
        checkedTodoIndex = todo.findIndex((todo) => {
            return todo.id == checkedTodo.id;
        })
        
        const updateTodoClone = [... todo];
        
        updateTodoClone[checkedTodoIndex] = checkedTodo;

        setTodo(updateTodoClone);
        setActivity('');
        setEdit({});
        
        return;
    }


    return (<>

        <h1>Simple Todo List</h1>
        <form onSubmit={saveTodoHandler}>
            <input type="text" placeholder="Nama Aktivitas" name="activity" value={activity} onChange={onChange}/>
            {edit.id && <button onClick={cancelTodoHandler}>Cancel</button>}
            <button type="submit">{edit.id ? 'Update' : 'Tambah'}</button>
            <button type="button" onClick={removeAllTodoHandler}>Hapus Semua</button>
        </form>

        <ul>
            {todo.map((item)=>{
                return (
                    <>
                        <li key={item.id}>
                            <input type="checkbox" name="status" onClick={ checked.bind(this, item) } />
                            <span style={(item.status == 'done' ? { textDecoration: 'line-through' } : { textDecoration: 'none' })}>{item.title}</span>
                            &nbsp;&nbsp;&nbsp;
                            <button onClick={editTodoHandler.bind(this, item)}>Edit</button>
                            <button onClick={removeTodoHandler.bind(this, item.id)}>Hapus</button>
                        </li>
                    </>
                )
            })}
        </ul>
    
    </>)
}


ReactDOM.render(<App />, root);