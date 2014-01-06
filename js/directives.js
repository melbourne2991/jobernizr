var jobernizeDirectives = angular.module('jobernizeDirectives', []);

jobernizeDirectives.directive('viewLargeContent', function() {
	return {
		scope: {
			index: '@'	
		},
		require: 'ngModel',
		link: function (scope, el, attrs, ngModel) {

			function openEditor() {
				console.log(scope.index);

				var main_container = angular.element('.main_container');
				var view_frame = angular.element('.view-frame');
				var content_container;
				var dimmer;

				if(angular.element('.dimmer').length != 0) {
					var dimmer = angular.element('.dimmer');
					dimmer.show();
				}
				else {
					main_container.append('<div class="dimmer"></div>');
					var dimmer = angular.element('.dimmer');
					
				}

				if(angular.element('.large-content.' + scope.index).length == 0) {
					main_container.append(
							'<div class="large-content ' + scope.index + '">'
						+	'<textarea>' + ngModel.$viewValue + '</textarea>' 
						+   '<button>Submit Changes</button>'
						+ 	'</div>'
					);	

					var content_container = angular.element('.large-content.' + scope.index);
				} else {
					var content_container = angular.element('.large-content.' + scope.index);
					content_container.show();
				}				

				console.log(content_container);
				
				// content_container.css({ marginTop: (content_container.height()/-2), width: view_frame.width(), marginLeft: (view_frame.width()/-2) })
				content_container.css({ height: (0.8*main_container.height()), width: view_frame.width(), marginLeft: (view_frame.width()/-2)  })


				content_container.find('button').on('click', function() {
					var new_content = content_container.find('textarea').get(0).value;
					
					ngModel.$setViewValue(new_content);

					content_container.hide();
					dimmer.hide();
				});
			}

			// el.on('click', openEditor);
			el.on('click', openEditor);
			
		}
	}
});