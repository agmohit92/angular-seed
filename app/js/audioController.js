angular.module('myAudioApp.controllers', [])

.controller('AudioCtrl', ['$scope', function ($scope) {
    $scope.songs = [
        {
            id: 'one',
            title: 'Life-Sahi-Hai',
            artist: 'Drake',
            url: 'audio/Life-Sahi-Hai.mp3'
        },
        {
            id: 'two',
            title: 'Paro',
            artist: 'Nicki Minaj',
            url: 'audio/Paro.mp3'
        },
        {
            id: 'three',
            title: 'sharabi',
            artist: 'Akon',
            url: 'audio/sharabi.mp3'
        },
        {
            id: 'four',
            title: 'Zindagi',
            artist: 'A Cow',
            url: 'audio/Zindagi.mp3'
        }
    ];

angular.element(document).ready(function () {
    document.getElementById('progressBar').addEventListener('click', function (e) {
    var x = e.pageX - this.offsetLeft, // or e.offsetX (less support, though)
        y = e.pageY - this.offsetTop,  // or e.offsetY
        xMax =Number(this.style.width.replace(/[^\d\.\-]/g, ''));
        clickedValue = (xMax - x / xMax);
          var end =new moment($scope.currentDuration);
          var cur = new moment($scope.currentPostion);
          var dif = (Number(end.hour()) - cur.hour()) + ':' + (Number(end.minute())-cur.minute()) + ':' + (end.second()-cur.second());



    console.log(x, end.diff(cur), moment($scope.currentDuration), end,xMax);
});
});
}]);
