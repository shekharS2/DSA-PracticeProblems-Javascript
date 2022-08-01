function subsetSums(arr, n){
    let sol = [];
    rec(arr, 0, 0, sol);
    sol.sort();
    
    return sol;
}

function rec(arr, i, sum, sol){
    if(i === arr.length) {
        sol.push(sum);
        return;
    }
    
    rec(arr, i + 1, sum + arr[i], sol);
    rec(arr, i + 1, sum, sol);
}

console.log(subsetSums([2, 3], 2));