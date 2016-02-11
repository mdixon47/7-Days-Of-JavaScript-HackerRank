/*
Task

Write a JavaScript function to sort an array, library, of objects containing information about books by their title.
The array library is given in the template of the code. You only have to fill in the relevant parts of the code to print the sorted library array by the title,
in lexicographical order. No input and no sample test cases, you can directly submit your solution.
*/

function compare(a, b){
    if(a.title < b.title) return -1;
    if(a.title > b.title) return 1;
    return 0;
}


function sortLibrary() {
    // var library is defined, use it in your code
    // use console.log(library) to output the sorted library data
    library.sort(compare);
    console.log(library);
}

// tail starts here
var library = [
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        libraryID: 1254
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        libraryID: 4264
    },
    {
        author: 'Suzanne Collins',
        title: 'Mockingjay: The Final Book of The Hunger Games',
        libraryID: 3245
    }
];

sortLibrary();
