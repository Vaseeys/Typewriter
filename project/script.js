// Book texts (public domain excerpts for demo)
const books = [
    {
        title: "Pride and Prejudice",
        text: "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife. However little known the feelings or views of such a man may be on his first entering a neighbourhood, this truth is so well fixed in the minds of the surrounding families, that he is considered the rightful property of some one or other of their daughters. 'My dear Mr. Bennet,' said his lady to him one day, 'have you heard that Netherfield Park is let at last?' Mr. Bennet replied that he had not. 'But it is,' returned she; 'for Mrs. Long has just been here, and she told me all about it.' Mr. Bennet made no answer. 'Do you not want to know who has taken it?' cried his wife impatiently. 'You want to tell me, and I have no objection to hearing it.' This was invitation enough. 'Why, my dear, you must know, Mrs. Long says that Netherfield is taken by a young man of large fortune from the north of England; that he came down on Monday in a chaise and four to see the place, and was so much delighted with it, that he agreed with Mr. Morris immediately; that he is to take possession before Michaelmas, and some of his servants are to be in the house by the end of next week."
    },
    {
        title: "1984",
        text: "It was a bright cold day in April, and the clocks were striking thirteen. Winston Smith, his chin nuzzled into his breast in an effort to escape the vile wind, slipped quickly through the glass doors of Victory Mansions, though not quickly enough to prevent a swirl of gritty dust from entering along with him. The hallway smelt of boiled cabbage and old rag mats. At one end of it a coloured poster, too large for indoor display, had been tacked to the wall. It depicted simply an enormous face, more than a metre wide: the face of a man of about forty-five, with a heavy black moustache and ruggedly handsome features. Winston made for the stairs. It was no use trying the lift. Even at the best of times it was seldom working, and at present the electric current was cut off during daylight hours. It was part of the economy drive in preparation for Hate Week. The flat was seven flights up, and Winston, who was thirty-nine and had a varicose ulcer above his right ankle, went slowly, resting several times on the way. On each landing, opposite the lift-shaft, the poster with the enormous face gazed from the wall. It was one of those pictures which are so contrived that the eyes follow you about when you move. BIG BROTHER IS WATCHING YOU, the caption beneath it ran."
    },
    {
        title: "The Great Gatsby",
        text: "In my younger and more vulnerable years my father gave me some advice that I've been turning over in my mind ever since. 'Whenever you feel like criticizing anyone,' he told me, 'just remember that all the people in this world haven't had the advantages that you've had.' He didn't say any more, but we've always been unusually communicative in a reserved way, and I understood that he meant a great deal more than that. In consequence, I'm inclined to reserve all judgments, a habit that has opened up many curious natures to me and also made me the victim of not a few veteran bores. The abnormal mind is quick to detect and attach itself to this quality when it appears in a normal person, and so it came about that in college I was unjustly accused of being a politician, because I was privy to the secret griefs of wild, unknown men. Most of the confidences were unsought—frequently I have feigned sleep, preoccupation, or a hostile levity when I realized by some unmistakable sign that an intimate revelation was quivering on the horizon; for the intimate revelations of young men, or at least the terms in which they express them, are usually plagiaristic and marred by obvious suppressions. Reserving judgments is a matter of infinite hope. I am still a little afraid of missing something if I forget that, as my father snobbishly suggested, and I snobbishly repeat, a sense of the fundamental decencies is parcelled out unequally at birth."
    },
    {
        title: "To Kill a Mockingbird",
        text: "When he was nearly thirteen, my brother Jem got his arm badly broken at the elbow. When it healed, and Jem's fears of never being able to play football were assuaged, he was seldom self-conscious about his injury. His left arm was somewhat shorter than his right; when he stood or walked, the back of his hand was at right angles to his body, his thumb parallel to his thigh. He couldn't have cared less, so long as he could pass and punt. When enough years had gone by to enable us to look back on them, we sometimes discussed the events leading to his accident. I maintain that the Ewells started it all, but Jem, who was four years my senior, said it started long before that. He said it began the summer Dill came to us, when Dill first gave us the idea of making Boo Radley come out. I said if he wanted to take a broad view of the thing, it really began with Andrew Jackson. If General Jackson hadn't run the Creeks up the creek, Simon Finch would never have paddled up the Alabama, and where would we be if he hadn't? We were far too old to settle an argument with a fist-fight, so we consulted Atticus. Our father said we were both right. Being Southerners, it was a source of shame to some members of the family that we had no recorded ancestors on either side of the Battle of Hastings. All we had was Simon Finch, a fur-trapping apothecary from Cornwall whose piety was exceeded only by his stinginess."
    },
    {
        title: "Moby Dick",
        text: "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world. It is a way I have of driving off the spleen and regulating the circulation. Whenever I find myself growing grim about the mouth; whenever it is a damp, drizzly November in my soul; whenever I find myself involuntarily pausing before coffin warehouses, and bringing up the rear of every funeral I meet; and especially whenever my hypos get such an upper hand of me, that it requires a strong moral principle to prevent me from deliberately stepping into the street, and methodically knocking people's hats off—then, I account it high time to get to sea as soon as I can. This is my substitute for pistol and ball. With a philosophical flourish Cato throws himself upon his sword; I quietly take to the ship. There is nothing surprising in this. If they but knew it, almost all men in their degree, some time or other, cherish very nearly the same feelings towards the sea with me. There now is your insular city of the Manhattoes, belted round by wharves as Indian isles by coral reefs—commerce surrounds it with her surf. Right and left, the streets take you waterward. Its extreme downtown is the battery, where that noble mole is washed by waves, and cooled by breezes, which a few hours previous were out of sight of land. Look at the crowds of water-gazers there."
    },
    {
        title: "The Catcher in the Rye",
        text: "If you really want to hear about it, the first thing you'll probably want to know is where I was born, and what my lousy childhood was like, and how my parents were occupied and all before they had me, and all that David Copperfield kind of crap, but I don't feel like going into it, if you want to know the truth. In the first place, that stuff bores me, and in the second place, my parents would have about two hemorrhages apiece if I told anything pretty personal about them. They're quite touchy about anything like that, especially my father. They're nice and all—I'm not saying that—but they're also touchy as hell. Besides, I'm not going to tell you my whole goddam autobiography or anything. I'll just tell you about this madman stuff that happened to me around last Christmas just before I got pretty run-down and had to come out here and take it easy. I mean that's all I told D.B. about, and he's my brother and all. He may be only a prostitute or something when he's in Hollywood, but he's a nice guy, and I like him a lot in spite of it, and after all, he's my brother. Get it? Anyway, I'm sort of glad they've got the idea I was a madman or something. I wouldn't care if they told everybody in the world I was a madman. So what? It doesn't make any difference to me. That's all."
    },
    {
        title: "Brave New World",
        text: "A squat grey building of only thirty-four stories. Over the main entrance the words, CENTRAL LONDON HATCHERY AND CONDITIONING CENTRE, and, in a shield, the World State's motto, COMMUNITY, IDENTITY, STABILITY. The enormous room on the ground floor faced towards the north. Cold for all the summer beyond the panes, for all the tropical heat of the room itself, a harsh thin light glared through the windows, hungrily seeking some draped lay figure, some pallid shape of academic goose-flesh, but finding only the glass and nickel and bleakly shining porcelain of a laboratory. Wintriness responded to wintriness. The overalls of the workers were white, their hands gloved with a pale corpse-coloured rubber. The light was frozen, dead, a ghost. Only from the yellow barrels of the microscopes did it borrow a certain rich and living substance, lying along the polished tubes like butter, streak after luscious streak in long recession down the work tables. 'And this,' said the Director opening the door, 'is the Fertilizing Room.' Bent over their instruments, three hundred Fertilizers were plunged, as the Director of Hatcheries and Conditioning entered the room, in the scarcely breathing silence, the absent-minded, soliloquizing hum or whistle, of absorbed concentration. A troop of newly arrived students, very young, pink and callow, followed nervously, rather abjectly, at the Director's heels. Each of them carried a notebook, in which, whenever the great man spoke, he desperately scribbled."
    },
    {
        title: "Lord of the Flies",
        text: "The boy with fair hair lowered himself down the last few feet of rock and began to pick his way toward the lagoon. Though he had taken off his school sweater and trailed it now from one hand, his grey shirt stuck to him and his hair was plastered to his forehead. All round him the long scar smashed into the jungle was a bath of heat. He was clambering heavily among the creepers and broken trunks when a bird, a vision of red and yellow, flashed upwards with a witch-like cry; and this cry was echoed by another. 'Hi!' it said. 'Wait a minute!' The undergrowth at the side of the scar was shaken and a multitude of raindrops fell pattering. 'Wait a minute,' the voice said. 'I got caught up.' The fair boy stopped and jerked his stockings with an automatic gesture that made the jungle seem for a moment like the Home Counties. The voice spoke again. 'I can't hardly move with all these creeper things.' The owner of the voice came backing out of the undergrowth so suddenly that he nearly fell over the fair boy. The fair boy was wearing the remains of an old black cap and was filled with a sudden curiosity. 'What's your name?' 'Ralph.' The other boy told his name. 'Where does the scar come from?' Ralph said. Piggy blinked. 'I don't know. I was with my auntie. She got me on the head—knocked me out, I suppose. When I woke up, the plane had gone. So I followed the scar.'"
    },
    {
        title: "Animal Farm",
        text: "Mr. Jones, of the Manor Farm, had locked the hen-houses for the night, but was too drunk to remember to shut the pop-holes. With the ring of light from his lantern dancing from side to side, he lurched across the yard, kicked off his boots at the back door, drew himself a last glass of beer from the barrel in the scullery, and made his way up to bed, where Mrs. Jones was already snoring. As soon as the light in the bedroom went out there was a stirring and a fluttering all through the farm buildings. Word had gone round during the day that old Major, the prize Middle White boar, had had a strange dream on the previous night and wished to communicate it to the other animals. It had been agreed that they should all meet in the big barn as soon as Mr. Jones was safely out of the way. Old Major (so he was always called, though the name under which he had been exhibited was Willingdon Beauty) was so highly regarded on the farm that everyone was quite ready to lose an hour's sleep in order to hear what he had to say. At one end of the big barn, on a sort of raised platform, Major was already ensconced on his bed of straw, under a lantern which hung from a beam. He was twelve years old and had lately grown rather stout, but he was still a majestic-looking pig, with a wise and benevolent appearance in spite of the fact that his tushes had never been cut. Before long the other animals began to arrive and make themselves comfortable after their different fashions. First came the three dogs, Bluebell, Jessie, and Pincher, and then the pigs, who settled down in the straw immediately in front of the platform. The hens perched themselves on the window-sills, the pigeons fluttered up to the rafters, the sheep and cows lay down behind the pigs and began to chew the cud. The two cart-horses, Boxer and Clover, came in together, walking very slowly and setting down their vast hairy hoofs with great care lest there should be some small animal concealed in the straw."
    },
    {
        title: "Fahrenheit 451",
        text: "It was a pleasure to burn. It was a special pleasure to see things eaten, to see things blackened and changed. With the brass nozzle in his fists, with this great python spitting its venomous kerosene upon the world, the blood pounded in his head, and his hands were the hands of some amazing conductor playing all the symphonies of blazing and burning to bring down the tatters and charcoal ruins of history. With his symbolic helmet numbered 451 on his stolid head, and his eyes all orange flame with the thought of what came next, he flicked the igniter and the house jumped up in a gorging fire that burned the evening sky red and yellow and black. He strode in a swarm of fireflies. He wanted above all, like the old joke, to shove a marshmallow on a stick in the furnace, while the flapping pigeon-winged books died on the porch and lawn of the house. While the books went up in sparkling whirls and blew away on a wind turned dark with burning. Montag grinned the fierce grin of all men singed and driven back by flame. He knew that when he returned to the firehouse, he might wink at himself, a minstrel man, burnt-corked, in the mirror. Later, going to sleep, he would feel the fiery smile still gripped by his face muscles, in the dark. It never went away, that smile, it never ever went away, as long as he remembered."
    }
];

