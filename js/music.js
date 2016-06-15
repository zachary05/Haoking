var ap4 = new APlayer({
    element: document.getElementById('player4'),
    narrow: false,
    autoplay: true,
    showlrc: false,
    mutex: true,
    theme: '#00b2ff',
    music: [
        {
            title: 'fly away',
            author: '梁静茹',
            url: 'http://7xthft.com1.z0.glb.clouddn.com/%E6%A2%81%E9%9D%99%E8%8C%B9-fly%20away.mp3',
            // pic: 'http://7xthft.com1.z0.glb.clouddn.com/zachary.png'
        },
        {
            title: '忽然之间',
            author: 'hao',
            url: 'http://7xthft.com1.z0.glb.clouddn.com/%E6%98%8A%E5%93%A5-%E5%BF%BD%E7%84%B6%E4%B9%8B%E9%97%B4.mp3',
            pic: 'http://7xthft.com1.z0.glb.clouddn.com/psb.jpeg'
        },
        {
            title: 'Loum Pai Roue Plow',
            author: 'Sara Pungprasert',
            url: 'http://7xthft.com1.z0.glb.clouddn.com/Sara%20Pungprasert%20-%20Loum%20Pai%20Roue%20Plow.mp3',
            pic: 'http://devtest.qiniudn.com/回レ！雪月花.jpg'
        }
        ,
        {
            title: 'Living to love you',
            author: 'Sarah Connor',
            url: 'http://7xthft.com1.z0.glb.clouddn.com/Sarah%20Connor%20-%20Living%20To%20Love%20You%20-%20Single%20Version.mp3',
            // pic: 'http://devtest.qiniudn.com/回レ！雪月花.jpg'
        }
    ]
});
ap4.init();
