function useGenres(selected) {
    if(selected.length<1) return "";
    const ids=selected.map((g)=>g.id);
    return ids.reduce((acc,curr)=>acc+","+curr);
}

export default useGenres;