let currentBookIndex = 0;
let currentText = '';
let startTime = null;
let displayTimer = null;
let isTestActive = false;
let typedChars = 0;
let correctChars = 0;
let bestScore = localStorage.getItem('bestScore') || 0;

// DOM elements
const startScreen = document.getElementById('start-screen');
const testScreen = document.getElementById('test-screen');
const textDisplay = document.getElementById('text-display');
const wpmDisplay = document.getElementById('wpm');
const accuracyDisplay = document.getElementById('accuracy');
const timeDisplay = document.getElementById('time');
const bestScoreDisplay = document.getElementById('best-score');
const restartBtn = document.getElementById('restart-btn');
const backBtn = document.getElementById('back-btn');
const bookList = document.getElementById('book-list');

// Initialize
bestScoreDisplay.textContent = bestScore;
populateBookList();

// Event listeners
restartBtn.addEventListener('click', restartTest);
backBtn.addEventListener('click', backToBooks);
textDisplay.addEventListener('click', () => textDisplay.focus());

function populateBookList() {
    bookList.innerHTML = '';
    books.forEach((book, index) => {
        const bookItem = document.createElement('div');
        bookItem.className = 'book-item';
        bookItem.innerHTML = `
            <h3>${book.title}</h3>
            <p>${book.text.substring(0, 100)}...</p>
        `;
        bookItem.addEventListener('click', () => selectBook(index));
        bookList.appendChild(bookItem);
    });
}

