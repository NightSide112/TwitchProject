let ssItems = $('.slideshow-item');
const ssPrevButton = document.getElementById('ss-prev-button');
const ssNextButton = document.getElementById('ss-next-button');
let ssItemOne = document.getElementById('ss-position-1');
let ssItemTwo = document.getElementById('ss-position-2');
let ssItemThree = document.getElementById('ss-position-3');
let ssItemFour = document.getElementById('ss-position-4');
let ssItemFive = document.getElementById('ss-position-5');

//Fix addP3Style function

function addP3Style() {
    for(i = 0; i < ssItems.length; i++) {
        if(ssItems[i].id === 'ss-position-3') {
            let ssPosnThree = ssItems[i].children[0];
            let ssVideoButtons = document.createElement('div');
            let ssVBLeft = document.createElement('div');
            let ssVBRight = document.createElement('div');
            ssVideoButtons.classList.add('ss-video-buttons');
            ssVBLeft.classList.add('ss-vb-left');
            ssVBRight.classList.add('ss-vb-right');
            ssVBLeft.innerHTML = 
            `
            <button class="ss-video-pause">
                <i class="bi bi-play-fill"></i>
            </button>
            <form>
                <label for="#slideshow-video-volume">
                    <button type="button" class="ss-video-volume">
                        <i class="bi bi-volume-mute-fill"></i>
                    </button>
                </label>
                <input id="slideshow-video-volume" type="range">
            </form>
            <button class="ss-video-ac">
                <i class="bi bi-graph-up"></i>
            </button>
            `;
            ssVBRight.innerHTML = 
            `
            <button>
                <i class="bi bi-gear-fill"></i>
            </button>
            <button>
                <i class="bi bi-arrow-repeat"></i>
            </button>
            <button>
                <i class="bi bi-square"></i>
            </button>
            <button>
                <i class="bi bi-fullscreen"></i>
            </button>
            `
            ssPosnThree.appendChild(ssVideoButtons);
            ssVideoButtons.appendChild(ssVBLeft);
            ssVideoButtons.appendChild(ssVBRight);
        } else if(ssItems[i].id !== 'ss-position-3'){
            let sth = ssItems[i].children[0].children;
            if(sth.length >= 2) {
                sth[1].remove()
            }
        }
    };
}
addP3Style();

for(i = 0; i < ssItems.length; i++) {
    if(ssItems[i].getAttribute('id') === null) {
        ssItems[i].setAttribute('id', '');
    }
}

ssNextButton.addEventListener('click', function() {
    for(i = ssItems.length; i > 0; i--) {
        // if(ssItems[i] === document.getElementById('ss-position-1')) {
        //     // if(i + 5 < ssItems.length) {
        //     //     ssItems[i + 1].id = 'ss-position-1';
        //     //     ssItems[i + 2].id = 'ss-position-2';
        //     //     ssItems[i + 3].id = 'ss-position-3';
        //     //     ssItems[i + 4].id = 'ss-position-4';
        //     //     ssItems[i + 5].id = 'ss-position-5';
        //     //     ssItems[i].id = '';
        //     //     break
        // //     // }
        // }
        if(ssItems[i] === document.getElementById('ss-position-5')) {
            if(i + 1 < ssItems.length) {
                let ii = i;
                ssItems[i + 1].id = 'ss-position-5';
                ssItems[i + 1].animate ([
                    {left: '900px', opacity: '0', width: '250px', height: '150px'},
                    {left: '598px', opacity: '1', width: '525px', height: '210px'}
                ], {
                    duration: 500,
                    iterations: 1,
                    easing: "ease"
                })
                ssItems[i].id = 'ss-position-4';
                ssItems[i - 1].id = 'ss-position-3';
                ssItems[i - 2].id = 'ss-position-2';
                ssItems[i - 3].id = 'ss-position-1';

                ssItems[i - 4].animate([
                    {left: '112px', opacity: '1', width: '525px', height: '210px'},
                    {left: '90px', opacity: '0', width: '250px', height: '150px'}
                ], {
                    duration: 1000,
                    iterations: 1,
                    easing: "ease"
                });
                setTimeout(function() {
                    ssItems[ii - 4].id = '';
                }, 500)
                break
            }
        }
    }
    addP3Style()
});
ssPrevButton.addEventListener('click', function() {
    for(i = ssItems.length; i > 0; i--) {
        if(ssItems[i] === document.getElementById('ss-position-5')) {
            if(i - 5 >= 0) {
                let ii = i;
                ssItems[i - 1].id = 'ss-position-5';
                ssItems[i - 2].id = 'ss-position-4';
                ssItems[i - 3].id = 'ss-position-3';
                ssItems[i - 4].id = 'ss-position-2';
                ssItems[i - 5].id = 'ss-position-1';
                ssItems[i - 5].animate ([
                    {left: '90px', opacity: '0', width: '250px', height: '150px'},
                    {left: '112px;', opacity: '1', width: '525px', height: '210px'}
                ], {
                    duration: 1000,
                    iterations: 1,
                    easing: "ease"
                })
                ssItems[i].animate([
                    {left: '598px', opacity: '1', width: '525px', height: '210px'},
                    {left: '900px', opacity: '0', width: '250px', height: '150px'}
                ], {
                    duration: 1000,
                    iterations: 1,
                    easing: "ease"
                });
                setTimeout(function() {
                    ssItems[ii].id = '';
                }, 1000)
                break
            }
        }
    }
    addP3Style()
});