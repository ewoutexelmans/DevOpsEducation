var app = angular.module('labTutorApp', []);

app.controller('RoomController', function($scope) {
  $scope.room = {
    numberOfQuestions: 7
  };

  var defaultExerciseStatus = function() {
    var defaultExerciseStatusArr = [];
    for (var i = 0; i < $scope.room.numberOfQuestions; i++) { defaultExerciseStatusArr.push({ completed: false }); }
    return defaultExerciseStatusArr;
  };

  $scope.room.currentUser = {
    name: '',
    exercisesStatus: defaultExerciseStatus()
  };

  $scope.room.otherUsers = [
    {
      name: 'Tenesha Thorn',
      exercisesStatus: defaultExerciseStatus()
    },
    {
      name: 'Isaiah Imperato',
      exercisesStatus: defaultExerciseStatus()
    },
    {
      name: 'Tesha Town',
      exercisesStatus: defaultExerciseStatus()
    },
    {
      name: 'Lynetta Lemus',
      exercisesStatus: defaultExerciseStatus()
    },
    {
      name: 'Christeen Currence',
      exercisesStatus: defaultExerciseStatus()
    },
    {
      name: 'Tamatha Thrasher',
      exercisesStatus: defaultExerciseStatus()
    },
    {
      name: 'Irvin Iliff',
      exercisesStatus: defaultExerciseStatus()
    },
    {
      name: 'Stephanie Steveson',
      exercisesStatus: defaultExerciseStatus()
    },
    {
      name: 'Janee Jong',
      exercisesStatus: defaultExerciseStatus()
    },
    {
      name: 'Kellye Kirtley',
      exercisesStatus: defaultExerciseStatus()
    },
    {
      name: 'Rebecca Reddin',
      exercisesStatus: defaultExerciseStatus()
    },
    {
      name: 'Tamela Tien',
      exercisesStatus: defaultExerciseStatus()
    },
    {
      name: 'Leopoldo Lucarelli',
      exercisesStatus: defaultExerciseStatus()
    },
    {
      name: 'Molly Marcello',
      exercisesStatus: defaultExerciseStatus()
    },
    {
      name: 'Wendi Wray',
      exercisesStatus: defaultExerciseStatus()
    },
    {
      name: 'Bernard Borders',
      exercisesStatus: defaultExerciseStatus()
    }
  ];

  $scope.allExercisesCompleted = function (user) {
    var exercisesCompleted = true;
    user.exercisesStatus.forEach(function (status) {
      if (!status.completed) {
        exercisesCompleted = false;
      }
    });
    return exercisesCompleted;
  };

  $scope.toggleExerciseStatus = function (user, exercise) {
    user.exercisesStatus[exercise].completed = !user.exercisesStatus[exercise].completed;
  };
});