function selectBook(index) {
    currentBookIndex = index;
    currentText = books[index].text;
    showTestScreen();
}

function displayText() {
    textDisplay.innerHTML = currentText.split('').map((char, index) => 
        `<span class="char ${index === 0 ? 'current' : ''}">${char === ' ' ? '&nbsp;' : char}</span>`
    ).join('');
}

function showTestScreen() {
    startScreen.classList.add('hidden');
    testScreen.classList.remove('hidden');
    resetTest();
    displayText();
    
    // Focus on text display and add keydown listener
    setTimeout(() => {
        textDisplay.focus();
        // Remove any existing listeners to prevent duplicates
        window.removeEventListener('keydown', handleKeyDown);
        window.addEventListener('keydown', handleKeyDown);
    }, 100);
}

function startTest() {
    if (isTestActive) return;
    
    isTestActive = true;
    startTime = Date.now();
    typedChars = 0;
    correctChars = 0;
    restartBtn.disabled = false;
    
    // Update time display continuously
    displayTimer = setInterval(updateTimeDisplay, 100);
    updateDisplay();
}

function backToBooks() {
    if (displayTimer) {
        clearInterval(displayTimer);
        displayTimer = null;
    }
    
    isTestActive = false;
    startTime = null;
    
    // Remove keydown listener
    window.removeEventListener('keydown', handleKeyDown);
    
    // Reset display
    resetTest();
    
    // Switch screens
    testScreen.classList.add('hidden');
    startScreen.classList.remove('hidden');
    
    textDisplay.blur();
}

