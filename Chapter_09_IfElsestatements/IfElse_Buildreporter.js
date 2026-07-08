let build_percentage=61;
if(build_percentage===100){
    console.log("Green Build");
}else if(build_percentage>=90 || build_percentage===99){
    console.log("Stable Build");
}else if(build_percentage>=70 || build_percentage===89){
    console.log("Unstable Build");
}else if(build_percentage<70){
    console.log("Broken Build - Please block the release");
}