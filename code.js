// Like we talked about in class I wanted to do it with map reduce but I just couldn't get the merge to work in the reduce
// So I am doing it like I did my async functions and running the asynchronous functions in parallel
// Using async and promises allows the regular mergesort to become parallel while staying almost completely the same

const async = require('async');

// mergesort, works like the one from the slides
async function mergesort(x) {
    // Empty/Size one
    if(x.length == 0) {
        return [];
    }
    if(x.length == 1) {
        return x;
    }
    let tmp = [];   

    // Instead of just calling msort like in the slides we have to await the results
    await msort(x, 0, x.length - 1, tmp); 
}

async function msort(x, lo, hi, tmp) {
    if (lo >= hi) return;
    let mid = Math.floor((lo + hi) / 2);
    // Similar to mergesort these are basically the same calls as from the regular mergesort shown on the slides
    // but now in order to be parallelized they have to become promises, which I got from the async documentation
    const msort1 = msort(x, lo, mid, tmp);
    const msort2 = msort(x, mid + 1, hi, tmp);
    await Promise.all([msort1, msort2]);
    // Merge as normal
    merge(x, lo, mid, hi, tmp)

}

// merge, works basically the same as before, just now it is an async function
async function merge(x, lo, mid, hi, tmp) {
    let a = lo, b = mid+1;
    for (let k = lo; k <= hi; k++) {
        if (a <= mid && (b > hi || x[a] < x[b])) {
            tmp[k] = x[a++];
        } else {
            tmp[k] = x[b++];
        }
    }
    for (let k = lo; k <= hi; k++) {
        x[k] = tmp[k];
    }
}


// let arr = [3,5,8,4,6,7,2,1]; 
// console.log(mergesort(arr));
// console.log(JSON.stringify(mergesort(arr)));
