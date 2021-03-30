const apiUrl = `http://localhost:3000/`;

// GET

const getData = async () => {
    try {
        const result = await fetch(apiUrl, {
            method: "GET",
            body: JSON.stringify(getData),
            headers: {
                "Content-Type": "application/json",
            },
        });
        // console.log(result);
        const data = await result.json();
        // console.log("Hier is GET data ", data);
        return data
    } catch (error) {
        console.log(error)
    }
};

// POST

const postData = async (todo) => {
    try {
        const res = await fetch(apiUrl, {
            method: "POST",
            body: JSON.stringify({
                "description": todo,
                "done": false
            }),
            headers: {
                "Content-Type": "application/json",
            },
        });
        // console.log("Result", res);
        return res;
    }
    catch (error) {
        console.log(error)
    }
};

// PUT

const putData = async (todo) => {

    const result = await fetch(`${apiUrl}${todo._id}`, {
        method: "PUT",
        redirect: "follow",
        body: JSON.stringify(todo)
        ,
        headers: {
            "Content-Type": "application/json",
        }
    })

        // }).then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    return result
}

//DELETE
const deleteData = async (id) => {

    await fetch(`${apiUrl}${id}`, {
        method: "DELETE"
    });

}












// const getData = async function () {
//     try {
//         const result = await fetch(apiUrl, {
//             method: "GET",
//             body: JSON.stringify(getData),
//             headers: {
//                 "Content-Type": "application/json",
//             },
//         });
//         console.log(result);
//         const data = await result.json();
//         console.log("Hier is GET data ", data);
//         return data
//     } catch (error) {
//         console.log(error)
//     }
// };



// const postData = async function () {
//     const myInput = document.getElementById("myText").value;
//     try {
//         const result = await fetch(apiUrl, {
//             method: "POST",
//             body: JSON.stringify({
//                 "description": myInput,
//                 "done": false
//             }),
//             headers: {
//                 "Content-Type": "application/json",
//             },
//         });
//         console.log(result);
//         const data = await result.json();
//         console.log("Hier is POST data ", data);
//         return data
//     } catch (error) {
//         console.log(error)
//     }
// };


// const deleteData = async function (id) {

//     try {
//         const result = await fetch(`${apiUrl}/${id}`, {
//             method: "DELETE",
//         });
//         console.log("Resultaat: ", result);
//         return await result.json();


//     } catch (error) {
//         console.log(error)
//     }
// }




// const data = { description: "buy oatmeal", done: false };
// fetch(apiUrl, {
//     method: "POST",
//     body: JSON.stringify(data),
//     headers: {
//         "Content-Type": "application/json",
//     },
// });

// const waitForData = async function () {

//     try {
//         const result = await fetch(apiUrl, { method: "GET" });
//         const data = await result.json();
//         return data
//     } catch (error) {
//         console.log(error)
//     }
//     console.log("Hier is de data ", data);
// };




