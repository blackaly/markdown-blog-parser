let input = `
# Hello everbody, we konw try to think about the difference between me and him
### Let's try a new thing to make it happening faster than usual`

// split string by line using regular expression.
let split_to_lines = input.match(/[^\r\n]+/g);

console.log(split_to_lines);

let output = "";

for(let [index, val] of split_to_lines.entries()){
    let head_cnt = 0;
    if(val[0] == '#'){
        ++head_cnt;
        if(val[1] == '#') ++head_cnt;
        if(val[2] == '#') ++head_cnt;

        output += '<h' + head_cnt + '>';
        output += val.slice(head_cnt + 1);
        output +=  '</h' + head_cnt + '>';
    }

    
}

document.querySelector("body").innerHTML = output;