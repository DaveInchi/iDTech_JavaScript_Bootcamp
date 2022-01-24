var words = ["This ", "is ", "JavaScript ", "Bootcamp!"];
var sentence = "";

function createSentence(x)
{
    for(let i = 0; i < 4; i++)
    {
        sentence += x[i];
    }
    return sentence;
}
console.log(createSentence(words));