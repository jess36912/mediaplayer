const files = ['Nature-8399','River-655','Waterfall-941','Wave-2737'];

/* add JavaScript in the following */
document.addEventListener("DOMContentLoaded", function()
{
    const aside = document.querySelector('aside');
    const vidPlayer = document.querySelector('#vidPlayer');

    for(let idx=0; idx<files.length; idx++)
    {
        let filename = 'images/' + files[idx] + '.jpg';
        let img = document.createElement('img');
        img.src = filename;
        aside.appendChild(img);

        img.addEventListener('click', function(){
            vidPlayer.pause();
            vidPlayer.currentTime = 0;
            vidPlayer.src = 'videos/' + files [idx] + '.mp4';
        });
    }

    //play and pause buttons
    const playBtn = document.querySelector('#play');
    const stopBtn = document.querySelector('#stop');

    playBtn.addEventListener('click', function(){
        vidPlayer.play();
    });

    stopBtn.addEventListener('click', function(){
        vidPlayer.pause();
    });

    //progress bar
    const progress = document.querySelector('#progressFilled');
    vidPlayer.addEventListener('timeupdate', function(){
        const percentage = (vidPlayer.currentTime / vidPlayer.duration) *100;
        progress.style.flexBasis = percentage + "%";
    });

    //skip buttons
    const skipBtns = document.querySelectorAll('[data-skip]');
    for(let skipBtn of skipBtns)
    {
        skipBtn.addEventListener('click', function(e){
            const skip = e.target.dataset.skip;
            vidPlayer.currentTime = vidPlayer.currentTime + parseInt(skip);
        });

    }

    //volume
    const volume = document.querySelector('#volume');
    volume.addEventListener('change', function(){
        vidPlayer.volume = volume.value;
    });



});