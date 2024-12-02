const apiKey = "sxsftxBO3J0gPCJYedTZe9yxD7ptuuAyzmynzOtD"

function buildURL(topics, questions, level) {
     return `https://quizapi.io/api/v1/questions?apiKey=${apiKey}&limit=${questions}&category=${topics}&difficulty=${level}`
}
async function getQuiz(topics, questions, level) {
    const url = buildURL(topics, questions, level);
    let response = await fetch(url);
    return await response.json();
}

module.exports = getQuiz;