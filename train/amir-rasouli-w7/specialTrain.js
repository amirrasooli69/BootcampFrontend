function kebabToPascalCase(sentence) {
    const words = sentence.split(' ');
    const transformedWords = words.map(word => {
        // if (word.startsWith('-')) { 
            const parts = word.split('-');
            const pascalCaseWord = parts.map(part => part.charAt(0).toUpperCase() + part.slice(1)).join('');
            return pascalCaseWord;
        // } else {
            // return word;
        // }
    });
    return transformedWords.join(' ');
}


const sentence = "hello-amir-rasouli my-job-is-programing ";
const result = kebabToPascalCase(sentence);
console.log(result); 