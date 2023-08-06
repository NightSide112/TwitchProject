let ssItems = $('.slideshow-item');
const ssPrevButton = document.getElementById('ss-prev-button');
const ssNextButton = document.getElementById('ss-next-button');
let ssItemZero = document.getElementById('ss-position-0');
let ssItemOne = document.getElementById('ss-position-1');
let ssItemTwo = document.getElementById('ss-position-2');
let ssItemThree = document.getElementById('ss-position-3');
let ssItemFour = document.getElementById('ss-position-4');
let ssItemFive = document.getElementById('ss-position-5');
let ssItemSix = document.getElementById('ss-position-6');

const streamers = [
    {
        name: "Jack",
        image: "https://techbriefly.com/wp-content/uploads/2023/02/AI-impersonation-Fake-name-generators-this-person-does-not-exist-images-and-more-1.jpg",
        subscibers: 2569
    },
    {
        name: "Tom",
        image: "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=2000",
        subscibers: 658
    },
    {
        name: "Dan",
        image: "https://img.freepik.com/free-photo/emotions-people-concept-headshot-serious-looking-handsome-man-with-beard-looking-confident-determined_1258-26730.jpg?w=2000",
        subscibers: 8303
    },
    {
        name: "Mia",
        image: "https://plus.unsplash.com/premium_photo-1664203068093-6f584b381ffd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29tYW4lMjBmYWNlfGVufDB8fDB8fHww&w=1000&q=80",
        subscibers: 4498
    },
    {
        name: "Amelia",
        image: "https://static-bebeautiful-in.unileverservices.com/Flawless-skin-basics.jpg",
        subscibers: 14765
    },
    {
        name: "Henry",
        image: "https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/s93-pa-4802-01.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=b1e69abe76c9b6f333ad818a7a94d0da",
        subscibers: 1279
    },
    {
        name: "Emma",
        image: "https://images.pexels.com/photos/948873/pexels-photo-948873.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-948873.jpg&fm=jpg",
        subscibers: 6983
    },
    {
        name: "Abigail",
        image: "https://www.byrdie.com/thmb/aZWxblVz7BMxeObHtJEKX_ddV3c=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Stocksy_txpce733110Uae300_Medium_4082489-df45caed45cd449b806f9ce16a20804a.jpg",
        subscibers: 5223
    },
    {
        name: "Noah",
        image: "https://www.realmenrealstyle.com/wp-content/uploads/2021/06/man-face.jpg",
        subscibers: 20251
    },
    {
        name: "James",
        image: "https://media.istockphoto.com/id/507995592/tr/foto%C4%9Fraf/pensive-man-looking-at-the-camera.jpg?s=612x612&w=0&k=20&c=KFLVwDo5zntyE0Rh2HuvZ-hLh3NCLlR10a7Jh9Zeuf8=",
        subscibers: 9711
    },
    {
        name: "Luna",
        image: "https://media.istockphoto.com/id/1258148390/photo/portrait-of-beautiful-young-woman-with-blonde-hair.jpg?s=612x612&w=0&k=20&c=_sqq-2a14lHFtSvmvf3E9aFnU0CXeFqrI65b-CDBlgU=",
        subscibers: 33145
    },
    {
        name: "Ava",
        image: "https://media.istockphoto.com/id/1324877086/photo/portrait-beautiful-young-woman-with-clean-fresh-skin.jpg?s=612x612&w=0&k=20&c=j_gQlG9owLn23HFGpnL6DhauOHHuVG2wcmZhnH75lqs=",
        subscibers: 98765
    }

];

document.getElementById('ss-img-0').setAttribute("src", `${streamers[streamers.length - 1].image}`);
document.getElementById('ss-img-1').setAttribute("src", `${streamers[0].image}`);
document.getElementById('ss-img-2').setAttribute("src", `${streamers[1].image}`);
document.getElementById('ss-img-3').setAttribute("src", `${streamers[2].image}`);
document.getElementById('ss-img-4').setAttribute("src", `${streamers[3].image}`);
document.getElementById('ss-img-5').setAttribute("src", `${streamers[4].image}`);
document.getElementById('ss-img-6').setAttribute("src", `${streamers[5].image}`);

