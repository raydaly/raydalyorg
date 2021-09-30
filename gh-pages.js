var ghpages = require('gh-pages');

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/raydaly/raydalyorg.git', // Update to point to your repository  
        user: {
            name: 'Ray Daly', // update to use your name
            email: 'raydaly@gmail.com' // Update to use your email
        }
    },
    () => {
        console.log('Deployed raydaly.org Complete!')
    }
)