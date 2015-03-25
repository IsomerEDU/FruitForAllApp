/**
 * Created by steve on 3/17/15.
 */
angular.module('starter').controller('AddphotoController', ['$scope','$cordovaCamera',
    function($scope, $cordovaCamera) {

        //$scope.getPhoto = function() {
        //    Camera.getPicture().then(function(imageURI) {
        //        console.log(imageURI);
        //    }, function(err) {
        //        console.err(err);
        //    });
        //};

        //$scope.takePicture = function() {
        //    var options = {
        //        quality : 50,
        //        destinationType :{
        //            DATA_URL:1,
        //            FILE_URI:1,
        //            NATIVE_URI:2
        //        },
        //        sourceType : {
        //            PHOTOLIBRARY : 0,
        //            CAMERA : 1,
        //            SAVEDPHOTOALBUM : 2
        //        },
        //        allowEdit : true,
        //        encodingType: {
        //            JPEG:0,
        //            PNG:1
        //        },
        //        targetWidth: 300,
        //        targetHeight: 300,
        //        popoverOptions: {
        //            x : 0,
        //            y :  32,
        //            width : 320,
        //            height : 480,
        //            arrowDir : {
        //                ARROW_UP : 1,
        //                ARROW_DOWN : 2,
        //                ARROW_LEFT : 4,
        //                ARROW_RIGHT : 8,
        //                ARROW_ANY : 15
        //            }
        //        },
        //        saveToPhotoAlbum: false
        //    };

            //$cordovaCamera.getPicture(options).then(function(imageData) {
            //    $scope.imgURI = "data:image/jpeg;base64," + imageData;
            //}, function(err) {
            //    //wrut wroe!!
            //});
        //}

        $scope.getPhoto = function(){
            $cordovaCamera.getPicture({
                quality:75,
                targetWidth:480,
                targetheight:640,
                correctOrientation:true,
                saveToPhotoAlbum:false
            }).then(function(imageURI){
                $scope.imgURI = imageURI;
            },function(err){
                alert('Yo, Cant do that!!!')
            })
        };
    }

]);