//Fix addP3Style function

function addP3Style() {
    for(i = 0; i < ssItems.length; i++) {
        if(ssItems[i].id === 'ss-position-3') {

            let ssPosnThree = ssItems[i].children[0];
            let ssVideoButtons = document.createElement('div');
            let ssVBLeft = document.createElement('div');
            let ssVBRight = document.createElement('div');
            let ssPageRight = document.createElement('div');

            ssVideoButtons.classList.add('ss-video-buttons');
            ssVBLeft.classList.add('ss-vb-left');
            ssVBRight.classList.add('ss-vb-right');
            // ssPageRight.classList.add('ss-page-right');

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
            `;

            ssPosnThree.appendChild(ssVideoButtons);
            ssVideoButtons.appendChild(ssVBLeft);
            ssVideoButtons.appendChild(ssVBRight);
            // ssItems[i].appendChild(ssPageRight)

        } else if(ssItems[i].id !== 'ss-position-3'){
            let sth = ssItems[i].children[0].children;
            if(sth.length >= 2) {
                sth[1].remove()
            }
        }
    };
}
addP3Style();

// for(i = 0; i < ssItems.length; i++) {
//     if(ssItems[i].getAttribute('id') === null) {
//         ssItems[i].setAttribute('id', '');
//     }
// }

document.getElementById('ss-profile-picture').setAttribute('src', `${streamers[2].image}`);
document.getElementById('ss-pr-name').innerText = `${streamers[2].name}`;
document.getElementById('ss-pr-game').innerText = `${streamers[2].name}`;
document.getElementById('ss-pr-viewers').innerText = `${streamers[2].name}`;

ssNextButton.addEventListener('click', function() {
    for(i = ssItems.length - 1; i > -1; i--) {

        if(ssItems[i] === document.getElementById('ss-position-1')) {

            function changeImg() {
                for(let ii = streamers.length - 1; ii > -1; ii--) {
                    if(document.getElementById('ss-position-6').children[0].children[0].getAttribute('src') === `${streamers[ii].image}`){
                        if(ii < streamers.length - 1) {
                            document.getElementById('ss-position-0').children[0].children[0].setAttribute('src', `${streamers[ii + 1].image}`);
                        } else {
                            document.getElementById('ss-position-0').children[0].children[0].setAttribute('src', `${streamers[0].image}`);
                        }
                    }
                }
            };

            if(i + 5 < ssItems.length && i + 6 === ssItems.length) {
                changeImg()
                
                ssItems[i + 5].id = 'ss-position-5';
                ssItems[i + 4].id = 'ss-position-4';
                ssItems[i + 3].id = 'ss-position-3';
                ssItems[i + 2].id = 'ss-position-2';
                ssItems[i + 1].id = 'ss-position-1';
                ssItems[i].id = 'ss-position-0';
                ssItems[0].id = 'ss-position-6';
                break
                
            } else if(i + 5 === ssItems.length){
                changeImg()
                
                ssItems[i + 4].id = 'ss-position-4';
                ssItems[i + 3].id = 'ss-position-3';
                ssItems[i + 2].id = 'ss-position-2';
                ssItems[i + 1].id = 'ss-position-1';
                ssItems[i].id = 'ss-position-0';
                ssItems[i - 1].id = 'ss-position-6';
                ssItems[0].id = 'ss-position-5';

                break
            } else if(i + 4 == ssItems.length){
                
                changeImg()
                
                ssItems[i + 3].id = 'ss-position-3';
                ssItems[i + 2].id = 'ss-position-2';
                ssItems[i + 1].id = 'ss-position-1';
                ssItems[i].id = 'ss-position-0';
                ssItems[i - 1].id = 'ss-position-6';
                ssItems[i - 2].id = 'ss-position-5';
                ssItems[0].id = 'ss-position-4';
                break
            } else if(i + 3 == ssItems.length){
                changeImg()
                
                ssItems[i + 2].id = 'ss-position-2';
                ssItems[i + 1].id = 'ss-position-1';
                ssItems[i].id = 'ss-position-0';
                ssItems[i - 1].id = 'ss-position-6';
                ssItems[i - 2].id = 'ss-position-5';
                ssItems[i - 3].id = 'ss-position-4';
                ssItems[0].id = 'ss-position-3';
                break
            } else if(i + 2 == ssItems.length){
                changeImg()
                
                ssItems[i + 1].id = 'ss-position-1';
                ssItems[i].id = 'ss-position-0';
                ssItems[i - 1].id = 'ss-position-6';
                ssItems[i - 2].id = 'ss-position-5';
                ssItems[i - 3].id = 'ss-position-4';
                ssItems[i - 4].id = 'ss-position-3';
                ssItems[0].id = 'ss-position-2';
                break
            } else if(i + 1 == ssItems.length) {
                changeImg()
                
                ssItems[i].id = 'ss-position-0';
                ssItems[i - 1].id = 'ss-position-6';
                ssItems[i - 2].id = 'ss-position-5';
                ssItems[i - 3].id = 'ss-position-4';
                ssItems[i - 4].id = 'ss-position-3';
                ssItems[i - 5].id = 'ss-position-2';
                ssItems[0].id = 'ss-position-1';
                break
            } else {
                changeImg();
                
                ssItems[i + 6].id = 'ss-position-6';
                ssItems[i + 5].id = 'ss-position-5';
                ssItems[i + 4].id = 'ss-position-4';
                ssItems[i + 3].id = 'ss-position-3';
                ssItems[i + 2].id = 'ss-position-2';
                ssItems[i + 1].id = 'ss-position-1';
                ssItems[0].id = 'ss-position-0';
            } // why does adding break at the end help the process?
        
        }
    }

    addP3Style()

});
ssPrevButton.addEventListener('click', function() {

    for(i = ssItems.length; i > -1; i--) {

        if(ssItems[i] === document.getElementById('ss-position-6')) {
            function changeImg() {
                for(let ii = streamers.length - 1; ii > -1; ii--) {
                    if(ii === 0) {
                        document.getElementById('ss-position-6').children[0].children[0].setAttribute('src', `${streamers[streamers.length - 1].image}`);
                        break
                    } else {
                        if(document.getElementById('ss-position-0').children[0].children[0].getAttribute('src') === `${streamers[ii].image}`) {
                            document.getElementById('ss-position-6').children[0].children[0].setAttribute('src', `${streamers[ii - 1].image}`);
                            break
                        };
                    }
                }
            }
            if(i - 6 >= 0) {
                changeImg()

                ssItems[i - 1].id = 'ss-position-6';
                ssItems[i - 2].id = 'ss-position-5';
                ssItems[i - 3].id = 'ss-position-4';
                ssItems[i - 4].id = 'ss-position-3';
                ssItems[i - 5].id = 'ss-position-2';
                ssItems[i - 6].id = 'ss-position-1';
                ssItems[ssItems.length - 1].id = 'ss-position-0';
                break
            } else if(i - 6 === -1){
                changeImg()

                ssItems[i - 1].id = 'ss-position-6';
                ssItems[i - 2].id = 'ss-position-5';
                ssItems[i - 3].id = 'ss-position-4';
                ssItems[i - 4].id = 'ss-position-3';
                ssItems[i - 5].id = 'ss-position-2';
                ssItems[ssItems.length - 2].id = 'ss-position-0';
                ssItems[ssItems.length - 1].id = 'ss-position-1';

                break
            } else if(i - 5 === -1){
                changeImg()

                ssItems[i - 1].id = 'ss-position-6';
                ssItems[i - 2].id = 'ss-position-5';
                ssItems[i - 3].id = 'ss-position-4';
                ssItems[i - 4].id = 'ss-position-3';
                ssItems[ssItems.length - 3].id = 'ss-position-0';
                ssItems[ssItems.length - 2].id = 'ss-position-1';
                ssItems[ssItems.length - 1].id = 'ss-position-2';

                break
            } else if(i - 4 === -1){
                changeImg()

                ssItems[i - 1].id = 'ss-position-6';
                ssItems[i - 2].id = 'ss-position-5';
                ssItems[i - 3].id = 'ss-position-4';
                ssItems[ssItems.length - 4].id = 'ss-position-0';
                ssItems[ssItems.length - 3].id = 'ss-position-1';
                ssItems[ssItems.length - 2].id = 'ss-position-2';
                ssItems[ssItems.length - 1].id = 'ss-position-3';

                break
            } else if(i - 3 === -1){
                changeImg()

                ssItems[i - 1].id = 'ss-position-6';
                ssItems[i - 2].id = 'ss-position-5';
                ssItems[ssItems.length - 5].id = 'ss-position-0';
                ssItems[ssItems.length - 4].id = 'ss-position-1';
                ssItems[ssItems.length - 3].id = 'ss-position-2';
                ssItems[ssItems.length - 2].id = 'ss-position-3';
                ssItems[ssItems.length - 1].id = 'ss-position-4';

                break
            } else if(i - 2 === -1){
                changeImg()

                ssItems[i - 1].id = 'ss-position-6';
                ssItems[ssItems.length - 6].id = 'ss-position-0';
                ssItems[ssItems.length - 5].id = 'ss-position-1';
                ssItems[ssItems.length - 4].id = 'ss-position-2';
                ssItems[ssItems.length - 3].id = 'ss-position-3';
                ssItems[ssItems.length - 2].id = 'ss-position-4';
                ssItems[ssItems.length - 1].id = 'ss-position-5';

                break
            } else  if(i - 1 === -1){
                changeImg()
                ssItems[ssItems.length - 7].id = 'ss-position-0';
                ssItems[ssItems.length - 6].id = 'ss-position-1';
                ssItems[ssItems.length - 5].id = 'ss-position-2';
                ssItems[ssItems.length - 4].id = 'ss-position-3';
                ssItems[ssItems.length - 3].id = 'ss-position-4';
                ssItems[ssItems.length - 2].id = 'ss-position-5';
                ssItems[ssItems.length - 1].id = 'ss-position-6';
            }
        }
    }
    addP3Style()
});

let followers = [
    {
        name: "Jack",
        profilePicture: "https://techbriefly.com/wp-content/uploads/2023/02/AI-impersonation-Fake-name-generators-this-person-does-not-exist-images-and-more-1.jpg",
        viewers: 2569,
        game: "csgo",
        live: false
    },
    {
        name: "Tom",
        profilePicture: "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=2000",
        viewers: 658,
        game: "fortnite",
        live: true
    },
    {
        name: "Dan",
        profilePicture: "https://img.freepik.com/free-photo/emotions-people-concept-headshot-serious-looking-handsome-man-with-beard-looking-confident-determined_1258-26730.jpg?w=2000",
        viewers: 8303,
        game: "call of duty",
        live: false
    },
    {
        name: "Emma",
        profilePicture: "https://images.pexels.com/photos/948873/pexels-photo-948873.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-948873.jpg&fm=jpg",
        viewers: 6983,
        game: "chess",
        live: false
    },
    {
        name: "Mia",
        profilePicture: "https://plus.unsplash.com/premium_photo-1664203068093-6f584b381ffd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29tYW4lMjBmYWNlfGVufDB8fDB8fHww&w=1000&q=80",
        viewers: 4498,
        game: "tetris",
        live: true
    },
    {
        name: "Amelia",
        profilePicture: "https://static-bebeautiful-in.unileverservices.com/Flawless-skin-basics.jpg",
        viewers: 14765,
        game: "hollow knight",
        live: false
    },
    {
        name: "Henry",
        profilePicture: "https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/s93-pa-4802-01.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=b1e69abe76c9b6f333ad818a7a94d0da",
        viewers: 1279,
        game: "devil may cry",
        live: true
    },
    {
        name: "Emma",
        profilePicture: "https://images.pexels.com/photos/948873/pexels-photo-948873.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-948873.jpg&fm=jpg",
        viewers: 6983,
        game: "devil may cry 2",
        live: true
    },
    {
        name: "Abigail",
        profilePicture: "https://www.byrdie.com/thmb/aZWxblVz7BMxeObHtJEKX_ddV3c=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Stocksy_txpce733110Uae300_Medium_4082489-df45caed45cd449b806f9ce16a20804a.jpg",
        viewers: 5223,
        game: "devil may cry 3",
        live: false
    }
];
let rcChannels = [
    {
        name: "Tom",
        profilePicture: "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=2000",
        viewers: 658,
        game: "fortnite",
        live: true
    },
    {
        name: "Mia",
        profilePicture: "https://plus.unsplash.com/premium_photo-1664203068093-6f584b381ffd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29tYW4lMjBmYWNlfGVufDB8fDB8fHww&w=1000&q=80",
        viewers: 4498,
        game: "tetris",
        live: true
    },
    {
        name: "Henry",
        profilePicture: "https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/s93-pa-4802-01.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=b1e69abe76c9b6f333ad818a7a94d0da",
        viewers: 1279,
        game: "devil may cry",
        live: true
    },
    {
        name: "Emma",
        profilePicture: "https://images.pexels.com/photos/948873/pexels-photo-948873.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-948873.jpg&fm=jpg",
        viewers: 6983,
        game: "devil may cry 2",
        live: true
    },
    {
        name: "Tom",
        profilePicture: "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=2000",
        viewers: 658,
        game: "fortnite",
        live: true
    },
    {
        name: "Mia",
        profilePicture: "https://plus.unsplash.com/premium_photo-1664203068093-6f584b381ffd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29tYW4lMjBmYWNlfGVufDB8fDB8fHww&w=1000&q=80",
        viewers: 4498,
        game: "tetris",
        live: true
    },
    {
        name: "Henry",
        profilePicture: "https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/s93-pa-4802-01.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=b1e69abe76c9b6f333ad818a7a94d0da",
        viewers: 1279,
        game: "devil may cry",
        live: true
    },
    {
        name: "Emma",
        profilePicture: "https://images.pexels.com/photos/948873/pexels-photo-948873.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-948873.jpg&fm=jpg",
        viewers: 6983,
        game: "devil may cry 2",
        live: true
    }
];

(function createSidebarChannels() {
    let followerCount = -1;
    let rcChannelsCount = -1;
    let liveChannels = [];
    let offlineChannels = [];
    let orderedFollowers = [];
    let followedChannels = document.getElementById('followed-channels');
    let recommendedChannels = document.getElementById('recommended-channels');
    let sbFcSm = document.getElementById("sb-fc-sm");
    let sbFcSl = document.getElementById("sb-fc-sl");
    let sbRcSm = document.getElementById("sb-rc-sm");
    let sbRcSl = document.getElementById("sb-rc-sl");

    // Followed Channels

    followers.map(f => {
        if(f.live) {
            liveChannels.push(f)
        } else {
            offlineChannels.push(f)
        }
    })

    liveChannels.forEach(c => orderedFollowers.push(c));
    offlineChannels.forEach(c => orderedFollowers.push(c));

    followers.map(() => {
        followerCount++

        // learn how to have the same variable name and argument name without problem.
        
        if(orderedFollowers.length > 6) {
            sbFcSm.style.display = "block";

            if(followerCount < 6) {
                if(orderedFollowers[followerCount].live) {
                    followedChannels.innerHTML +=
                    `
                    <div class="channel">
                        <div class="fc-left">
                            <div class="pfp-container">
                                <img class="channel-pfp" src="${orderedFollowers[followerCount].profilePicture}" alt="">
                            </div>
                            <div class="channel-texts">
                                <div class="channel-name-div">
                                    <p class="channel-name">${orderedFollowers[followerCount].name}</p>
                                </div>
                                <div class="stream-content-div">
                                    <p class="stream-content">${orderedFollowers[followerCount].game}</p>
                                </div>
                            </div>
                        </div>
                            <div class="fc-right-live">
                                <p><span class="live-symbol">&#128308;</span>${orderedFollowers[followerCount].viewers}</p>
                            </div>
                    </div>
                    `;
                } else {
                    followedChannels.innerHTML +=
                        `
                            <div class="channel">
                                <div class="offline-fc-left">
                                    <div class="pfp-container">
                                        <img class="channel-pfp" src="${orderedFollowers[followerCount].profilePicture}" alt="">
                                    </div>
                                    <p class="channel-name">${orderedFollowers[followerCount].name}</p>
                                </div>
                                    <p class="offline-text">Offline</p>
                            </div>
                        `;
                }
            } else{
                sbFcSm.addEventListener("click", () => {
                    followedChannels.innerHTML += 
                    `
                    <div class="channel">
                        <div class="fc-left">
                            <div class="pfp-container">
                                <img class="channel-pfp" src="${orderedFollowers[followerCount].profilePicture}" alt="">
                            </div>
                            <div class="channel-texts">
                                <div class="channel-name-div">
                                    <p class="channel-name">${orderedFollowers[followerCount].name}</p>
                                </div>
                                <div class="stream-content-div">
                                    <p class="stream-content">${orderedFollowers[followerCount].game}</p>
                                </div>
                            </div>
                        </div>
                            <div class="fc-right-live">
                                <p><span class="live-symbol">&#128308;</span>${orderedFollowers[followerCount].viewers}</p>
                            </div>
                    </div>
                    `;
                    sbFcSm.style.display = "none";
                    sbFcSl.style.display = "block";

                    // problem with the followerCount variable.
                    // should be 6 7 8 but is 8 8 8.
                    
                });
                sbFcSl.addEventListener("click", () => {
                    for(i = followers.length - 1; i > 5; i--) {
                        followedChannels.children[i].remove()
                    }
                    sbFcSl.style.display = "none";
                    sbFcSm.style.display = "block";
                })
            }

            // why does it only work with if statement but not while loop?

        } else {
            sbFcSm.style.display = "none";
            if(orderedFollowers[followerCount].live) {
                channelsList.innerHTML +=
                `
                <div class="channel">
                    <div class="fc-left">
                        <div class="pfp-container">
                            <img class="channel-pfp" src="${orderedFollowers[followerCount].profilePicture}" alt="">
                        </div>
                        <div class="channel-texts">
                            <div class="channel-name-div">
                                <p class="channel-name">${orderedFollowers[followerCount].name}</p>
                            </div>
                            <div class="stream-content-div">
                                <p class="stream-content">${orderedFollowers[followerCount].game}</p>
                            </div>
                        </div>
                    </div>
                        <div class="fc-right-live">
                            <p><span class="live-symbol">&#128308;</span>${orderedFollowers[followerCount].viewers}</p>
                        </div>
                </div>
                `;
            } else {
                channelsList.innerHTML +=
                    `
                        <div class="channel">
                            <div class="offline-fc-left">
                                <div class="pfp-container">
                                    <img class="channel-pfp" src="${orderedFollowers[followerCount].profilePicture}" alt="">
                                </div>
                                <p class="channel-name">${orderedFollowers[followerCount].name}</p>
                            </div>
                                <p class="offline-text">Offline</p>
                        </div>
                    `;
            }
        };
        
        // Recommended Channels

    });
    rcChannels.map(() => {
        rcChannelsCount++;
        
        if(rcChannelsCount < 6) {    
            recommendedChannels.innerHTML +=
            `
            <div class="channel">
                <div class="fc-left">
                    <div class="pfp-container">
                        <img class="channel-pfp" src="${rcChannels[rcChannelsCount].profilePicture}" alt="">
                    </div>
                    <div class="channel-texts">
                        <div class="channel-name-div">
                            <p class="channel-name">${rcChannels[rcChannelsCount].name}</p>
                        </div>
                        <div class="stream-content-div">
                            <p class="stream-content">${rcChannels[rcChannelsCount].game}</p>
                        </div>
                    </div>
                </div>
                    <div class="fc-right-live">
                        <p><span class="live-symbol">&#128308;</span>${rcChannels[rcChannelsCount].viewers}</p>
                    </div>
            </div>
            `;
        } else {
            sbRcSm.addEventListener("click", () => {
                recommendedChannels.innerHTML += 
                `
                <div class="channel">
                    <div class="fc-left">
                        <div class="pfp-container">
                            <img class="channel-pfp" src="${rcChannels[rcChannelsCount].profilePicture}" alt="">
                        </div>
                        <div class="channel-texts">
                            <div class="channel-name-div">
                                <p class="channel-name">${rcChannels[rcChannelsCount].name}</p>
                            </div>
                            <div class="stream-content-div">
                                <p class="stream-content">${rcChannels[rcChannelsCount].game}</p>
                            </div>
                        </div>
                    </div>
                        <div class="fc-right-live">
                            <p><span class="live-symbol">&#128308;</span>${rcChannels[rcChannelsCount].viewers}</p>
                        </div>
                </div>
                `;
                sbRcSm.style.display = "none";
                sbRcSl.style.display = "block";
                console.log(rcChannels.length);

                // problem with the followerCount variable.
                // should be 6 7 8 but is 8 8 8.
                
            });
            sbRcSl.addEventListener("click", () => {
                for(i = rcChannels.length - 1; i > 5; i--) {
                    recommendedChannels.children[i].remove()
                }
                sbRcSl.style.display = "none";
                sbRcSm.style.display = "block";
            })
        };
    })
})()
    

    // if(followerCount < 6) {
    //     console.log(followerCount)
    //     recommendedChannels.innerHTML +=
    //     `
    //     <div class="channel">
    //         <div class="fc-left">
    //             <div class="pfp-container">
    //                 <img class="channel-pfp" src="${follower.profilePicture}" alt="">
    //             </div>
    //             <div class="channel-texts">
    //                 <div class="channel-name-div">
    //                     <p class="channel-name">${follower.name}</p>
    //                 </div>
    //                 <div class="stream-content-div">
    //                     <p class="stream-content">${follower.game}</p>
    //                 </div>
    //             </div>
    //         </div>
    //             <div class="fc-right-live">
    //                 <p><span class="live-symbol">&#128308;</span>${follower.viewers}</p>
    //             </div>
    //     </div>
    //     `;
    // } else {
    //     let sbRcSm = document.getElementById("sb-rc-sm");
    //     let sbRcSl = document.getElementById("sb-rc-sl");
    //     sbRcSm.addEventListener("click", () => {
    //         recommendedChannels.innerHTML += 
    //         `
    //         <div class="channel">
    //             <div class="fc-left">
    //                 <div class="pfp-container">
    //                     <img class="channel-pfp" src="${followers[followerCount].profilePicture}" alt="">
    //                 </div>
    //                 <div class="channel-texts">
    //                     <div class="channel-name-div">
    //                         <p class="channel-name">${followers[followerCount].name}</p>
    //                     </div>
    //                     <div class="stream-content-div">
    //                         <p class="stream-content">${followers[followerCount].game}</p>
    //                     </div>
    //                 </div>
    //             </div>
    //                 <div class="fc-right-live">
    //                     <p><span class="live-symbol">&#128308;</span>${followers[followerCount].viewers}</p>
    //                 </div>
    //         </div>
    //         `;
    //         sbRcSm.style.display = "none";
    //         sbRcSl.style.display = "block";
    //         // problem with the followerCount variable.
    //         // should be 6 7 8 but is 8 8 8.
            
    //     });
    //     sbRcSl.addEventListener("click", () => {
    //         for(i = followers.length - 1; i > 5; i--) {
    //             recommendedChannels.children[i].remove()
    //         }
    //         sbRcSl.style.display = "none";
    //         sbRcSm.style.display = "block";
    //     })
    // }
    
    // if(followerCount < 6) {
    //     followedChannels.innerHTML +=
    //     `
    //         <div class="channel">
    //             <div class="offline-fc-left">
    //                 <div class="pfp-container">
    //                     <img class="channel-pfp" src="${follower.profilePicture}" alt="">
    //                 </div>
    //                 <p class="channel-name">${follower.name}</p>
    //             </div>
    //                 <p class="offline-text">Offline</p>
    //         </div>
    //     `;
    // } else {
    //     let sbFcSm = document.getElementById("sb-fc-sm");
    //     let sbFcSl = document.getElementById("sb-fc-sl");
    //     sbFcSm.addEventListener("click", () => {
    //         followedChannels.innerHTML += 
    //         `
    //         <div class="channel">
    //             <div class="offline-fc-left">
    //                 <div class="pfp-container">
    //                     <img class="channel-pfp" src="${followers[followerCount].profilePicture}" alt="">
    //                 </div>
    //                 <p class="channel-name">${followers[followerCount].name}</p>
    //             </div>
    //                 <p class="offline-text">Offline</p>
    //         </div>
    //         `;
    //         sbFcSm.style.display = "none";
    //         sbFcSl.style.display = "block";
    //         // problem with the followerCount variable.
    //         // should be 6 7 8 but is 8 8 8.
            
    //     });
    //     sbFcSl.addEventListener("click", () => {
    //         for(i = followers.length - 1; i > 5; i--) {
    //             followedChannels.children[i].remove()
    //         }
    //         sbFcSl.style.display = "none";
    //         sbFcSm.style.display = "block";
    //     })
    // };
    // if(followerCount < 6) {
    //     recommendedChannels.innerHTML +=
    //     `
    //     <div class="channel">
    //         <div class="fc-left">
    //             <div class="pfp-container">
    //                 <img class="channel-pfp" src="${follower.profilePicture}" alt="">
    //             </div>
    //             <div class="channel-texts">
    //                 <div class="channel-name-div">
    //                     <p class="channel-name">${follower.name}</p>
    //                 </div>
    //                 <div class="stream-content-div">
    //                     <p class="stream-content">${follower.game}</p>
    //                 </div>
    //             </div>
    //         </div>
    //             <div class="fc-right-live">
    //                 <p><span class="live-symbol">&#128308;</span>${follower.viewers}</p>
    //             </div>
    //     </div>
    //     `;
    // } else {
    //     let sbRcSm = document.getElementById("sb-rc-sm");
    //     let sbRcSl = document.getElementById("sb-rc-sl");
    //     sbRcSm.addEventListener("click", () => {
    //         recommendedChannels.innerHTML += 
    //         `
    //         <div class="channel">
    //             <div class="fc-left">
    //                 <div class="pfp-container">
    //                     <img class="channel-pfp" src="${followers[followerCount].profilePicture}" alt="">
    //                 </div>
    //                 <div class="channel-texts">
    //                     <div class="channel-name-div">
    //                         <p class="channel-name">${followers[followerCount].name}</p>
    //                     </div>
    //                     <div class="stream-content-div">
    //                         <p class="stream-content">${followers[followerCount].game}</p>
    //                     </div>
    //                 </div>
    //             </div>
    //                 <div class="fc-right-live">
    //                     <p><span class="live-symbol">&#128308;</span>${followers[followerCount].viewers}</p>
    //                 </div>
    //         </div>
    //         `;
    //         sbRcSm.style.display = "none";
    //         sbRcSl.style.display = "block";
    //         // problem with the followerCount variable.
    //         // should be 6 7 8 but is 8 8 8.
            
    //     });
    //     sbRcSl.addEventListener("click", () => {
    //         for(i = followers.length - 1; i > 5; i--) {
    //             recommendedChannels.children[i].remove()
    //         }
    //         sbRcSl.style.display = "none";
    //         sbRcSm.style.display = "block";
    //     })
    // }