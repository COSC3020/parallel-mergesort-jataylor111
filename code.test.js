// Note this test is borrowed from one caden mcfate
const fs = require('fs');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js')+'');

var testSort =
    jsc.forall("array nat", function(arr) {
        var a1 = JSON.parse(JSON.stringify(arr));
        var a2 = JSON.parse(JSON.stringify(arr));
        var sync = a2.sort(function(a, b) {
            return a - b; 
        });
        return mergesort(a1).then(() => {
            return JSON.stringify(a1) === JSON.stringify(sync);
        });
    });

jsc.check(testSort);
