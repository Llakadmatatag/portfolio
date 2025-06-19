document.addEventListener('DOMContentLoaded', function() {
    // Get the modal
    const modal = document.getElementById('profile-modal');
    const modalImg = document.getElementById('modal-image');
    const closeBtn = document.querySelector('.close-modal');
    const profilePic = document.querySelector('.profile-pic img');

    // When the user clicks on the profile picture, open the modal 
    profilePic.addEventListener('click', function() {
        modal.style.display = 'flex';
        modalImg.src = this.src;
        document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    });

    // When the user clicks on (x), close the modal
    closeBtn.onclick = function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Re-enable scrolling
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Re-enable scrolling
        }
    }

    // Close modal when pressing Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Re-enable scrolling
        }
    });

    // Tab switching functionality
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');
    
    // Initialize first tab as active
    tabs[0].classList.add('active');
    tabContents[0].classList.add('active');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs and hide all sections
            tabs.forEach(t => t.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked tab and show corresponding section
            this.classList.add('active');
            const tabId = this.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // Like button functionality
    document.addEventListener('click', function(e) {
        if (e.target.closest('.fa-heart')) {
            const heart = e.target.closest('.fa-heart');
            heart.classList.toggle('fas');
            heart.classList.toggle('far');
            
            // Get the parent span to update the like count
            const likeCount = heart.parentNode.querySelector('span:not(.sr-only)') || 
                             heart.parentNode;
            let count = parseInt(likeCount.textContent) || 0;
            
            if (heart.classList.contains('fas')) {
                likeCount.textContent = count + 1;
                heart.style.color = '#f91880';
            } else {
                likeCount.textContent = Math.max(0, count - 1);
                heart.style.color = '';
            }
        }
        
        // Retweet functionality
        if (e.target.closest('.fa-retweet')) {
            const retweetIcon = e.target;
            retweetIcon.classList.toggle('retweeted');
            
            // Get the parent span to update the retweet count
            const retweetCount = retweetIcon.parentNode.querySelector('span:not(.sr-only)') || 
                               retweetIcon.parentNode;
            let count = parseInt(retweetCount.textContent) || 0;
            
            if (retweetIcon.classList.contains('retweeted')) {
                retweetCount.textContent = count + 1;
                retweetIcon.style.color = '#00ba7c';
            } else {
                retweetCount.textContent = Math.max(0, count - 1);
                retweetIcon.style.color = '';
            }
        }
    });
    
    // Back button functionality
    const backArrow = document.querySelector('.back-arrow');
    if (backArrow) {
        backArrow.addEventListener('click', function() {
            window.history.back();
        });
    }
    
    // More options button
    const moreOptions = document.querySelector('.more-options');
    if (moreOptions) {
        moreOptions.addEventListener('click', function(e) {
            e.stopPropagation();
            alert('More options menu would appear here');
        });
    }
});
