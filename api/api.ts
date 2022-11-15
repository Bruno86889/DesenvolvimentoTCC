import matter from 'gray-matter';

const postsDir = path.join(process.cwd(),"posts")

function getTitles(){
    return fs.readdir(postsDir)
}

function getPostByTitle(slug:string,fields=[]){
    const realSlug = slug.replace(/\.mdx$/,"");
    return realSlug
}