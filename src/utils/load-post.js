export const loadPost = async () =>{
    
    const postsRespnse = fetch("https://jsonplaceholder.typicode.com/posts");
    const photosRespnse = fetch("https://jsonplaceholder.typicode.com/photos");

    const [posts, photos] = await Promise.all([postsRespnse, photosRespnse]);

    const postsJson = await posts.json();
    const photosJson = await photos.json();

    const postAndPhotos = postsJson.map((post, index) => {
      return { ...post, cover: photosJson[index].url };
    });
    return postAndPhotos;
}