/*

    - That a test code, I know it's bad, but I am trying to
    know how things work.

*/

let input = `
# Hello everbody, we konw try to think about the difference between me and him
### Let's try a new thing to make it happening faster than usual
> This is a blacqoute
hello this is a paragraph
- Soukaina
- Abdullah
- Nada
- Ali
- Muhammad`

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

    else if(val[0] == ">"){
        output += "<blockquote>" + val.slice(1) + "</blockquote>";
    }

    else if(val[0] == '-'){
        if(split_to_lines[index - 1]?.[0] != '-')
            output += "<ul>";
        
        output += "<li>" + val.slice(1) + "</li>";

        if(split_to_lines[index + 1]?.[0] != '-')
            output += "</ul>";
    }
    
}

document.querySelector("body").innerHTML = output;