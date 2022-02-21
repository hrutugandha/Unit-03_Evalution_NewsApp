let url = `https://shrouded-earth-23381.herokuapp.com/api/headlines/india`;

async function apiCall(url) {


    //add api call logic here

    try{
        let res = await fetch(url);
        let articles = res.json();

        appendArticles(articles, main);
        return articles;
    }
    catch(err){
        console.log(err)
    }
}
apiCall(url)
function appendArticles(articles, main) {

    //add append logic here



}

export { apiCall, appendArticles }