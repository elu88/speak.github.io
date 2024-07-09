const wordStarters = [
    { english: 'Who', amharic: 'ማን' },
    { english: 'What', amharic: 'ምን' },
    { english: 'Why', amharic: 'ለምን' },
    { english: 'When', amharic: 'መቼ' },
    { english: 'Which', amharic: 'የትኛው' },
    { english: 'How', amharic: 'እንዴት' },
    { english: 'Since when', amharic: 'ከመቼ ጀምሮ'}
];


function populateList(id, phrases) {
    const ul = document.getElementById(id);
    phrases.forEach(phrase => {
        const li = document.createElement('li');
        li.textContent = `${phrase.english} - ${phrase.amharic}`;
        ul.appendChild(li);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    populateList('word-starters', wordStarters);
    populateList('transition-words', transitionWords);
});