function resetTest() {
    isTestActive = false;
    startTime = null;
    
    if (displayTimer) {
        clearInterval(displayTimer);
        displayTimer = null;
    }
    
    timeDisplay.textContent = '0';
    wpmDisplay.textContent = '0';
    accuracyDisplay.textContent = '100%';
    restartBtn.disabled = true;
    typedChars = 0;
    correctChars = 0;
}

function restartTest() {
    // Clear existing timer
    if (displayTimer) {
        clearInterval(displayTimer);
        displayTimer = null;
    }
    
    // Reset all state
    isTestActive = false;
    startTime = null;
    typedChars = 0;
    correctChars = 0;
    
    // Reset display
    timeDisplay.textContent = '0';
    wpmDisplay.textContent = '0';
    accuracyDisplay.textContent = '100%';
    restartBtn.disabled = true;
    
    // Redisplay text
    displayText();
    
    // Refocus
    setTimeout(() => {
        textDisplay.focus();
    }, 100);
}

function handleKeyDown(e) {
    // Only handle keys when test screen is visible
    if (testScreen.classList.contains('hidden')) {
        return;
    }
    
    // Start test on first keypress
    if (!isTestActive && e.key.length === 1) {
        startTest();
    }
    
    if (!isTestActive) return;
    
    // Prevent default behavior for spacebar and special keys
    if (e.key === ' ' || e.key === 'Backspace' || e.key === 'Enter' || e.key === 'Tab') {
        e.preventDefault();
    }
    
    const chars = textDisplay.querySelectorAll('.char');
    
    if (e.key === 'Backspace') {
        if (typedChars > 0) {
            typedChars--;
            
            // Remove styling from current character
            if (chars[typedChars]) {
                chars[typedChars].classList.remove('correct', 'incorrect', 'current');
                chars[typedChars].classList.add('current');
            }
            
            // Remove current from next character if it exists
            if (chars[typedChars + 1]) {
                chars[typedChars + 1].classList.remove('current');
            }
            
            // Recalculate correctChars
            correctChars = 0;
            for (let i = 0; i < typedChars; i++) {
                if (chars[i].classList.contains('correct')) {
                    correctChars++;
                }
            }
        }
    } else if (e.key.length === 1) {
        // Only process single character keys (no Control, Shift, etc.)
        const charTyped = e.key;
        
        if (typedChars < currentText.length) {
            // Remove current class from this character
            chars[typedChars].classList.remove('current');
            
            // Check if typed character matches
            if (charTyped === currentText[typedChars]) {
                chars[typedChars].classList.add('correct');
                correctChars++;
            } else {
                chars[typedChars].classList.add('incorrect');
            }
            
            typedChars++;
            
            // Add current class to next character
            if (chars[typedChars]) {
                chars[typedChars].classList.add('current');
            }
            
            // Auto-scroll to keep current character visible
            const currentChar = chars[typedChars];
            if (currentChar) {
                const charRect = currentChar.getBoundingClientRect();
                const containerRect = textDisplay.getBoundingClientRect();
                
                if (charRect.bottom > containerRect.bottom - 50) {
                    textDisplay.scrollTop += charRect.bottom - containerRect.bottom + 50;
                }
            }
        }
    }
    
    updateDisplay();
    
    // Check if test finished
    if (typedChars >= currentText.length) {
        endTest();
    }
}

