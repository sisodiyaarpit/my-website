document.addEventListener("DOMContentLoaded", function() {
    console.log("Welcome to Arpit's website!");
});
document.addEventListener("DOMContentLoaded", function() {
    const shareButton = document.getElementById('shareButton');

    shareButton.addEventListener('click', function() {
        if (navigator.share) {
            navigator.share({
                title: 'Happy Raksha Bandhan',
                text: 'Sending you heartfelt blessings on Raksha Bandhan. Visit my website to see the beautiful message!',
                url: window.location.href
            }).then(() => {
                alert('Blessings shared successfully!');
            }).catch((error) => {
                alert('Could not share the blessings: ' + error);
            });
        } else {
            alert('Sharing not supported on this browser.');
        }
    });
});
