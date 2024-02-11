//ex 1 

async function afficherUsers() {
    const reponse = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
    const Users = await reponse.json()
    console.log(reponse);
    }
    afficherUsers().then(()=>console.log("les films ont été affichés"));

//ex 2

async function auteurs(posts){
    try {
    const reponse = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
    const posts = await reponse.json()
    const auteurs = posts.map(post => post.userId)
    
    console.log("les auteures sont", auteurs);
    return auteurs;
}
catch(erreur){
    console.error("une erreur est survenue", erreur);
}
}
auteurs().then(() => console.log("ils sont affiches"))

//ex 3
async function auteursPosts(auteurs){
    try{
    const reponse = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
    const posts = await reponse.json()
    const ids = posts.map(post => post.id)

    const filterPost = auteurs
    ? posts.filter(post => auteurs.includes(post.UserId))
    : posts;

    const filterIds = filterPost.map(post =>post.id)
    console.log("les commentaires sont",filterIds); 
    }
    catch{
        console.error("ne marche pas",erreur);
    }
}
auteursPosts([1])

//ex 4 
// peguei a tabela aqui
async function afficherComments() {
    const reponse = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=10');
    const comments = await reponse.json()
    console.log("Le nombre de commentaires est", comments.length);
    }
    afficherComments().then(()=>console.log("les commentaires ont été affichés"));


// peguei o PostId aqui
async function commentsPosts(){
    try{

    
    const reponse = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=10')
    const posts = await reponse.json()

    const postIds = comments.map(comment =>comment.postId)
    console.log("Les IDs des posts associés aux commentaires sont", postIds);
    }
    catch{
        console.error("ne marche pas");
    }}

    //aqui eu tenho que pegar o id e fazer o limite por PostId
    async function CommentairePerPostId(postIds){
        try{
        const reponse = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=10')
        const posts = await reponse.json()
        
            console.log("Les commentaires pour le Post ID", postId, "sont", comments);
        }
        catch{
            console.error("ne marche pas");
        }
    }
CommentairePerPostId(1)

/* errado, quase
//ex 4 
// peguei a tabela aqui
async function afficherComments() {
    const reponse = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=10');
    const comment = await reponse.json()
    console.log(reponse);
    }
    afficherComments().then(()=>console.log("les commentaires ont été affichés"));


// peguei o PostId aqui
async function commentsPosts(){
    try{

    
    const reponse = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=10')
    const posts = await reponse.json()
    const ids = posts.map(post => post.postId)

    const filterIds = filterPost.map(post =>post.postId)
    console.log("les commentaires sont",filterIds); 
    }
    catch{
        console.error("ne marche pas");
    }}

    //aqui eu tenho que pegar o id e fazer o limite por PostId
    async function CommentairePerPostId(filterIds){
        try{
        const reponse = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=10')
        const posts = await reponse.json()
        const ids = posts.map(post => post.id)
    
        const filterPost = auteurs
        ? posts.filter(post => commentsPosts.includes(post.postId))
        : posts;
        posts 
    
        const filterComments = filterPost.map(post =>post.id)
        console.log("les commentaires sont",filterComments); 
        }
        catch{
            console.error("ne marche pas");
        }
    }
*/ 

//ex 1.2
function afficherUsers2(){
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
    .then(function (reponse) {console.log('La réponse', reponse)})
}
afficherUsers2()

//ex 2.2

function afficherUsers2(){
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
    .then(function (reponse) {console.log('La réponse', reponse)})
        .then((reponse)=>reponse.json())
        .then(data=>{
            let datas = data;
                datas.map((data)=>{
                    console.log(data.name);
                })
        })
}

//ex 3.3
function auteursPosts2(userId){
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
        .then((reponse)=>reponse.json())
        .then(data=>{
            let datas = data;
                datas.map((data)=>{
                    console.log(data);
                })
        })
}
auteursPosts2(2)

//ex 4.4
function CommentairePerPostId2(){ 
    function auteursPosts2(userId){
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
            .then((reponse)=>reponse.json())
            .then(data=>{
                        console.log(data.length);
                    })
            }
    }
CommentairePerPostId2(1)