function updateTimeDisplay() {
    if (!startTime) return;
    
    const elapsed = Math.floor((Date.now() - startTime) / 1000);
    timeDisplay.textContent = elapsed;
}

function updateDisplay() {
    if (!startTime) return;
    
    // Calculate WPM
    const timeElapsed = (Date.now() - startTime) / 1000 / 60; // minutes
    const wordsTyped = correctChars / 5; // standard: 5 chars = 1 word
    const wpm = timeElapsed > 0 ? Math.round(wordsTyped / timeElapsed) : 0;
    wpmDisplay.textContent = wpm;
    
    // Calculate accuracy
    const accuracy = typedChars > 0 ? Math.round((correctChars / typedChars) * 100) : 100;
    accuracyDisplay.textContent = `${accuracy}%`;
}

function endTest() {
    if (displayTimer) {
        clearInterval(displayTimer);
        displayTimer = null;
    }
    
    isTestActive = false;
    restartBtn.disabled = false;
    
    // Update best score
    const finalWPM = parseInt(wpmDisplay.textContent);
    if (finalWPM > bestScore) {
        bestScore = finalWPM;
        localStorage.setItem('bestScore', bestScore);
        bestScoreDisplay.textContent = bestScore;
    }
    
    // Show completion message
    const accuracy = accuracyDisplay.textContent;
    const timeTaken = timeDisplay.textContent;
    setTimeout(() => {
        alert(`Test completed!\n\nWPM: ${finalWPM}\nAccuracy: ${accuracy}\nTime: ${timeTaken}s\n\nBest Score: ${bestScore} WPM`);
        backToBooks();
    }, 100);
}