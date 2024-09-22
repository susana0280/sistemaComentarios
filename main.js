// const comments=[]
// const inputContainer=document.createElement("div")
// inputContainer.classList.add("inputContainer")

// const input=document.createElement("input")
// input.classList.add("input")

// const commentsContainer=document.querySelector(".comments-container")
// commentsContainer.classList.add("comments-container")
// commentsContainer.appendChild(inputContainer)
// inputContainer.appendChild(input)



// input.addEventListener("keydown",e=>{
//     handlerEnter(e,null)

// })


// //____________FUNCTION HANDLERENTER___________
// function handlerEnter(e,current){

//     if(e.key==="Enter" && e.target.value!==""){

//         const newComment={
//             text:e.target.value,
//             likes:0,
//             responses:[]
//         }

//         if(current===null){
//             comments.unshift(newComment)
            
//         }
//         else{ 
            
//             current.responses.unshift(newComment)
//           }
//             input.value=""
//           commentsContainer.innerHTML=""
//           commentsContainer.appendChild(inputContainer)
//          renderComments(comments,commentsContainer)
//         }
   

    
     
// }

// //_________________FUNCTION RENDERCOMMENTS____________
// function renderComments(arr,parent){
    
//     arr.forEach(element=>{
    
//        const comentContainer=document.createElement("div")
//         comentContainer.classList.add("comentContainer")
//         parent.appendChild(comentContainer)
   
        
//         const textContainer=document.createElement("div")
//         textContainer.classList.add("textContainer")
//         textContainer.textContent=element.text
        
//         const actionsContainer=document.createElement("div")
//         actionsContainer.classList.add("actionsContainer")

//         const replyButton=document.createElement("button")
//         replyButton.textContent="Reply"
//         const likeButton=document.createElement("button")
//         likeButton.textContent=element.likes>0?`Likes ${element.likes}`:"Like"

//         comentContainer.appendChild(textContainer)
//         comentContainer.appendChild(actionsContainer)
//         actionsContainer.appendChild(replyButton)
//         actionsContainer.appendChild(likeButton)

//         const responsesContainer=document.createElement("div")
//         responsesContainer.classList.add("responsesContainer")
//         comentContainer.appendChild(responsesContainer)
           
//         if(element.responses.length>0){
//                 renderComments(element.responses,responsesContainer)
//         }


//         replyButton.addEventListener("click",e=>{
//           const newInput=inputContainer.cloneNode(true)
//            newInput.value=""
//             newInput.focus()
//             newInput.addEventListener("keydown",e=>{
      
//                 handlerEnter(e,element)
//             })
//             comentContainer.insertBefore(newInput,responsesContainer)

//         })
//         likeButton.addEventListener("click",e=>{
//             element.likes++
//              likeButton.textContent=element.likes>0 ? `Likes ${element.likes}`:"LIKE"

//         })
     
       
//     })
  

// }

//_____________________________________________________________________________________________________
// Se define un array vacío que almacenará los comentarios.
const comments = [];

// Se crea un contenedor para la entrada de comentarios.
const inputContainer = document.createElement("div");
inputContainer.classList.add("inputContainer");

// Se crea un campo de entrada para los comentarios.
const input = document.createElement("input");
input.classList.add("input");

// Se selecciona el contenedor de comentarios de la página.
const commentsContainer = document.querySelector(".comments-container");
commentsContainer.classList.add("comments-container");

// Se añaden el inputContainer y el input al contenedor de comentarios.
commentsContainer.appendChild(inputContainer);
inputContainer.appendChild(input);

// Se añade un evento al campo de entrada que se activa cuando se presiona una tecla.
input.addEventListener("keydown", e => {
    handlerEnter(e, null); // Llama a la función handlerEnter cuando se presiona una tecla.
});

//____________FUNCTION HANDLERENTER___________
function handlerEnter(e, current) {
    // Verifica si la tecla presionada es "Enter" y si el input no está vacío.
    if (e.key === "Enter" && e.target.value !== "") {
        // Se crea un nuevo comentario con el texto del input y se inicializan likes y respuestas.
        const newComment = {
            text: e.target.value,
            likes: 0,
            responses: []
        };

        // Si no hay un comentario actual (es un nuevo comentario), se añade al inicio del array de comentarios.
        if (current === null) {
            comments.unshift(newComment);
        } else { 
            // Si hay un comentario actual (es una respuesta a un comentario existente), se añade a sus respuestas.
            current.responses.unshift(newComment);
        }

        // Se limpia el input después de enviar el comentario o respuesta.
        input.value = "";
        
        // Se vacía el contenedor de comentarios y se vuelve a renderizar.
        commentsContainer.innerHTML = "";
        commentsContainer.appendChild(inputContainer);
        renderComments(comments, commentsContainer); // Se llama a la función renderComments para mostrar los comentarios.
    }
}

//_________________FUNCTION RENDERCOMMENTS____________
function renderComments(arr, parent) {
    // Itera sobre el array de comentarios.
    arr.forEach(element => {
        // Se crea un contenedor para el comentario.
        const comentContainer = document.createElement("div");
        comentContainer.classList.add("comentContainer");
        parent.appendChild(comentContainer);

        // Se crea un contenedor para el texto del comentario.
        const textContainer = document.createElement("div");
        textContainer.classList.add("textContainer");
        textContainer.textContent = element.text; // Se asigna el texto del comentario.

        // Se crea un contenedor para las acciones (responder, dar like).
        const actionsContainer = document.createElement("div");
        actionsContainer.classList.add("actionsContainer");

        // Se crean los botones para responder y para dar like.
        const replyButton = document.createElement("button");
        replyButton.textContent = "Reply";
        const likeButton = document.createElement("button");
        likeButton.textContent = element.likes > 0 ? `Likes ${element.likes}` : "Like";

        // Se añaden los contenedores y botones al contenedor del comentario.
        comentContainer.appendChild(textContainer);
        comentContainer.appendChild(actionsContainer);
        actionsContainer.appendChild(replyButton);
        actionsContainer.appendChild(likeButton);

        // Se crea un contenedor para las respuestas y se añade al contenedor del comentario.
        const responsesContainer = document.createElement("div");
        responsesContainer.classList.add("responsesContainer");
        comentContainer.appendChild(responsesContainer);
        
        // Si el comentario tiene respuestas, se renderizan recursivamente.
        if (element.responses.length > 0) {
            renderComments(element.responses, responsesContainer);
        }

        // Evento que se activa al hacer clic en el botón de "Reply".
        replyButton.addEventListener("click", e => {
            // Se clona el inputContainer para permitir múltiples respuestas.
            const newInput = inputContainer.cloneNode(true);
            newInput.value = "";
            newInput.focus();
            newInput.addEventListener("keydown", e => {
                handlerEnter(e, element); // Llama a handlerEnter para registrar una respuesta.
            });

            // Se inserta el nuevo input antes del contenedor de respuestas.
            comentContainer.insertBefore(newInput, responsesContainer);
        });

        // Evento que se activa al hacer clic en el botón de "Like".
        likeButton.addEventListener("click", e => {
            element.likes++; // Incrementa el contador de likes.
            likeButton.textContent = element.likes > 0 ? `Likes ${element.likes}` : "LIKE"; // Actualiza el texto del botón.
        });
    });
}
